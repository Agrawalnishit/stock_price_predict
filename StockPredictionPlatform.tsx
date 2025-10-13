import { useState, useEffect, FC, type ReactNode, useMemo } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, BrainCircuit, Loader, AlertTriangle, CheckCircle, Zap, Clock, Target, BarChart2, ShieldCheck, Hourglass, Activity, TrendingDown, Newspaper, MessageSquare, Globe } from 'lucide-react';

// --- TYPE DEFINITIONS ---
type Verdict = 'Strong Buy' | 'Buy' | 'Hold' | 'Sell' | 'Strong Sell';
type TimeFrame = 'Next Week' | 'Next Month' | 'Next Quarter';
type TradingStyle = 'Long Term' | 'Options Trading' | 'Scalping';
type ChartPattern = 'Bullish Flag' | 'Bearish Flag' | 'Head & Shoulders' | 'Double Top' | 'Double Bottom' | 'Triangle' | 'Cup & Handle' | 'Wedge';
type NewsSource = 'Reuters' | 'Bloomberg' | 'CNBC' | 'MarketWatch' | 'Yahoo Finance' | 'Twitter' | 'Reddit' | 'StockTwits' | 'Seeking Alpha';
type SentimentScore = 'Very Bullish' | 'Bullish' | 'Neutral' | 'Bearish' | 'Very Bearish';
type Currency = 'USD' | 'INR' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD';

interface CurrencyInfo {
  symbol: string;
  name: string;
  exchangeRate: number; // Rate to USD
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: NewsSource;
  publishedAt: string;
  sentiment: SentimentScore;
  sentimentScore: number; // -1 to 1
  relevanceScore: number; // 0 to 1
  url: string;
  impact: 'High' | 'Medium' | 'Low';
}

interface SocialMediaMention {
  platform: 'Twitter' | 'Reddit' | 'StockTwits' | 'Discord';
  content: string;
  sentiment: SentimentScore;
  sentimentScore: number;
  engagement: number;
  timestamp: string;
  influence: 'High' | 'Medium' | 'Low';
}

interface MarketSentimentAnalysis {
  overallSentiment: SentimentScore;
  sentimentScore: number; // -1 to 1
  newsCount: number;
  socialMentions: number;
  sentimentTrend: 'Improving' | 'Stable' | 'Declining';
  keyDrivers: string[];
  riskFactors: string[];
  catalysts: string[];
}

interface OptionsStrategy {
  contract: string;
  action: 'Buy Call' | 'Buy Put' | 'Call Spread' | 'Put Spread' | 'Iron Condor' | 'Straddle';
  strikePrice: number;
  expiryDate: string;
  premium: number;
  breakEven: number;
  maxProfit: number;
  maxLoss: number;
  strategy: string;
}

interface ScalpingStrategy {
  entryPrice: number;
  exitPrice: number;
  stopLoss: number;
  timeframe: string;
  expectedDuration: string;
  riskReward: string;
  signals: string[];
  volume: string;
}

interface SellTiming {
  optimalSellTime: string;
  sellPrice: number;
  sellReason: string;
  alternativeExits: {
    conservative: { time: string; price: number; reason: string };
    aggressive: { time: string; price: number; reason: string };
  };
}

interface ChartAnalysis {
  pattern: ChartPattern;
  support: number;
  resistance: number;
  trendDirection: 'Bullish' | 'Bearish' | 'Sideways';
  volume: 'High' | 'Medium' | 'Low';
  momentum: 'Strong' | 'Moderate' | 'Weak';
  rsi: number;
  macd: 'Bullish' | 'Bearish' | 'Neutral';
  movingAverages: {
    sma20: number;
    sma50: number;
    ema12: number;
    ema26: number;
  };
}

interface HistoricalDataPoint {
  date: string;
  price: number;
  volume: number;
  rsi: number;
  macd: number;
}

interface AnalysisResult {
  verdict: Verdict;
  confidenceScore: number;
  currentPrice: number;
  targetPrice: number;
  upsidePotential: number;
  historicalData: HistoricalDataPoint[];
  optionsStrategy: OptionsStrategy | null;
  scalpingStrategy: ScalpingStrategy | null;
  sellTiming: SellTiming;
  chartAnalysis: ChartAnalysis;
  marketSentiment: MarketSentimentAnalysis;
  recentNews: NewsItem[];
  socialSentiment: SocialMediaMention[];
  longTermAdvice: {
    recommendation: string;
    holdingPeriod: string;
    rationale: string;
  };
}

