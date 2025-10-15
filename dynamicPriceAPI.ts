// Dynamic Stock Price API - Fetches real prices for ANY stock symbol
// This system can handle thousands of stocks from multiple exchanges

export interface RealTimePrice {
  symbol: string;
  currentPrice: number;
  previousClose: number;
  dayChange: number;
  dayChangePercent: number;
  volume: number;
  marketCap?: string;
  high52Week?: number;
  low52Week?: number;
  exchange: string;
  currency: string;
  lastUpdated: string;
  dataSource: string;
}

// Multi-API Price Fetcher - Tries multiple sources for maximum coverage
export class DynamicPriceFetcher {
  private apiKeys: {
    alphaVantage?: string;
    finnhub?: string;
    twelveData?: string;
    polygon?: string;
  };

  constructor(apiKeys: any = {}) {
    this.apiKeys = {
      alphaVantage: apiKeys.alphaVantage || process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY,
      finnhub: apiKeys.finnhub || process.env.NEXT_PUBLIC_FINNHUB_API_TOKEN,
      twelveData: apiKeys.twelveData || process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY,
      polygon: apiKeys.polygon || process.env.NEXT_PUBLIC_POLYGON_API_KEY
    };
  }

  // Main function to get price for ANY stock
  async getStockPrice(symbol: string): Promise<RealTimePrice | null> {
    const cleanSymbol = symbol.toUpperCase().trim();
    console.log(`🔍 Fetching price for: ${cleanSymbol}`);

    // Try multiple APIs in order of reliability
    const fetchMethods = [
      () => this.fetchFromAlphaVantage(cleanSymbol),
      () => this.fetchFromTwelveData(cleanSymbol),
      () => this.fetchFromFinnhub(cleanSymbol),
      () => this.fetchFromYahooFinance(cleanSymbol),
      () => this.fetchFromPolygon(cleanSymbol),
      () => this.fetchFromFMP(cleanSymbol), // Financial Modeling Prep
      () => this.fetchFromIEX(cleanSymbol), // IEX Cloud
    ];

    for (const fetchMethod of fetchMethods) {
      try {
        const result = await fetchMethod();
        if (result && result.currentPrice > 0) {
          console.log(`✅ Price found via ${result.dataSource}: ${result.currentPrice}`);
          return result;
        }
      } catch (error) {
        console.log(`❌ API failed:`, error);
        continue;
      }
    }

    console.log(`⚠️ No price found for ${cleanSymbol} from any API`);
    return null;
  }

  // Alpha Vantage API (Most reliable)
  private async fetchFromAlphaVantage(symbol: string): Promise<RealTimePrice | null> {
    if (!this.apiKeys.alphaVantage || this.apiKeys.alphaVantage === 'demo') {
      throw new Error('Alpha Vantage API key not configured');
    }

    const apiSymbol = this.formatSymbolForAPI(symbol, 'alphavantage');
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${apiSymbol}&apikey=${this.apiKeys.alphaVantage}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data['Error Message'] || data['Note']) {
      throw new Error('Alpha Vantage API limit or error');
    }

    const quote = data['Global Quote'];
    if (!quote || !quote['05. price']) {
      throw new Error('No data from Alpha Vantage');
    }

