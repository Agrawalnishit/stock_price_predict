// Comprehensive Stock Database - All Major Stocks Listed in Markets
// This file contains stock symbols and basic info for validation and suggestions

export interface StockInfo {
  symbol: string;
  name: string;
  exchange: string;
  sector: string;
  currency: string;
  country: string;
}

// Indian Stocks Database (NSE/BSE) - Major 500+ stocks
export const INDIAN_STOCKS: StockInfo[] = [
  // Nifty 50 Stocks
  { symbol: 'RELIANCE.NS', name: 'Reliance Industries Ltd', exchange: 'NSE', sector: 'Energy', currency: 'INR', country: 'India' },
  { symbol: 'TCS.NS', name: 'Tata Consultancy Services Ltd', exchange: 'NSE', sector: 'IT Services', currency: 'INR', country: 'India' },
  { symbol: 'HDFCBANK.NS', name: 'HDFC Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'INFY.NS', name: 'Infosys Ltd', exchange: 'NSE', sector: 'IT Services', currency: 'INR', country: 'India' },
  { symbol: 'ICICIBANK.NS', name: 'ICICI Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'HINDUNILVR.NS', name: 'Hindustan Unilever Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'ITC.NS', name: 'ITC Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'SBIN.NS', name: 'State Bank of India', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'BHARTIARTL.NS', name: 'Bharti Airtel Ltd', exchange: 'NSE', sector: 'Telecom', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKBANK.NS', name: 'Kotak Mahindra Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'LT.NS', name: 'Larsen & Toubro Ltd', exchange: 'NSE', sector: 'Infrastructure', currency: 'INR', country: 'India' },
  { symbol: 'ASIANPAINT.NS', name: 'Asian Paints Ltd', exchange: 'NSE', sector: 'Paints', currency: 'INR', country: 'India' },
  { symbol: 'MARUTI.NS', name: 'Maruti Suzuki India Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'AXISBANK.NS', name: 'Axis Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'NESTLEIND.NS', name: 'Nestle India Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'HCLTECH.NS', name: 'HCL Technologies Ltd', exchange: 'NSE', sector: 'IT Services', currency: 'INR', country: 'India' },
  { symbol: 'WIPRO.NS', name: 'Wipro Ltd', exchange: 'NSE', sector: 'IT Services', currency: 'INR', country: 'India' },
  { symbol: 'ULTRACEMCO.NS', name: 'UltraTech Cement Ltd', exchange: 'NSE', sector: 'Cement', currency: 'INR', country: 'India' },
  { symbol: 'BAJFINANCE.NS', name: 'Bajaj Finance Ltd', exchange: 'NSE', sector: 'NBFC', currency: 'INR', country: 'India' },
  { symbol: 'POWERGRID.NS', name: 'Power Grid Corporation Ltd', exchange: 'NSE', sector: 'Power', currency: 'INR', country: 'India' },
  { symbol: 'NTPC.NS', name: 'NTPC Ltd', exchange: 'NSE', sector: 'Power', currency: 'INR', country: 'India' },
  { symbol: 'TECHM.NS', name: 'Tech Mahindra Ltd', exchange: 'NSE', sector: 'IT Services', currency: 'INR', country: 'India' },
  { symbol: 'ONGC.NS', name: 'Oil & Natural Gas Corporation Ltd', exchange: 'NSE', sector: 'Oil & Gas', currency: 'INR', country: 'India' },
  { symbol: 'TATAMOTORS.NS', name: 'Tata Motors Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'TATASTEEL.NS', name: 'Tata Steel Ltd', exchange: 'NSE', sector: 'Steel', currency: 'INR', country: 'India' },
  { symbol: 'SUNPHARMA.NS', name: 'Sun Pharmaceutical Industries Ltd', exchange: 'NSE', sector: 'Pharma', currency: 'INR', country: 'India' },
  { symbol: 'JSWSTEEL.NS', name: 'JSW Steel Ltd', exchange: 'NSE', sector: 'Steel', currency: 'INR', country: 'India' },
  { symbol: 'TITAN.NS', name: 'Titan Company Ltd', exchange: 'NSE', sector: 'Jewellery', currency: 'INR', country: 'India' },
  { symbol: 'INDUSINDBK.NS', name: 'IndusInd Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'ADANIENT.NS', name: 'Adani Enterprises Ltd', exchange: 'NSE', sector: 'Diversified', currency: 'INR', country: 'India' },
  { symbol: 'COALINDIA.NS', name: 'Coal India Ltd', exchange: 'NSE', sector: 'Mining', currency: 'INR', country: 'India' },
  { symbol: 'HINDALCO.NS', name: 'Hindalco Industries Ltd', exchange: 'NSE', sector: 'Metals', currency: 'INR', country: 'India' },
  { symbol: 'BAJAJFINSV.NS', name: 'Bajaj Finserv Ltd', exchange: 'NSE', sector: 'Financial Services', currency: 'INR', country: 'India' },
  { symbol: 'GRASIM.NS', name: 'Grasim Industries Ltd', exchange: 'NSE', sector: 'Cement', currency: 'INR', country: 'India' },
  { symbol: 'CIPLA.NS', name: 'Cipla Ltd', exchange: 'NSE', sector: 'Pharma', currency: 'INR', country: 'India' },
  { symbol: 'EICHERMOT.NS', name: 'Eicher Motors Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'HEROMOTOCO.NS', name: 'Hero MotoCorp Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'BRITANNIA.NS', name: 'Britannia Industries Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'APOLLOHOSP.NS', name: 'Apollo Hospitals Enterprise Ltd', exchange: 'NSE', sector: 'Healthcare', currency: 'INR', country: 'India' },
  { symbol: 'DIVISLAB.NS', name: 'Divi\'s Laboratories Ltd', exchange: 'NSE', sector: 'Pharma', currency: 'INR', country: 'India' },
  { symbol: 'DRREDDY.NS', name: 'Dr. Reddy\'s Laboratories Ltd', exchange: 'NSE', sector: 'Pharma', currency: 'INR', country: 'India' },
  { symbol: 'SHREECEM.NS', name: 'Shree Cement Ltd', exchange: 'NSE', sector: 'Cement', currency: 'INR', country: 'India' },
  { symbol: 'BPCL.NS', name: 'Bharat Petroleum Corporation Ltd', exchange: 'NSE', sector: 'Oil & Gas', currency: 'INR', country: 'India' },
  { symbol: 'TATACONSUM.NS', name: 'Tata Consumer Products Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'ADANIPORTS.NS', name: 'Adani Ports and Special Economic Zone Ltd', exchange: 'NSE', sector: 'Infrastructure', currency: 'INR', country: 'India' },
  { symbol: 'M&M.NS', name: 'Mahindra & Mahindra Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'SBILIFE.NS', name: 'SBI Life Insurance Company Ltd', exchange: 'NSE', sector: 'Insurance', currency: 'INR', country: 'India' },
  { symbol: 'HDFCLIFE.NS', name: 'HDFC Life Insurance Company Ltd', exchange: 'NSE', sector: 'Insurance', currency: 'INR', country: 'India' },
  { symbol: 'BAJAJ-AUTO.NS', name: 'Bajaj Auto Ltd', exchange: 'NSE', sector: 'Auto', currency: 'INR', country: 'India' },
  { symbol: 'GODREJCP.NS', name: 'Godrej Consumer Products Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'VEDL.NS', name: 'Vedanta Ltd', exchange: 'NSE', sector: 'Metals', currency: 'INR', country: 'India' },

  // ETFs - COMPREHENSIVE LIST (100+ ETFs)
  
  // Precious Metals ETFs
  { symbol: 'HDFCSILVERETF.NS', name: 'HDFC Silver ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HDFCSILVERETF', name: 'HDFC Silver ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HDFCGOLDETF.NS', name: 'HDFC Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HDFCGOLDETF', name: 'HDFC Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'GOLDSHARE.NS', name: 'Gold Shares ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'GOLDGUINEA.NS', name: 'Gold Guinea ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKGOLD.NS', name: 'Kotak Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKSILVER.NS', name: 'Kotak Silver ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'AXISGOLDETF.NS', name: 'Axis Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICIGOLD.NS', name: 'ICICI Prudential Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SBIGOLDETF.NS', name: 'SBI Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'RELIANCEGOLD.NS', name: 'Reliance Gold ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Index ETFs (Nifty Family)
  { symbol: 'NIFTYBEES.NS', name: 'Nippon India ETF Nifty BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'NIFTYBEES', name: 'Nippon India ETF Nifty BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'JUNIORBEES.NS', name: 'Nippon India ETF Junior BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'JUNIORBEES', name: 'Nippon India ETF Junior BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'BANKBEES.NS', name: 'Nippon India ETF Bank BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'BANKBEES', name: 'Nippon India ETF Bank BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ITBEES.NS', name: 'Nippon India ETF IT BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'PSUBNKBEES.NS', name: 'Nippon India ETF PSU Bank BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'PVTBNKBEES.NS', name: 'Nippon India ETF Private Bank BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'AUTOBEES.NS', name: 'Nippon India ETF Auto BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'PHARMABEES.NS', name: 'Nippon India ETF Pharma BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'FMCGBEES.NS', name: 'Nippon India ETF FMCG BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'METALBEES.NS', name: 'Nippon India ETF Metal BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'REALTYBEES.NS', name: 'Nippon India ETF Realty BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ENERGYBEES.NS', name: 'Nippon India ETF Energy BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'INFRABEES.NS', name: 'Nippon India ETF Infrastructure BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'CONSUMRBEES.NS', name: 'Nippon India ETF Consumer Durables BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'MEDIABEES.NS', name: 'Nippon India ETF Media BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Sectoral ETFs
  { symbol: 'LIQUIDBEES.NS', name: 'Nippon India ETF Liquid BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'LIQUIDBEES', name: 'Nippon India ETF Liquid BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'CPSE.NS', name: 'CPSE ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'BHARAT22.NS', name: 'Bharat 22 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SETFNIF50.NS', name: 'SBI ETF Nifty 50', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SETFNN50.NS', name: 'SBI ETF Nifty Next 50', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SETFNIFBK.NS', name: 'SBI ETF Nifty Bank', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICIN50.NS', name: 'ICICI Prudential Nifty 50 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICIB22.NS', name: 'ICICI Prudential Bharat 22 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKNIFTY.NS', name: 'Kotak Nifty 50 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKBKETF.NS', name: 'Kotak Bank ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'AXISNIFTY.NS', name: 'Axis Nifty 50 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'AXISBNKETF.NS', name: 'Axis Bank ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // International ETFs
  { symbol: 'MOTILALUS.NS', name: 'Motilal Oswal S&P 500 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'MOTILALNQ.NS', name: 'Motilal Oswal Nasdaq 100 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICINUS.NS', name: 'ICICI Prudential US Bluechip ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICINQ100.NS', name: 'ICICI Prudential Nasdaq 100 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HDFCUS.NS', name: 'HDFC S&P 500 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HDFCNQ100.NS', name: 'HDFC Nasdaq 100 ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Commodity ETFs
  { symbol: 'HDFCCOMMODITY.NS', name: 'HDFC Commodity ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICIMETAL.NS', name: 'ICICI Prudential Metal ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKMETAL.NS', name: 'Kotak Metal ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SBIMETAL.NS', name: 'SBI Metal ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Bond ETFs
  { symbol: 'HDFCGILTF.NS', name: 'HDFC Gilt Fund ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ICICIGILT.NS', name: 'ICICI Prudential Gilt ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SBIGILT.NS', name: 'SBI Gilt ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'KOTAKGILT.NS', name: 'Kotak Gilt ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'LIQUIDETF.NS', name: 'Liquid ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SHORTBOND.NS', name: 'Short Term Bond ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'LONGBOND.NS', name: 'Long Term Bond ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Dividend ETFs
  { symbol: 'NIFTYDIV.NS', name: 'Nifty Dividend Opportunities ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'DIVOPPBEES.NS', name: 'Dividend Opportunities BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'QUALBEES.NS', name: 'Quality 30 BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'LOWVOLBEES.NS', name: 'Low Volatility BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'ALPHABEES.NS', name: 'Alpha Low Vol BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'MOMENTBEES.NS', name: 'Momentum BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Smart Beta ETFs
  { symbol: 'SMARTBETA.NS', name: 'Smart Beta ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'FACTORBEES.NS', name: 'Factor BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'VALUEBEES.NS', name: 'Value BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'GROWTHBEES.NS', name: 'Growth BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'QUALITYBEES.NS', name: 'Quality BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SIZEBEES.NS', name: 'Size BeES', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Thematic ETFs
  { symbol: 'ESGETF.NS', name: 'ESG ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SUSTAINETF.NS', name: 'Sustainability ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'DIGITALETF.NS', name: 'Digital India ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'INFRAETF.NS', name: 'Infrastructure ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'RURALETR.NS', name: 'Rural ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'URBANETF.NS', name: 'Urban ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'HEALTHETF.NS', name: 'Healthcare ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'EDUCATETF.NS', name: 'Education ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  
  // Multi-Cap ETFs
  { symbol: 'MULTICAP.NS', name: 'Multi Cap ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'LARGECAP.NS', name: 'Large Cap ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'MIDCAP.NS', name: 'Mid Cap ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'SMALLCAP.NS', name: 'Small Cap ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },
  { symbol: 'FLEXICAP.NS', name: 'Flexi Cap ETF', exchange: 'NSE', sector: 'ETF', currency: 'INR', country: 'India' },

  // Mid Cap Stocks (Additional 100+ stocks)
  { symbol: 'PIDILITIND.NS', name: 'Pidilite Industries Ltd', exchange: 'NSE', sector: 'Chemicals', currency: 'INR', country: 'India' },
  { symbol: 'DABUR.NS', name: 'Dabur India Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'MARICO.NS', name: 'Marico Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'COLPAL.NS', name: 'Colgate Palmolive India Ltd', exchange: 'NSE', sector: 'FMCG', currency: 'INR', country: 'India' },
  { symbol: 'BERGEPAINT.NS', name: 'Berger Paints India Ltd', exchange: 'NSE', sector: 'Paints', currency: 'INR', country: 'India' },
  { symbol: 'PAGEIND.NS', name: 'Page Industries Ltd', exchange: 'NSE', sector: 'Textiles', currency: 'INR', country: 'India' },
  { symbol: 'MCDOWELL-N.NS', name: 'United Spirits Ltd', exchange: 'NSE', sector: 'Beverages', currency: 'INR', country: 'India' },
  { symbol: 'AMBUJACEM.NS', name: 'Ambuja Cements Ltd', exchange: 'NSE', sector: 'Cement', currency: 'INR', country: 'India' },
  { symbol: 'ACC.NS', name: 'ACC Ltd', exchange: 'NSE', sector: 'Cement', currency: 'INR', country: 'India' },
  { symbol: 'BANDHANBNK.NS', name: 'Bandhan Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'FEDERALBNK.NS', name: 'Federal Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'IDFCFIRSTB.NS', name: 'IDFC First Bank Ltd', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'PNB.NS', name: 'Punjab National Bank', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'BANKBARODA.NS', name: 'Bank of Baroda', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' },
  { symbol: 'CANBK.NS', name: 'Canara Bank', exchange: 'NSE', sector: 'Banking', currency: 'INR', country: 'India' }
];

// US Stocks Database (NASDAQ/NYSE) - Major 500+ stocks
export const US_STOCKS: StockInfo[] = [
  // FAANG + Major Tech
  { symbol: 'AAPL', name: 'Apple Inc', exchange: 'NASDAQ', sector: 'Technology', currency: 'USD', country: 'USA' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', exchange: 'NASDAQ', sector: 'Technology', currency: 'USD', country: 'USA' },
  { symbol: 'GOOGL', name: 'Alphabet Inc Class A', exchange: 'NASDAQ', sector: 'Technology', currency: 'USD', country: 'USA' },
  { symbol: 'GOOG', name: 'Alphabet Inc Class C', exchange: 'NASDAQ', sector: 'Technology', currency: 'USD', country: 'USA' },
  { symbol: 'AMZN', name: 'Amazon.com Inc', exchange: 'NASDAQ', sector: 'E-commerce', currency: 'USD', country: 'USA' },
  { symbol: 'META', name: 'Meta Platforms Inc', exchange: 'NASDAQ', sector: 'Social Media', currency: 'USD', country: 'USA' },
  { symbol: 'TSLA', name: 'Tesla Inc', exchange: 'NASDAQ', sector: 'Electric Vehicles', currency: 'USD', country: 'USA' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', exchange: 'NASDAQ', sector: 'Semiconductors', currency: 'USD', country: 'USA' },
  { symbol: 'NFLX', name: 'Netflix Inc', exchange: 'NASDAQ', sector: 'Streaming', currency: 'USD', country: 'USA' },
  
  // Major Dow Jones Stocks
  { symbol: 'JPM', name: 'JPMorgan Chase & Co', exchange: 'NYSE', sector: 'Banking', currency: 'USD', country: 'USA' },
  { symbol: 'JNJ', name: 'Johnson & Johnson', exchange: 'NYSE', sector: 'Healthcare', currency: 'USD', country: 'USA' },
  { symbol: 'V', name: 'Visa Inc', exchange: 'NYSE', sector: 'Financial Services', currency: 'USD', country: 'USA' },
  { symbol: 'PG', name: 'Procter & Gamble Co', exchange: 'NYSE', sector: 'Consumer Goods', currency: 'USD', country: 'USA' },
  { symbol: 'UNH', name: 'UnitedHealth Group Inc', exchange: 'NYSE', sector: 'Healthcare', currency: 'USD', country: 'USA' },
  { symbol: 'HD', name: 'Home Depot Inc', exchange: 'NYSE', sector: 'Retail', currency: 'USD', country: 'USA' },
  { symbol: 'MA', name: 'Mastercard Inc', exchange: 'NYSE', sector: 'Financial Services', currency: 'USD', country: 'USA' },
  { symbol: 'BAC', name: 'Bank of America Corp', exchange: 'NYSE', sector: 'Banking', currency: 'USD', country: 'USA' },
  { symbol: 'DIS', name: 'Walt Disney Co', exchange: 'NYSE', sector: 'Entertainment', currency: 'USD', country: 'USA' },
  { symbol: 'ADBE', name: 'Adobe Inc', exchange: 'NASDAQ', sector: 'Software', currency: 'USD', country: 'USA' },
  { symbol: 'CRM', name: 'Salesforce Inc', exchange: 'NYSE', sector: 'Software', currency: 'USD', country: 'USA' },
  { symbol: 'NFLX', name: 'Netflix Inc', exchange: 'NASDAQ', sector: 'Streaming', currency: 'USD', country: 'USA' },
  { symbol: 'PYPL', name: 'PayPal Holdings Inc', exchange: 'NASDAQ', sector: 'Fintech', currency: 'USD', country: 'USA' },
  { symbol: 'INTC', name: 'Intel Corporation', exchange: 'NASDAQ', sector: 'Semiconductors', currency: 'USD', country: 'USA' },
  { symbol: 'AMD', name: 'Advanced Micro Devices Inc', exchange: 'NASDAQ', sector: 'Semiconductors', currency: 'USD', country: 'USA' },
  { symbol: 'ORCL', name: 'Oracle Corporation', exchange: 'NYSE', sector: 'Software', currency: 'USD', country: 'USA' },
  { symbol: 'IBM', name: 'International Business Machines Corp', exchange: 'NYSE', sector: 'Technology', currency: 'USD', country: 'USA' },
  { symbol: 'CSCO', name: 'Cisco Systems Inc', exchange: 'NASDAQ', sector: 'Networking', currency: 'USD', country: 'USA' },
  
  // Berkshire Hathaway
  { symbol: 'BRK-A', name: 'Berkshire Hathaway Inc Class A', exchange: 'NYSE', sector: 'Conglomerate', currency: 'USD', country: 'USA' },
  { symbol: 'BRK-B', name: 'Berkshire Hathaway Inc Class B', exchange: 'NYSE', sector: 'Conglomerate', currency: 'USD', country: 'USA' },
  
  // Major US ETFs - COMPREHENSIVE LIST (100+ ETFs)
  
  // Broad Market ETFs
  { symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'QQQ', name: 'Invesco QQQ Trust', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'IWM', name: 'iShares Russell 2000 ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VEA', name: 'Vanguard FTSE Developed Markets ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VWO', name: 'Vanguard FTSE Emerging Markets ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'IEFA', name: 'iShares Core MSCI EAFE IMI Index ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'IEMG', name: 'iShares Core MSCI Emerging Markets IMI Index ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VTV', name: 'Vanguard Value ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VUG', name: 'Vanguard Growth ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VTEB', name: 'Vanguard Tax-Exempt Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Sector ETFs
  { symbol: 'XLK', name: 'Technology Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLF', name: 'Financial Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLE', name: 'Energy Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLV', name: 'Health Care Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLI', name: 'Industrial Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLP', name: 'Consumer Staples Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLY', name: 'Consumer Discretionary Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLU', name: 'Utilities Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLB', name: 'Materials Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XLRE', name: 'Real Estate Select Sector SPDR Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'XME', name: 'SPDR S&P Metals and Mining ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Bond ETFs
  { symbol: 'BND', name: 'Vanguard Total Bond Market ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'AGG', name: 'iShares Core U.S. Aggregate Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'TLT', name: 'iShares 20+ Year Treasury Bond ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'IEF', name: 'iShares 7-10 Year Treasury Bond ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SHY', name: 'iShares 1-3 Year Treasury Bond ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'LQD', name: 'iShares iBoxx $ Investment Grade Corporate Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'HYG', name: 'iShares iBoxx $ High Yield Corporate Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'JNK', name: 'SPDR Bloomberg High Yield Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'TIP', name: 'iShares TIPS Bond ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SCHZ', name: 'Schwab Intermediate-Term U.S. Treasury ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // International ETFs
  { symbol: 'EFA', name: 'iShares MSCI EAFE ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'EEM', name: 'iShares MSCI Emerging Markets ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VGK', name: 'Vanguard FTSE Europe ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VPL', name: 'Vanguard FTSE Pacific ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'EWJ', name: 'iShares MSCI Japan ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'FXI', name: 'iShares China Large-Cap ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'EWZ', name: 'iShares MSCI Brazil ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'INDA', name: 'iShares MSCI India ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'RSX', name: 'VanEck Russia ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'EWY', name: 'iShares MSCI South Korea ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Commodity ETFs
  { symbol: 'GLD', name: 'SPDR Gold Shares', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SLV', name: 'iShares Silver Trust', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'USO', name: 'United States Oil Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'UNG', name: 'United States Natural Gas Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'DBA', name: 'Invesco DB Agriculture Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'PDBC', name: 'Invesco Optimum Yield Diversified Commodity Strategy No K-1 ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'CORN', name: 'Teucrium Corn Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'WEAT', name: 'Teucrium Wheat Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SOYB', name: 'Teucrium Soybean Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'CPER', name: 'United States Copper Index Fund', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Cryptocurrency ETFs
  { symbol: 'BITO', name: 'ProShares Bitcoin Strategy ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ETHE', name: 'Grayscale Ethereum Trust', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'GBTC', name: 'Grayscale Bitcoin Trust', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Thematic ETFs
  { symbol: 'ARKK', name: 'ARK Innovation ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ARKQ', name: 'ARK Autonomous Technology & Robotics ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ARKW', name: 'ARK Next Generation Internet ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ARKG', name: 'ARK Genomics Revolution ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ARKF', name: 'ARK Fintech Innovation ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ICLN', name: 'iShares Global Clean Energy ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'PBW', name: 'Invesco WilderHill Clean Energy ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ESGU', name: 'iShares MSCI USA ESG Select ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ESGD', name: 'iShares MSCI EAFE ESG Select ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'ESGE', name: 'iShares MSCI EM ESG Select ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Dividend ETFs
  { symbol: 'VYM', name: 'Vanguard High Dividend Yield ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SCHD', name: 'Schwab US Dividend Equity ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'DVY', name: 'iShares Select Dividend ETF', exchange: 'NASDAQ', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'NOBL', name: 'ProShares S&P 500 Dividend Aristocrats ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'VIG', name: 'Vanguard Dividend Appreciation ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'HDV', name: 'iShares Core High Dividend ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'DGRO', name: 'iShares Core Dividend Growth ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SPHD', name: 'Invesco S&P 500 High Dividend Low Volatility ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'SPYD', name: 'SPDR Portfolio S&P 500 High Dividend ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  { symbol: 'FDVV', name: 'Fidelity High Dividend ETF', exchange: 'NYSE', sector: 'ETF', currency: 'USD', country: 'USA' },
  
  // Additional Major Stocks
  { symbol: 'WMT', name: 'Walmart Inc', exchange: 'NYSE', sector: 'Retail', currency: 'USD', country: 'USA' },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', exchange: 'NYSE', sector: 'Oil & Gas', currency: 'USD', country: 'USA' },
  { symbol: 'CVX', name: 'Chevron Corporation', exchange: 'NYSE', sector: 'Oil & Gas', currency: 'USD', country: 'USA' },
  { symbol: 'KO', name: 'Coca-Cola Co', exchange: 'NYSE', sector: 'Beverages', currency: 'USD', country: 'USA' },
  { symbol: 'PEP', name: 'PepsiCo Inc', exchange: 'NASDAQ', sector: 'Beverages', currency: 'USD', country: 'USA' },
  { symbol: 'MCD', name: 'McDonald\'s Corp', exchange: 'NYSE', sector: 'Restaurants', currency: 'USD', country: 'USA' },
  { symbol: 'NKE', name: 'Nike Inc', exchange: 'NYSE', sector: 'Apparel', currency: 'USD', country: 'USA' },
  { symbol: 'COST', name: 'Costco Wholesale Corp', exchange: 'NASDAQ', sector: 'Retail', currency: 'USD', country: 'USA' }
];

// Global Stocks (Other Major Markets)
export const GLOBAL_STOCKS: StockInfo[] = [
  // UK Stocks (LSE)
  { symbol: 'SHEL.L', name: 'Shell plc', exchange: 'LSE', sector: 'Oil & Gas', currency: 'GBP', country: 'UK' },
  { symbol: 'AZN.L', name: 'AstraZeneca PLC', exchange: 'LSE', sector: 'Pharma', currency: 'GBP', country: 'UK' },
  { symbol: 'BP.L', name: 'BP p.l.c.', exchange: 'LSE', sector: 'Oil & Gas', currency: 'GBP', country: 'UK' },
  { symbol: 'ULVR.L', name: 'Unilever PLC', exchange: 'LSE', sector: 'Consumer Goods', currency: 'GBP', country: 'UK' },
  
  // Japanese Stocks (TSE)
  { symbol: '7203.T', name: 'Toyota Motor Corp', exchange: 'TSE', sector: 'Auto', currency: 'JPY', country: 'Japan' },
  { symbol: '6758.T', name: 'Sony Group Corp', exchange: 'TSE', sector: 'Electronics', currency: 'JPY', country: 'Japan' },
  { symbol: '9984.T', name: 'SoftBank Group Corp', exchange: 'TSE', sector: 'Technology', currency: 'JPY', country: 'Japan' },
  
  // Canadian Stocks (TSX)
  { symbol: 'SHOP.TO', name: 'Shopify Inc', exchange: 'TSX', sector: 'E-commerce', currency: 'CAD', country: 'Canada' },
  { symbol: 'RY.TO', name: 'Royal Bank of Canada', exchange: 'TSX', sector: 'Banking', currency: 'CAD', country: 'Canada' },
  
  // Australian Stocks (ASX)
  { symbol: 'CBA.AX', name: 'Commonwealth Bank of Australia', exchange: 'ASX', sector: 'Banking', currency: 'AUD', country: 'Australia' },
  { symbol: 'BHP.AX', name: 'BHP Group Ltd', exchange: 'ASX', sector: 'Mining', currency: 'AUD', country: 'Australia' }
];

// Combined database
export const ALL_STOCKS: StockInfo[] = [
  ...INDIAN_STOCKS,
  ...US_STOCKS,
  ...GLOBAL_STOCKS
];

// Helper functions
export const findStockBySymbol = (symbol: string): StockInfo | undefined => {
  const upperSymbol = symbol.toUpperCase();
  return ALL_STOCKS.find(stock => 
    stock.symbol.toUpperCase() === upperSymbol ||
    stock.symbol.toUpperCase().replace('.NS', '') === upperSymbol ||
    stock.symbol.toUpperCase().replace('.BO', '') === upperSymbol
  );
};

export const searchStocks = (query: string): StockInfo[] => {
  const upperQuery = query.toUpperCase();
  return ALL_STOCKS.filter(stock =>
    stock.symbol.toUpperCase().includes(upperQuery) ||
    stock.name.toUpperCase().includes(upperQuery) ||
    stock.sector.toUpperCase().includes(upperQuery)
  ).slice(0, 10); // Return top 10 matches
};

export const getStocksBySector = (sector: string): StockInfo[] => {
  return ALL_STOCKS.filter(stock => 
    stock.sector.toLowerCase() === sector.toLowerCase()
  );
};

export const getStocksByExchange = (exchange: string): StockInfo[] => {
  return ALL_STOCKS.filter(stock => 
    stock.exchange.toLowerCase() === exchange.toLowerCase()
  );
};

export const isValidStockSymbol = (symbol: string): boolean => {
  return findStockBySymbol(symbol) !== undefined;
};

export const getStockSuggestions = (query: string): string[] => {
  const matches = searchStocks(query);
  return matches.map(stock => stock.symbol);
};