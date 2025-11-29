const allLessons = {
    stocks: [
      {
        id: 'stocks-1',
        title: 'What Are Stocks?',
        description: 'Understanding the basics of stock ownership and equity',
        duration: '8 min read',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
        content: [
          {
            heading: 'Stock Basics',
            text: 'A stock represents ownership in a company. When you buy a stock, you become a shareholder and own a small piece of that company.',
            example: 'If you buy 10 shares of Apple at $150 each, you own $1,500 worth of Apple stock.'
          },
          {
            heading: 'How Stocks Work',
            text: 'Companies issue stocks to raise money for growth. Stock prices fluctuate based on supply and demand, company performance, and market conditions.'
          }
        ]
      },
      {
        id: 'stocks-2',
        title: 'How the Stock Market Works',
        description: 'Learn about exchanges, trading, and market mechanics',
        duration: '10 min read',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80',
        content: [
          {
            heading: 'Stock Exchanges',
            text: 'Stock exchanges like NYSE and NASDAQ are marketplaces where buyers and sellers trade stocks.',
            example: 'The NYSE is the world\'s largest stock exchange with thousands of companies listed.'
          }
        ]
      },
      {
        id: 'stocks-3',
        title: 'Reading Stock Charts',
        description: 'Master the basics of technical analysis',
        duration: '12 min read',
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80',
        content: [
          {
            heading: 'Price Charts',
            text: 'Stock charts display price movements over time. Candlestick charts reveal opening, closing, high, and low prices.',
            example: 'A green candlestick means closing price was higher than opening (bullish).'
          }
        ]
      },
      {
        id: 'stocks-4',
        title: 'Building Your Portfolio',
        description: 'Strategies for diversification',
        duration: '15 min read',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        content: [
          {
            heading: 'Diversification',
            text: 'Spread investments across different sectors and asset types to reduce risk.',
            example: 'Balance tech stocks with healthcare, consumer goods, and financial stocks.'
          }
        ]
      }
    ],
    forex: [
      {
        id: 'forex-1',
        title: 'Forex Basics',
        description: 'Introduction to foreign exchange trading',
        duration: '8 min read',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
        content: [
          {
            heading: 'What is Forex?',
            text: 'Forex is the global marketplace for trading currencies. Over $6 trillion traded daily, 24/5 operation.',
            example: 'When you exchange dollars for euros while traveling, you\'re participating in forex.'
          }
        ]
      },
      {
        id: 'forex-2',
        title: 'Currency Pairs Explained',
        description: 'Understanding how currency pairs work',
        duration: '10 min read',
        image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80',
        content: [
          {
            heading: 'Reading Currency Pairs',
            text: 'Currency pairs show two currencies: base currency (first) and quote currency (second).',
            example: 'EUR/USD = 1.10 means 1 euro equals 1.10 US dollars.'
          }
        ]
      },
      {
        id: 'forex-3',
        title: 'Trading Strategies',
        description: 'Popular forex trading approaches',
        duration: '12 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        content: [
          {
            heading: 'Day Trading',
            text: 'Open and close positions within the same day, avoiding overnight risk.',
            example: 'Make 5-10 trades during London session, capturing small profits.'
          }
        ]
      },
      {
        id: 'forex-4',
        title: 'Risk Management',
        description: 'Protecting your capital',
        duration: '10 min read',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
        content: [
          {
            heading: 'Leverage and Margin',
            text: 'Forex uses leverage, amplifying both profits and losses. Use cautiously.',
            example: 'With 50:1 leverage, control $50,000 with $1,000.'
          }
        ]
      }
    ],
    crypto: [
      {
        id: 'crypto-1',
        title: 'What is Cryptocurrency?',
        description: 'Understanding digital currencies',
        duration: '10 min read',
        image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80',
        content: [
          {
            heading: 'Digital Currency Basics',
            text: 'Cryptocurrency is digital money existing only electronically, operating on decentralized networks.',
            example: 'Bitcoin, created in 2009, was the first cryptocurrency.'
          }
        ]
      },
      {
        id: 'crypto-2',
        title: 'Blockchain Explained',
        description: 'The technology powering crypto',
        duration: '12 min read',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
        content: [
          {
            heading: 'What is Blockchain?',
            text: 'A distributed ledger - a database shared across many computers. Once added, blocks cannot be altered.',
            example: 'Like a shared Google Doc everyone can read, but no one can erase.'
          }
        ]
      },
      {
        id: 'crypto-3',
        title: 'Popular Cryptocurrencies',
        description: 'Overview of major digital currencies',
        duration: '15 min read',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80',
        content: [
          {
            heading: 'Bitcoin (BTC)',
            text: 'The first and most valuable cryptocurrency with a capped supply of 21 million coins.',
            example: 'Bitcoin\'s market cap exceeds $500 billion.'
          }
        ]
      },
      {
        id: 'crypto-4',
        title: 'Wallets and Security',
        description: 'Safely storing cryptocurrency',
        duration: '12 min read',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
        content: [
          {
            heading: 'Types of Wallets',
            text: 'Hot wallets are online (convenient but less secure). Cold wallets are offline (more secure).',
            example: 'Keep small amounts in hot wallet, store long-term holdings in cold wallet.'
          }
        ]
      }
    ]
  };

/* Stocks */