    return {
      symbol: symbol,
      currentPrice: parseFloat(quote['05. price']),
      previousClose: parseFloat(quote['08. previous close']),
      dayChange: parseFloat(quote['09. change']),
      dayChangePercent: parseFloat(quote['10. change percent'].replace('%', '')),
      volume: parseInt(quote['06. volume']) || 0,
      high52Week: parseFloat(quote['03. high']),
      low52Week: parseFloat(quote['04. low']),
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Alpha Vantage'
    };
  }

  // Twelve Data API (Great for Indian stocks)
  private async fetchFromTwelveData(symbol: string): Promise<RealTimePrice | null> {
    if (!this.apiKeys.twelveData || this.apiKeys.twelveData === 'demo') {
      throw new Error('Twelve Data API key not configured');
    }

    const apiSymbol = this.formatSymbolForAPI(symbol, 'twelvedata');
    const url = `https://api.twelvedata.com/quote?symbol=${apiSymbol}&apikey=${this.apiKeys.twelveData}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'error' || !data.close) {
      throw new Error('No data from Twelve Data');
    }

    const currentPrice = parseFloat(data.close);
    const previousClose = parseFloat(data.previous_close);
    const dayChange = currentPrice - previousClose;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: (dayChange / previousClose) * 100,
      volume: parseInt(data.volume) || 0,
      high52Week: parseFloat(data.fifty_two_week?.high) || currentPrice * 1.3,
      low52Week: parseFloat(data.fifty_two_week?.low) || currentPrice * 0.7,
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Twelve Data'
    };
  }

  // Finnhub API (Good for real-time)
  private async fetchFromFinnhub(symbol: string): Promise<RealTimePrice | null> {
    if (!this.apiKeys.finnhub || this.apiKeys.finnhub === 'sandbox_c8k2aiad3r6o6f5lqd10') {
      throw new Error('Finnhub API key not configured');
    }

    const apiSymbol = this.formatSymbolForAPI(symbol, 'finnhub');
    const url = `https://finnhub.io/api/v1/quote?symbol=${apiSymbol}&token=${this.apiKeys.finnhub}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data.c || data.c === 0) {
      throw new Error('No data from Finnhub');
    }

    const currentPrice = data.c;
    const previousClose = data.pc;
    const dayChange = currentPrice - previousClose;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: (dayChange / previousClose) * 100,
      volume: 0, // Finnhub basic doesn't include volume
      high52Week: data.h || currentPrice * 1.3,
      low52Week: data.l || currentPrice * 0.7,
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Finnhub'
    };
  }

  // Yahoo Finance (Free but unofficial)
  private async fetchFromYahooFinance(symbol: string): Promise<RealTimePrice | null> {
    const apiSymbol = this.formatSymbolForAPI(symbol, 'yahoo');
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${apiSymbol}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const data = await response.json();
    
    if (!data.chart?.result?.[0]) {
      throw new Error('No data from Yahoo Finance');
    }

    const result = data.chart.result[0];
    const meta = result.meta;
    const currentPrice = meta.regularMarketPrice || meta.previousClose;
    const previousClose = meta.previousClose;
    const dayChange = currentPrice - previousClose;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: (dayChange / previousClose) * 100,
      volume: meta.regularMarketVolume || 0,
      marketCap: this.formatMarketCap(meta.marketCap),
      high52Week: meta.fiftyTwoWeekHigh,
      low52Week: meta.fiftyTwoWeekLow,
      exchange: meta.exchangeName || this.getExchangeFromSymbol(symbol),
      currency: meta.currency || this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Yahoo Finance'
    };
  }

  // Polygon API (Good for US stocks)
  private async fetchFromPolygon(symbol: string): Promise<RealTimePrice | null> {
    if (!this.apiKeys.polygon) {
      throw new Error('Polygon API key not configured');
    }

    // Polygon is mainly for US stocks
    if (this.isIndianStock(symbol)) {
      throw new Error('Polygon does not support Indian stocks');
    }

    const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apikey=${this.apiKeys.polygon}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results?.[0]) {
      throw new Error('No data from Polygon');
    }

    const result = data.results[0];
    const currentPrice = result.c; // Close price
    const previousClose = result.o; // Open price (approximation)
    const dayChange = currentPrice - previousClose;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: (dayChange / previousClose) * 100,
      volume: result.v || 0,
      high52Week: result.h || currentPrice * 1.3,
      low52Week: result.l || currentPrice * 0.7,
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Polygon'
    };
  }

  // Financial Modeling Prep (Free tier available)
  private async fetchFromFMP(symbol: string): Promise<RealTimePrice | null> {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=demo`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data?.[0]?.price) {
      throw new Error('No data from FMP');
    }

    const quote = data[0];
    const currentPrice = quote.price;
    const previousClose = quote.previousClose;
    const dayChange = quote.change;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: quote.changesPercentage,
      volume: quote.volume || 0,
      marketCap: this.formatMarketCap(quote.marketCap),
      high52Week: quote.yearHigh,
      low52Week: quote.yearLow,
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'Financial Modeling Prep'
    };
  }

  // IEX Cloud (Good backup)
  private async fetchFromIEX(symbol: string): Promise<RealTimePrice | null> {
    // IEX mainly supports US stocks
    if (this.isIndianStock(symbol)) {
      throw new Error('IEX does not support Indian stocks');
    }

    const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_test`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (!data.latestPrice) {
      throw new Error('No data from IEX');
    }

    const currentPrice = data.latestPrice;
    const previousClose = data.previousClose;
    const dayChange = data.change;

    return {
      symbol: symbol,
      currentPrice: currentPrice,
      previousClose: previousClose,
      dayChange: dayChange,
      dayChangePercent: data.changePercent * 100,
      volume: data.latestVolume || 0,
      marketCap: this.formatMarketCap(data.marketCap),
      high52Week: data.week52High,
      low52Week: data.week52Low,
      exchange: this.getExchangeFromSymbol(symbol),
      currency: this.getCurrencyFromSymbol(symbol),
      lastUpdated: new Date().toISOString(),
      dataSource: 'IEX Cloud'
    };
  }

  // Helper functions
  private formatSymbolForAPI(symbol: string, api: string): string {
    switch (api) {
      case 'alphavantage':
        if (this.isIndianStock(symbol) && !symbol.includes('.')) {
          return `${symbol}.BSE`; // Alpha Vantage uses .BSE for Indian stocks
        }
        return symbol;
      
      case 'twelvedata':
        // Twelve Data uses clean symbols for Indian stocks
        return symbol.replace('.NS', '').replace('.BO', '');
      
      case 'finnhub':
        if (this.isIndianStock(symbol)) {
          return symbol.replace('.NS', '.NSE').replace('.BO', '.BSE');
        }
        return symbol;
      
      case 'yahoo':
        if (this.isIndianStock(symbol) && !symbol.includes('.')) {
          return `${symbol}.NS`; // Yahoo uses .NS for NSE stocks
        }
        return symbol;
      
      default:
        return symbol;
    }
  }

  private isIndianStock(symbol: string): boolean {
    return symbol.includes('.NS') || symbol.includes('.BO') || 
           symbol.includes('ETF') || symbol.includes('BEES') ||
           /^[A-Z]+$/.test(symbol) && symbol.length <= 12; // Indian stocks are typically all caps, short
  }

  private getExchangeFromSymbol(symbol: string): string {
    if (symbol.includes('.NS')) return 'NSE';
    if (symbol.includes('.BO')) return 'BSE';
    if (symbol.includes('.L')) return 'LSE';
    if (symbol.includes('.T')) return 'TSE';
    if (symbol.includes('.TO')) return 'TSX';
    if (symbol.includes('.AX')) return 'ASX';
    
    // Default exchanges for major markets
    if (this.isIndianStock(symbol)) return 'NSE';
    return 'NASDAQ'; // Default for US stocks
  }

  private getCurrencyFromSymbol(symbol: string): string {
    if (this.isIndianStock(symbol)) return 'INR';
    if (symbol.includes('.L')) return 'GBP';
    if (symbol.includes('.T')) return 'JPY';
    if (symbol.includes('.TO')) return 'CAD';
    if (symbol.includes('.AX')) return 'AUD';
    return 'USD'; // Default
  }

  private formatMarketCap(marketCap: number | string | undefined): string {
    if (!marketCap) return 'N/A';
    
    const value = typeof marketCap === 'string' ? parseFloat(marketCap) : marketCap;
    
    if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
    return `$${value.toFixed(0)}`;
  }
}

// Export singleton instance
export const priceFetcher = new DynamicPriceFetcher();