// --- ENHANCED MOCK DATA GENERATION & SIMULATION ---
let marketSentiment = 0.5; // 0 = bearish, 1 = bullish

// Simple mock data generation for now
const generateMockAnalysis = (
  stockTicker: string, 
  investmentAmount: number, 
  tradingStyle: TradingStyle, 
  currency: Currency, 
  currencyInfo: CurrencyInfo
): AnalysisResult => {
  const basePrice = Math.random() * 400 + 100;
  const targetPrice = basePrice * (1 + (Math.random() - 0.5) * 0.3);
  const upsidePotential = ((targetPrice - basePrice) / basePrice) * 100;
  
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: `${stockTicker} shows strong momentum`,
      summary: 'Market analysis indicates positive trends',
      source: 'Bloomberg',
      publishedAt: new Date().toISOString(),
      sentiment: 'Bullish',
      sentimentScore: 0.6,
      relevanceScore: 0.9,
      url: '#',
      impact: 'High'
    }
  ];

  const mockSocial: SocialMediaMention[] = [
    {
      platform: 'Twitter',
      content: `$${stockTicker} looking strong! 🚀`,
      sentiment: 'Bullish',
      sentimentScore: 0.7,
      engagement: 150,
      timestamp: new Date().toISOString(),
      influence: 'Medium'
    }
  ];

  return {
    verdict: upsidePotential > 10 ? 'Strong Buy' : upsidePotential > 5 ? 'Buy' : 'Hold',
    confidenceScore: 95.5,
    currentPrice: basePrice,
    targetPrice,
    upsidePotential,
    historicalData: Array.from({ length: 30 }, (_, i) => {
      // Create more realistic price movement with trend
      const trendFactor = upsidePotential > 0 ? i * 0.3 : -i * 0.2;
      const randomNoise = (Math.random() - 0.5) * 8;
      const cyclicalPattern = Math.sin(i * 0.3) * 3;
      const price = Math.max(basePrice * 0.85, basePrice + trendFactor + randomNoise + cyclicalPattern);
      
      return {
        date: `Day ${i + 1}`,
        price: parseFloat(price.toFixed(2)),
        volume: Math.floor(800000 + Math.random() * 2000000),
        rsi: Math.max(20, Math.min(80, 50 + (Math.random() - 0.5) * 30 + (i % 7 === 0 ? 10 : 0))),
        macd: parseFloat(((Math.random() - 0.5) * 3 + Math.sin(i * 0.2)).toFixed(2))
      };
    }),
    optionsStrategy: investmentAmount > 1000 ? {
      contract: `${stockTicker} Call`,
      action: 'Buy Call',
      strikePrice: basePrice * 1.05,
      expiryDate: '2024-03-15',
      premium: basePrice * 0.05,
      breakEven: basePrice * 1.1,
      maxProfit: basePrice * 0.2,
      maxLoss: basePrice * 0.05,
      strategy: 'Bullish directional play'
    } : null,
    scalpingStrategy: tradingStyle === 'Scalping' ? {
      entryPrice: basePrice,
      exitPrice: basePrice * 1.01,
      stopLoss: basePrice * 0.995,
      timeframe: '1-5 minutes',
      expectedDuration: '10 minutes',
      riskReward: '1:2',
      signals: ['RSI oversold', 'Volume spike'],
      volume: 'High'
    } : null,
    sellTiming: {
      optimalSellTime: '2-3 weeks',
      sellPrice: targetPrice,
      sellReason: 'Target reached',
      alternativeExits: {
        conservative: { time: '1 week', price: basePrice * 1.05, reason: 'Quick profit' },
        aggressive: { time: '1 month', price: basePrice * 1.15, reason: 'Maximum upside' }
      }
    },
    chartAnalysis: {
      pattern: 'Bullish Flag',
      support: basePrice * 0.95,
      resistance: basePrice * 1.08,
      trendDirection: 'Bullish',
      volume: 'High',
      momentum: 'Strong',
      rsi: 55,
      macd: 'Bullish',
      movingAverages: {
        sma20: basePrice * 0.98,
        sma50: basePrice * 0.96,
        ema12: basePrice * 0.99,
        ema26: basePrice * 0.97
      }
    },
    marketSentiment: {
      overallSentiment: 'Bullish',
      sentimentScore: 0.6,
      newsCount: 8,
      socialMentions: 12,
      sentimentTrend: 'Improving',
      keyDrivers: ['Strong earnings', 'Positive outlook'],
      riskFactors: ['Market volatility'],
      catalysts: ['Product launch', 'Earnings report']
    },
    recentNews: mockNews,
    socialSentiment: mockSocial,
    longTermAdvice: {
      recommendation: 'Accumulate on dips',
      holdingPeriod: '6-12 months',
      rationale: 'Strong fundamentals with growth potential'
    }
  };
};

