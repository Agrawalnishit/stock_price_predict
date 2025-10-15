# 📊 Stock Market API Setup Guide

## 🎯 **Recommended APIs for Accurate Stock Prices**

### **🥇 Alpha Vantage (Best Overall)**
```
✅ Accuracy: Excellent
✅ Coverage: Global (US + Indian stocks)
✅ Free Tier: 25 requests/day
✅ Paid: $50/month unlimited
✅ Indian Stocks: Full NSE/BSE support
```

**Setup:**
1. Visit: https://www.alphavantage.co/support/#api-key
2. Sign up for free account
3. Get your API key
4. Add to `.env.local`: `NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_key_here`

**Example API Call:**
```
https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=RELIANCE.BSE&apikey=YOUR_KEY
```

---

### **🥈 Finnhub (Great for Real-time)**
```
✅ Accuracy: Excellent
✅ Coverage: Global stocks
✅ Free Tier: 60 calls/minute
✅ Paid: $25/month premium
✅ WebSocket: Live streaming available
```

**Setup:**
1. Visit: https://finnhub.io/register
2. Create free account
3. Get your API token
4. Add to `.env.local`: `NEXT_PUBLIC_FINNHUB_API_TOKEN=your_token_here`

**Example API Call:**
```
https://finnhub.io/api/v1/quote?symbol=RELIANCE.NSE&token=YOUR_TOKEN
```

---

### **🥉 Twelve Data (Excellent for Indian Stocks)**
```
✅ Accuracy: Excellent
✅ Coverage: 5000+ Indian stocks
✅ Free Tier: 800 requests/day
✅ Paid: $8/month basic
✅ Indian Focus: Specialized in Indian markets
```

**Setup:**
1. Visit: https://twelvedata.com/
2. Sign up for free account
3. Get your API key
4. Add to `.env.local`: `NEXT_PUBLIC_TWELVE_DATA_API_KEY=your_key_here`

**Example API Call:**
```
https://api.twelvedata.com/quote?symbol=RELIANCE&apikey=YOUR_KEY
```

---

## 🇮🇳 **Premium Indian Stock APIs**

### **🏆 Zerodha Kite Connect (Most Accurate for Indian Stocks)**
```
✅ Accuracy: 100% (Direct broker data)
✅ Coverage: NSE, BSE, MCX, NFO
✅ Real-time: Tick-by-tick data
✅ Cost: ₹2000/month
⚠️ Requirement: Zerodha trading account
```

**Setup:**
1. Open Zerodha trading account
2. Visit: https://kite.trade/
3. Subscribe to Kite Connect
4. Get API credentials
5. Add to `.env.local`:
   ```
   ZERODHA_API_KEY=your_api_key
   ZERODHA_API_SECRET=your_api_secret
   ```

### **🏛️ NSE Official API (Free)**
```
✅ Accuracy: 100% (Official source)
✅ Coverage: All NSE stocks
✅ Cost: Free for basic data
⚠️ Registration: Required
⚠️ Rate Limits: Strict
```

**Setup:**
1. Visit: https://www.nseindia.com/
2. Register for API access
3. Get API credentials
4. Add to `.env.local`: `NSE_API_KEY=your_key_here`

---

## 🚀 **Quick Setup Instructions**

### **Step 1: Choose Your API**
For beginners, start with **Alpha Vantage** (free 25 requests/day):

### **Step 2: Get API Key**
1. Sign up at https://www.alphavantage.co/support/#api-key
2. Verify your email
3. Copy your API key

### **Step 3: Configure Environment**
1. Create `.env.local` file in your project root
2. Add your API key:
   ```
   NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_actual_api_key_here
   ```

### **Step 4: Test the Integration**
1. Restart your development server
2. Try searching for "RELIANCE" or "AAPL"
3. Check browser console for API calls
4. Verify accurate prices are displayed

---

## 📊 **API Priority Order (Current Implementation)**

```
1. 🇮🇳 Indian Broker APIs (Grow, Zerodha, Angel One)
2. 🌐 Yahoo Finance (Free, good coverage)
3. 🥇 Alpha Vantage (Most reliable)
4. 🥈 Finnhub (Real-time focused)
5. 🥉 Twelve Data (Indian stock specialist)
6. 🏛️ NSE Official API (Indian stocks only)
7. 💾 Current Market Database (Fallback)
```

---

## 🔧 **Troubleshooting**

### **Common Issues:**

**1. API Key Not Working:**
- Check if key is correctly added to `.env.local`
- Restart development server
- Verify key is active on provider website

**2. Indian Stocks Not Found:**
- Try different symbol formats: `RELIANCE`, `RELIANCE.NS`, `RELIANCE.BSE`
- Check if API supports Indian stocks
- Use Twelve Data for better Indian stock coverage

**3. Rate Limit Exceeded:**
- Upgrade to paid plan
- Use multiple API providers
- Implement caching to reduce requests

**4. CORS Errors:**
- Use server-side API calls (Next.js API routes)
- Implement proxy server
- Use official SDKs when available

---

## 💡 **Pro Tips**

1. **Use Multiple APIs**: Implement fallback chain for reliability
2. **Cache Results**: Store prices for 1-5 minutes to reduce API calls
3. **Error Handling**: Always have fallback data for when APIs fail
4. **Rate Limiting**: Implement request throttling to stay within limits
5. **Monitoring**: Track API success rates and switch providers if needed

---

## 🎯 **Recommended Setup for Production**

**For Small Projects (< 1000 requests/day):**
- Alpha Vantage Free (25 requests/day)
- Yahoo Finance (Unofficial backup)
- Current Market Database (Fallback)

**For Medium Projects (< 10,000 requests/day):**
- Alpha Vantage Paid ($50/month)
- Twelve Data Basic ($8/month)
- Finnhub Free (60 calls/minute)

**For Large Projects (> 10,000 requests/day):**
- Zerodha Kite Connect (₹2000/month) - Indian stocks
- Alpha Vantage Premium ($150/month) - Global stocks
- Multiple API providers for redundancy

---

## 📞 **Support**

If you need help setting up APIs:
1. Check the provider's documentation
2. Join their developer communities
3. Contact their support teams
4. Use the fallback database while setting up APIs

**Your stock platform will work with or without API keys - it will just use the current market database as fallback!**