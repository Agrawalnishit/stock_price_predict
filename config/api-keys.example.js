// API Configuration for Real-Time Stock Data
// Copy this file to api-keys.js and add your API keys

export const API_CONFIG = {
  // Alpha Vantage API (Free tier: 5 calls per minute, 500 calls per day)
  // Get your free API key at: https://www.alphavantage.co/support/#api-key
  ALPHA_VANTAGE_API_KEY: 'demo', // Replace with your API key
  
  // Finnhub API (Free tier: 60 calls per minute)
  // Get your free API key at: https://finnhub.io/register
  FINNHUB_API_TOKEN: 'sandbox_c8k2aiad3r6o6f5lqd10', // Replace with your token
  
  // IEX Cloud API (Free tier available)
  // Get your API key at: https://iexcloud.io/console/tokens
  IEX_CLOUD_API_KEY: '', // Add your API key
  
  // Polygon.io API (Free tier: 5 calls per minute)
  // Get your API key at: https://polygon.io/dashboard/api-keys
  POLYGON_API_KEY: '', // Add your API key
  
  // Twelve Data API (Free tier: 800 calls per day)
  // Get your API key at: https://twelvedata.com/pricing
  TWELVE_DATA_API_KEY: '', // Add your API key
};

// API Endpoints Configuration
export const API_ENDPOINTS = {
  YAHOO_FINANCE: 'https://query1.finance.yahoo.com/v8/finance/chart/',
  ALPHA_VANTAGE: 'https://www.alphavantage.co/query',
  FINNHUB: 'https://finnhub.io/api/v1/quote',
  IEX_CLOUD: 'https://cloud.iexapis.com/stable/stock/',
  POLYGON: 'https://api.polygon.io/v2/aggs/ticker/',
  TWELVE_DATA: 'https://api.twelvedata.com/price'
};

// Rate Limiting Configuration
export const RATE_LIMITS = {
  ALPHA_VANTAGE: { calls: 5, period: 60000 }, // 5 calls per minute
  FINNHUB: { calls: 60, period: 60000 }, // 60 calls per minute
  IEX_CLOUD: { calls: 100, period: 60000 }, // 100 calls per minute (free tier)
  POLYGON: { calls: 5, period: 60000 }, // 5 calls per minute (free tier)
  TWELVE_DATA: { calls: 800, period: 86400000 } // 800 calls per day
};

// Instructions for getting API keys:
/*
1. Alpha Vantage (Recommended - Free):
   - Visit: https://www.alphavantage.co/support/#api-key
   - Sign up for free account
   - Get API key instantly
   - 500 free calls per day

2. Finnhub (Good for real-time data):
   - Visit: https://finnhub.io/register
   - Create free account
   - Get API token
   - 60 calls per minute free

3. Yahoo Finance (No API key needed):
   - Works without registration
   - May have rate limiting
   - Good for basic stock data

4. For production use:
   - Consider paid tiers for higher limits
   - Implement proper error handling
   - Add caching to reduce API calls
   - Monitor usage to avoid limits
*/