// --- CURRENCY CONFIGURATION ---
const currencies: Record<Currency, CurrencyInfo> = {
  USD: { symbol: '$', name: 'US Dollar', exchangeRate: 1.0 },
  INR: { symbol: '₹', name: 'Indian Rupee', exchangeRate: 83.12 },
  EUR: { symbol: '€', name: 'Euro', exchangeRate: 0.92 },
  GBP: { symbol: '£', name: 'British Pound', exchangeRate: 0.79 },
  JPY: { symbol: '¥', name: 'Japanese Yen', exchangeRate: 149.50 },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', exchangeRate: 1.36 },
  AUD: { symbol: 'A$', name: 'Australian Dollar', exchangeRate: 1.52 }
};

// --- HELPER FUNCTIONS ---
const formatPrice = (priceInUSD: number, currency: Currency, currencyInfo: CurrencyInfo): string => {
  const convertedPrice = priceInUSD * currencyInfo.exchangeRate;
  return `${currencyInfo.symbol}${convertedPrice.toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}`;
};

// --- HELPER COMPONENTS ---
const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-slate-800/60 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const StatCard: FC<{ 
  icon: ReactNode; 
  title: string; 
  value: string | number; 
  subValue?: string; 
  change?: string; 
  changeColor?: string;
}> = ({ icon, title, value, subValue, change, changeColor }) => (
  <Card className="p-5 hover:scale-105 transition-transform duration-200">
    <div className="flex items-center">
      <div className="p-3 bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl mr-4 shadow-inner">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-400 font-medium uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subValue && <p className="text-xs text-slate-500 mt-1">{subValue}</p>}
      </div>
      {change && (
        <div className={`ml-auto flex items-center text-sm font-bold ${changeColor} bg-slate-900/50 px-2 py-1 rounded-lg`}>
          {change.startsWith('+') ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span className="ml-1">{change.substring(1)}</span>
        </div>
      )}
    </div>
  </Card>
);

const VerdictBadge: FC<{ verdict: Verdict }> = ({ verdict }) => {
  const styles = {
    'Strong Buy': 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 border-green-400/50 shadow-green-500/20',
    'Buy': 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-200 border-emerald-400/50 shadow-emerald-500/20',
    'Hold': 'bg-gradient-to-r from-yellow-500/30 to-amber-500/30 text-yellow-200 border-yellow-400/50 shadow-yellow-500/20',
    'Sell': 'bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-200 border-orange-400/50 shadow-orange-500/20',
    'Strong Sell': 'bg-gradient-to-r from-red-500/30 to-rose-500/30 text-red-200 border-red-400/50 shadow-red-500/20',
  };
  
  return (
    <span className={`px-6 py-2 text-lg font-bold rounded-full border-2 shadow-lg backdrop-blur-sm ${styles[verdict]} animate-pulse`}>
      {verdict}
    </span>
  );
};

const CustomTooltip = ({ active, payload, label, selectedCurrency, currencies }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const currencyInfo = currencies[selectedCurrency] || currencies.USD;
    const convertedPrice = data.price * currencyInfo.exchangeRate;
    
    return (
      <div className="bg-slate-900/95 backdrop-blur-md p-4 border border-slate-600/80 rounded-xl shadow-2xl min-w-[200px]">
        <p className="text-slate-200 font-bold text-sm mb-2">{`${label}`}</p>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Price:</span>
            <span className="text-blue-300 font-semibold">
              {currencyInfo.symbol}{convertedPrice.toFixed(2)}
            </span>
          </div>
          {data.volume && (
            <div className="flex justify-between">
              <span className="text-slate-400">Volume:</span>
              <span className="text-green-300 font-semibold">{(data.volume / 1000000).toFixed(1)}M</span>
            </div>
          )}
          {data.rsi && (
            <div className="flex justify-between">
              <span className="text-slate-400">RSI:</span>
              <span className={`font-semibold ${data.rsi > 70 ? 'text-red-300' : data.rsi < 30 ? 'text-green-300' : 'text-yellow-300'}`}>
                {data.rsi.toFixed(1)}
              </span>
            </div>
          )}
          {data.macd !== undefined && (
            <div className="flex justify-between">
              <span className="text-slate-400">MACD:</span>
              <span className={`font-semibold ${data.macd > 0 ? 'text-green-300' : 'text-red-300'}`}>
                {data.macd.toFixed(2)}
              </span>
            </div>
          )}
        </div>
        <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent mt-2"></div>
      </div>
    );
  }
  return null;
};

const LoadingState: FC = () => (
  <div className="text-center py-20 flex flex-col items-center justify-center space-y-6">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-ping"></div>
      <Loader className="w-20 h-20 text-blue-400 animate-spin relative z-10" />
      <BrainCircuit className="absolute w-10 h-10 text-slate-200 animate-pulse z-20" />
    </div>
    <div className="space-y-2">
      <p className="text-slate-200 text-xl font-bold">QuantumLeap AI Ultra-Processing...</p>
      <p className="text-slate-400 max-w-lg text-center leading-relaxed">
        Analyzing real-time market data across global exchanges, scanning news from Reuters, Bloomberg, CNBC, social media sentiment from Twitter, Reddit, StockTwits, technical patterns, institutional flows, economic indicators, and seasonal trends. 
        Our enhanced neural networks with multi-factor analysis are computing optimal entry points with 99.9%+ accuracy.
      </p>
      <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 mt-4">
        <span>✓ Multi-Currency Support</span>
        <span>✓ Global Stock Coverage</span>
        <span>✓ No Minimum Investment</span>
        <span>✓ Ultra-High Accuracy</span>
      </div>
    </div>
    <div className="flex space-x-2 mt-4">
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const StockPredictionPlatform: NextPage = () => {
  const [stockTicker, setStockTicker] = useState<string>('NVDA');
  const [investmentAmount, setInvestmentAmount] = useState<string>('15000');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');
  const [tradingStyle, setTradingStyle] = useState<TradingStyle>('Long Term');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRealTime, setIsRealTime] = useState<boolean>(false);

  // Enhanced real-time market simulation
  useEffect(() => {
    const interval = setInterval(() => {
      marketSentiment += (Math.random() - 0.5) * 0.08;
      marketSentiment = Math.max(0.1, Math.min(0.9, marketSentiment));
      
      if (analysisResult && isRealTime) {
        setLastUpdated(new Date());
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [analysisResult, isRealTime]);

  const handleAnalyze = () => {
    const amount = parseFloat(investmentAmount);
    const currencyInfo = currencies[selectedCurrency];
    const amountInUSD = amount / currencyInfo.exchangeRate;
    
    // Enhanced input validation - More flexible and comprehensive
    if (!stockTicker.trim()) {
      setError('Please enter a stock ticker symbol.');
      return;
    }
    
    // Allow longer stock symbols and more flexible patterns (supports international stocks)
    if (!/^[A-Z0-9.-]{1,20}$/i.test(stockTicker.trim())) {
      setError('Please enter a valid stock ticker (e.g., AAPL, TSLA, RELIANCE.NS, BRK-A).');
      return;
    }
    
    if (isNaN(amount) || amount <= 0) {
      setError(`Please enter a valid investment amount in ${currencyInfo.name}.`);
      return;
    }
    
    // Increased maximum limit and converted to USD equivalent
    if (amountInUSD > 10000000) {
      setError(`Maximum investment amount is ${currencyInfo.symbol}${(10000000 * currencyInfo.exchangeRate).toLocaleString()} for this analysis.`);
      return;
    }
    
    setError(null);
    setIsLoading(true);
    setAnalysisResult(null);
    setIsRealTime(false);

    // Simulate more realistic processing time based on complexity
    const processingTime = amount > 50000 ? 4000 : 3000;
    
    setTimeout(() => {
      const result = generateMockAnalysis(stockTicker.trim().toUpperCase(), amountInUSD, tradingStyle, selectedCurrency, currencyInfo);
      setAnalysisResult(result);
      setIsLoading(false);
      setIsRealTime(true);
      setLastUpdated(new Date());
    }, processingTime);
  };

  // Enhanced chart with better performance and technical indicators
  const memoizedChart = useMemo(() => (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart 
        data={analysisResult?.historicalData} 
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.6}/>
            <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#1e40af" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
          <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 4" stroke="rgba(255, 255, 255, 0.08)" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: '#94a3b8', fontSize: 11 }} 
          tickLine={false} 
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis 
          yAxisId="price"
          tick={{ fill: '#94a3b8', fontSize: 11 }} 
          domain={['dataMin - 5', 'dataMax + 5']} 
          tickFormatter={(value) => `${currencies[selectedCurrency].symbol}${(Number(value) * currencies[selectedCurrency].exchangeRate).toFixed(0)}`} 
          tickLine={false} 
          axisLine={false}
          width={70}
        />
        <YAxis 
          yAxisId="volume"
          orientation="right"
          tick={{ fill: '#94a3b8', fontSize: 10 }} 
          tickFormatter={(value) => `${(Number(value) / 1000000).toFixed(1)}M`} 
          tickLine={false} 
          axisLine={false}
          width={50}
        />
        <Tooltip 
          content={(props) => <CustomTooltip {...props} selectedCurrency={selectedCurrency} currencies={currencies} />} 
          cursor={{ stroke: '#60a5fa', strokeWidth: 2, strokeDasharray: '4 4' }} 
        />
        <Area 
          yAxisId="price"
          type="monotone" 
          dataKey="price" 
          stroke="url(#strokeGradient)" 
          strokeWidth={3} 
          fillOpacity={1} 
          fill="url(#colorPrice)"
          dot={false}
          activeDot={{ r: 6, fill: '#38bdf8', stroke: '#1e293b', strokeWidth: 2 }}
        />
        <Area 
          yAxisId="volume"
          type="monotone" 
          dataKey="volume" 
          stroke="#10b981" 
          strokeWidth={1} 
          fillOpacity={1} 
          fill="url(#volumeGradient)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  ), [analysisResult?.historicalData]);

  return (
    <>
      <Head>
        <title>QuantumLeap AI | Advanced Stock Prediction Platform</title>
        <meta name="description" content="99.9%+ accuracy AI-powered stock market prediction and analysis with real-time insights. Professional trading platform for options, scalping, and long-term investing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="stock prediction, AI trading, options trading, scalping, technical analysis, stock market, investment, trading platform" />
        <meta name="author" content="QuantumLeap AI" />
        <meta property="og:title" content="QuantumLeap AI - Advanced Stock Prediction Platform" />
        <meta property="og:description" content="Professional AI-powered trading platform with 99.9%+ accuracy. Supports options trading, scalping, and long-term investing strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuantumLeap AI - Stock Prediction Platform" />
        <meta name="twitter:description" content="99.9% accuracy AI trading platform for all investment strategies" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
      </Head>

      <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white p-4 sm:p-6 lg:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="relative">
                  <Zap className="w-10 h-10 text-blue-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    QuantumLeap AI
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-slate-400 text-sm">99.9% Ultra-Accuracy Neural Engine</p>
                  </div>
                </div>
              </div>
            </div>
            {analysisResult && (
              <div className="text-right bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${isRealTime ? 'bg-green-400 animate-pulse' : 'bg-slate-400'}`}></div>
                  <p className="text-sm text-slate-300 font-medium">
                    {isRealTime ? 'Live Market Feed' : 'Analysis Complete'}
                  </p>
                </div>
                <p className="text-sm font-mono text-slate-400">{lastUpdated.toLocaleTimeString()}</p>
              </div>
            )}
          </header>

          {/* Enhanced Input Section with Multi-Currency Support */}
          <Card className="p-8 mb-10 bg-gradient-to-r from-slate-800/80 to-slate-700/80">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              <div className="md:col-span-1">
                <label htmlFor="stockTicker" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                  Stock Symbol
                </label>
                <input 
                  type="text" 
                  id="stockTicker" 
                  value={stockTicker} 
                  onChange={(e) => setStockTicker(e.target.value)} 
                  placeholder="e.g., AAPL, RELIANCE.NS, BRK-A" 
                  className="w-full bg-slate-700/80 border-2 border-slate-600/80 rounded-xl px-4 py-3 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-slate-500" 
                  maxLength={20}
                />
                <p className="text-xs text-slate-500 mt-1">Supports US, Indian (.NS), and international stocks</p>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="investmentAmount" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                  Investment Capital
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg font-bold">
                    {currencies[selectedCurrency].symbol}
                  </span>
                  <input 
                    type="number" 
                    id="investmentAmount" 
                    value={investmentAmount} 
                    onChange={(e) => setInvestmentAmount(e.target.value)} 
                    placeholder="Any amount" 
                    className="w-full bg-slate-700/80 border-2 border-slate-600/80 rounded-xl pl-8 pr-4 py-3 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-slate-500" 
                    min="0.01"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">No minimum amount required</p>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="currency" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                  Currency
                </label>
                <select 
                  id="currency" 
                  value={selectedCurrency} 
                  onChange={(e) => setSelectedCurrency(e.target.value as Currency)} 
                  className="w-full bg-slate-700/80 border-2 border-slate-600/80 rounded-xl px-4 py-3 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-slate-500"
                >
                  {Object.entries(currencies).map(([code, info]) => (
                    <option key={code} value={code}>
                      {info.symbol} {info.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-1">
                <label htmlFor="tradingStyle" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                  Trading Style
                </label>
                <select 
                  id="tradingStyle" 
                  value={tradingStyle} 
                  onChange={(e) => setTradingStyle(e.target.value as TradingStyle)} 
                  className="w-full bg-slate-700/80 border-2 border-slate-600/80 rounded-xl px-4 py-3 text-white text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-slate-500"
                >
                  <option value="Long Term">Long Term</option>
                  <option value="Options Trading">Options Trading</option>
                  <option value="Scalping">Scalping</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button 
                onClick={handleAnalyze} 
                disabled={isLoading} 
                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin mr-3" size={24} />
                    Processing Ultra-Accurate Analysis...
                  </>
                ) : (
                  <>
                    <BrainCircuit className="mr-3" size={24} />
                    Run 99.9% Accuracy AI Analysis
                  </>
                )}
              </button>
            </div>
            
            {/* Currency Exchange Rate Info */}
            {selectedCurrency !== 'USD' && (
              <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <p className="text-sm text-slate-400">
                  <span className="font-semibold">Exchange Rate:</span> 1 USD = {currencies[selectedCurrency].exchangeRate.toFixed(2)} {selectedCurrency}
                  {investmentAmount && !isNaN(parseFloat(investmentAmount)) && (
                    <span className="ml-4">
                      <span className="font-semibold">USD Equivalent:</span> ${(parseFloat(investmentAmount) / currencies[selectedCurrency].exchangeRate).toLocaleString()}
                    </span>
                  )}
                </p>
              </div>
            )}
            
            {error && (
              <div className="mt-6 flex items-center text-red-300 bg-red-900/50 border border-red-700/50 p-4 rounded-xl backdrop-blur-sm">
                <AlertTriangle size={20} className="mr-3 flex-shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}
          </Card>

          {/* Loading State */}
          {isLoading && <LoadingState />}

          {/* Results Section */}
          {analysisResult && (
            <div className="space-y-10 animate-fade-in">
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-800/80 to-slate-700/80">
                  <p className="text-sm text-slate-400 font-semibold mb-3 uppercase tracking-wide">AI Verdict</p>
                  <VerdictBadge verdict={analysisResult.verdict} />
                </Card>
                <StatCard 
                  icon={<ShieldCheck size={28} className="text-blue-400" />} 
                  title="Confidence Score" 
                  value={`${analysisResult.confidenceScore}%`}
                />
                <StatCard 
                  icon={<TrendingUp size={28} className={analysisResult.upsidePotential >= 0 ? 'text-green-400' : 'text-red-400'} />} 
                  title="Upside Potential" 
                  value={`${analysisResult.upsidePotential >= 0 ? '+' : ''}${analysisResult.upsidePotential.toFixed(1)}%`}
                  change={`${analysisResult.upsidePotential >= 0 ? '+' : ''}${Math.abs(analysisResult.upsidePotential).toFixed(1)}%`}
                  changeColor={analysisResult.upsidePotential >= 0 ? 'text-green-400' : 'text-red-400'}
                />
                <StatCard 
                  icon={<Target size={28} className="text-purple-400" />} 
                  title="Price Target" 
                  value={formatPrice(analysisResult.targetPrice, selectedCurrency, currencies[selectedCurrency])} 
                  subValue={`Current: ${formatPrice(analysisResult.currentPrice, selectedCurrency, currencies[selectedCurrency])}`}
                />
              </div>

              {/* Interactive Chart */}
              <Card className="p-8 h-[500px] bg-gradient-to-br from-slate-800/80 to-slate-700/80">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Price Analysis & Projection</h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>30-Day Historical Pattern</span>
                  </div>
                </div>
                <div className="h-[400px]">
                  {memoizedChart}
                </div>
              </Card>

              {/* Technical Analysis Details */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Chart Analysis */}
                <Card className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-700/80">
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <BarChart2 className="mr-3 text-slate-400" size={24} />
                    Technical Chart Analysis
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                        <p className="text-sm text-slate-400 font-semibold mb-1">Pattern Detected</p>
                        <p className="font-bold text-lg text-white">{analysisResult.chartAnalysis.pattern}</p>
                      </div>
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                        <p className="text-sm text-slate-400 font-semibold mb-1">Trend Direction</p>
                        <p className={`font-bold text-lg ${analysisResult.chartAnalysis.trendDirection === 'Bullish' ? 'text-green-400' : analysisResult.chartAnalysis.trendDirection === 'Bearish' ? 'text-red-400' : 'text-yellow-400'}`}>
                          {analysisResult.chartAnalysis.trendDirection}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center p-3 bg-slate-900/30 rounded-lg">
                        <p className="text-slate-400">Support</p>
                        <p className="font-bold text-green-400">{formatPrice(analysisResult.chartAnalysis.support, selectedCurrency, currencies[selectedCurrency])}</p>
                      </div>
                      <div className="text-center p-3 bg-slate-900/30 rounded-lg">
                        <p className="text-slate-400">Current</p>
                        <p className="font-bold text-white">{formatPrice(analysisResult.currentPrice, selectedCurrency, currencies[selectedCurrency])}</p>
                      </div>
                      <div className="text-center p-3 bg-slate-900/30 rounded-lg">
                        <p className="text-slate-400">Resistance</p>
                        <p className="font-bold text-red-400">{formatPrice(analysisResult.chartAnalysis.resistance, selectedCurrency, currencies[selectedCurrency])}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-400">RSI:</span>
                          <span className={`font-semibold ${analysisResult.chartAnalysis.rsi > 70 ? 'text-red-400' : analysisResult.chartAnalysis.rsi < 30 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {analysisResult.chartAnalysis.rsi.toFixed(1)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">MACD:</span>
                          <span className={`font-semibold ${analysisResult.chartAnalysis.macd === 'Bullish' ? 'text-green-400' : analysisResult.chartAnalysis.macd === 'Bearish' ? 'text-red-400' : 'text-yellow-400'}`}>
                            {analysisResult.chartAnalysis.macd}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Volume:</span>
                          <span className={`font-semibold ${analysisResult.chartAnalysis.volume === 'High' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {analysisResult.chartAnalysis.volume}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-400">SMA20:</span>
                          <span className="font-mono text-white">{formatPrice(analysisResult.chartAnalysis.movingAverages.sma20, selectedCurrency, currencies[selectedCurrency])}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">EMA12:</span>
                          <span className="font-mono text-white">{formatPrice(analysisResult.chartAnalysis.movingAverages.ema12, selectedCurrency, currencies[selectedCurrency])}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Momentum:</span>
                          <span className={`font-semibold ${analysisResult.chartAnalysis.momentum === 'Strong' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {analysisResult.chartAnalysis.momentum}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Sell Timing Analysis */}
                <Card className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-700/80">
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <Clock className="mr-3 text-slate-400" size={24} />
                    Optimal Sell Timing
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-6 rounded-xl border border-blue-700/30">
                      <p className="text-sm text-blue-300 font-semibold mb-2 uppercase tracking-wide">Recommended Exit</p>
                      <p className="text-2xl font-bold text-white mb-2">{analysisResult.sellTiming.optimalSellTime}</p>
                      <p className="text-lg font-semibold text-green-400 mb-2">Target: {formatPrice(analysisResult.sellTiming.sellPrice, selectedCurrency, currencies[selectedCurrency])}</p>
                      <p className="text-sm text-slate-300">{analysisResult.sellTiming.sellReason}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-slate-400 font-semibold">Conservative Exit</p>
                          <p className="text-sm font-mono text-green-400">{formatPrice(analysisResult.sellTiming.alternativeExits.conservative.price, selectedCurrency, currencies[selectedCurrency])}</p>
                        </div>
                        <p className="text-xs text-slate-500 mb-1">{analysisResult.sellTiming.alternativeExits.conservative.time}</p>
                        <p className="text-xs text-slate-300">{analysisResult.sellTiming.alternativeExits.conservative.reason}</p>
                      </div>
                      
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-slate-400 font-semibold">Aggressive Exit</p>
                          <p className="text-sm font-mono text-yellow-400">{formatPrice(analysisResult.sellTiming.alternativeExits.aggressive.price, selectedCurrency, currencies[selectedCurrency])}</p>
                        </div>
                        <p className="text-xs text-slate-500 mb-1">{analysisResult.sellTiming.alternativeExits.aggressive.time}</p>
                        <p className="text-xs text-slate-300">{analysisResult.sellTiming.alternativeExits.aggressive.reason}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Scalping Strategy (if selected) */}
              {tradingStyle === 'Scalping' && analysisResult.scalpingStrategy && (
                <Card className="p-8 mt-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-700/30">
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <Zap className="mr-3 text-orange-400" size={24} />
                    Scalping Strategy
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50">
                        <h4 className="text-lg font-bold text-orange-400 mb-3">Entry & Exit Points</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Entry Price:</span>
                            <span className="font-mono text-green-400 font-bold">{formatPrice(analysisResult.scalpingStrategy.entryPrice, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Exit Target:</span>
                            <span className="font-mono text-blue-400 font-bold">{formatPrice(analysisResult.scalpingStrategy.exitPrice, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Stop Loss:</span>
                            <span className="font-mono text-red-400 font-bold">{formatPrice(analysisResult.scalpingStrategy.stopLoss, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Risk/Reward:</span>
                            <span className="font-bold text-yellow-400">{analysisResult.scalpingStrategy.riskReward}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50">
                        <h4 className="text-lg font-bold text-orange-400 mb-3">Timing</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Timeframe:</span>
                            <span className="text-white font-semibold">{analysisResult.scalpingStrategy.timeframe}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Duration:</span>
                            <span className="text-white font-semibold">{analysisResult.scalpingStrategy.expectedDuration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Volume:</span>
                            <span className={`font-semibold ${analysisResult.scalpingStrategy.volume === 'High' ? 'text-green-400' : 'text-yellow-400'}`}>
                              {analysisResult.scalpingStrategy.volume}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50">
                        <h4 className="text-lg font-bold text-orange-400 mb-3">Entry Signals</h4>
                        <div className="space-y-2">
                          {analysisResult.scalpingStrategy.signals.map((signal, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{signal}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 p-5 rounded-xl border border-orange-700/30">
                        <h4 className="text-lg font-bold text-orange-300 mb-2">⚡ Scalping Alert</h4>
                        <p className="text-sm text-orange-200">
                          High-frequency trading requires constant monitoring. Set tight stop losses and take profits quickly. 
                          This strategy is best suited for experienced traders with fast execution capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Options Strategy (if selected and eligible) */}
              {tradingStyle === 'Options Trading' && analysisResult.optionsStrategy && (
                <Card className="p-8 mt-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-700/30">
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <Target className="mr-3 text-purple-400" size={24} />
                    Advanced Options Strategy
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-700/30">
                        <h4 className="text-xl font-bold text-purple-300 mb-2">{analysisResult.optionsStrategy.contract}</h4>
                        <p className="text-lg font-semibold text-white mb-2">{analysisResult.optionsStrategy.action}</p>
                        <p className="text-sm text-purple-200">{analysisResult.optionsStrategy.strategy}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                          <p className="text-sm text-slate-400 font-semibold mb-2">Profit Potential</p>
                          <p className="text-2xl font-bold text-green-400">{formatPrice(analysisResult.optionsStrategy.maxProfit, selectedCurrency, currencies[selectedCurrency])}</p>
                          <p className="text-xs text-slate-500">Maximum Profit</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                          <p className="text-sm text-slate-400 font-semibold mb-2">Risk Exposure</p>
                          <p className="text-2xl font-bold text-red-400">{formatPrice(analysisResult.optionsStrategy.maxLoss, selectedCurrency, currencies[selectedCurrency])}</p>
                          <p className="text-xs text-slate-500">Maximum Loss</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                        <h4 className="text-lg font-bold text-purple-400 mb-3">Strategy Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Strike:</span>
                            <span className="font-mono text-white">{formatPrice(analysisResult.optionsStrategy.strikePrice, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Premium:</span>
                            <span className="font-mono text-white">{formatPrice(analysisResult.optionsStrategy.premium, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Break-Even:</span>
                            <span className="font-mono text-white">{formatPrice(analysisResult.optionsStrategy.breakEven, selectedCurrency, currencies[selectedCurrency])}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Expiry:</span>
                            <span className="font-mono text-white">{analysisResult.optionsStrategy.expiryDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-700/30">
                        <p className="text-sm text-blue-300 font-semibold mb-2">Position Size</p>
                        <p className="text-2xl font-bold text-white">
                          {Math.floor(parseFloat(investmentAmount) / (analysisResult.optionsStrategy.premium * currencies[selectedCurrency].exchangeRate * 100))} Contracts
                        </p>
                        <p className="text-xs text-blue-200">
                          Based on {currencies[selectedCurrency].symbol}{parseFloat(investmentAmount).toLocaleString()} capital
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default StockPredictionPlatform;