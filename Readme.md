# Tasmil Finance

A sophisticated AI-powered trading platform built on Aptos blockchain, enabling seamless token swaps, market evaluation, and automated trading through intelligent agent automation.

## Overview

Tasmil Finance is a modern DeFi trading platform that combines AI-powered market analysis with blockchain technology to provide users with intelligent trading strategies, portfolio management, and real-time market insights on the Aptos ecosystem.

## Features

### Core Features
- **AI-Powered Trading Agent**: Automated trading decisions based on market analysis and predictive models
- **Token Swaps**: Seamless token exchanges with optimized routing via Liquidswap
- **Market Evaluation**: Real-time market analysis and price predictions using Pyth oracles
- **Risk Management**: Automated risk assessment and position sizing
- **Portfolio Management**: Track and optimize your crypto portfolio with AI-driven insights

### Platform Features
- **DeFi Integration**: Support for Liquidswap, Merkle Trade, and other Aptos protocols
- **Multi-Wallet Support**: Compatible with Martian, Petra, Pontem, OKX wallets
- **Real-time Analytics**: Live market data and trending token analysis
- **User Settings**: Customizable trading preferences and notifications
- **Voice Interaction**: AI voice assistant for hands-free trading

## Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI, Shadcn UI
- **State Management**: Zustand, React Query (TanStack Query)
- **Blockchain**: Aptos SDK, Wallet Adapter
- **Animations**: Framer Motion, React Spring
- **Charts**: Recharts
- **Package Manager**: Yarn

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **AI/ML**: LangChain with OpenAI integration
- **Database**: Supabase
- **Cache**: Redis with Keyv
- **Authentication**: JWT with Passport
- **API Documentation**: Swagger
- **Blockchain**: Aptos SDK, Liquidswap SDK, Merkle Trade SDK
- **Package Manager**: pnpm

## Getting Started

### Prerequisites
- Node.js >= 18.x (Client)
- Node.js >= 22.x (Server)
- Yarn (for client)
- pnpm (for server)
- Redis (for caching)

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/x-defi/tasmil-finance.git
cd tasmil-finance
```

2. Set up environment variables:

**Client** - Copy `.env.development` to `.env` in the client folder:
```bash
cd client
cp .env.development .env
```

**Server** - Copy `.env.development` to `.env` in the server folder:
```bash
cd server
cp .env.development .env
```

### Installation & Running

#### Client (Frontend)

```bash
cd client
yarn install
yarn dev
```

The client will run on [http://localhost:3000](http://localhost:3000)

**Production Deployment**: [https://tasmil-finance.vercel.app/](https://tasmil-finance.vercel.app/)

#### Server (Backend)

```bash
cd server
pnpm install
pnpm start:dev
```

The server will run on [http://localhost:5000](http://localhost:5000)

**API Documentation**: [http://localhost:5000/api/docs](http://localhost:5000/api/docs)

### Other Commands

#### Client
```bash
yarn build          # Build for production
yarn start          # Start production server
yarn lint           # Run ESLint
yarn format         # Format code with Prettier
```

#### Server
```bash
pnpm build          # Build for production
pnpm start:prod     # Start production server
pnpm lint           # Run ESLint
pnpm format         # Format code with Prettier
pnpm test           # Run tests
pnpm test:watch     # Run tests in watch mode
pnpm test:cov       # Run tests with coverage

# PM2 Process Management
pnpm pm2:start      # Start with PM2
pnpm pm2:stop       # Stop PM2 process
pnpm pm2:restart    # Restart PM2 process
pnpm pm2:logs       # View PM2 logs
pnpm pm2:status     # Check PM2 status
```

## Project Structure

```
tasmil-finance/
├── client/                 # Next.js frontend application
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   ├── lib/              # Utility functions and hooks
│   ├── public/           # Static assets
│   └── styles/           # Global styles
├── server/                # NestJS backend application
│   ├── src/              # Source code
│   │   ├── modules/      # Feature modules
│   │   ├── common/       # Shared utilities
│   │   └── config/       # Configuration files
│   └── test/             # Test files
└── README.md             # This file
```

## Key Technologies

### Blockchain & DeFi
- **Aptos SDK**: Blockchain interaction
- **Liquidswap**: DEX integration for token swaps
- **Merkle Trade**: Trading protocol
- **Pyth Network**: Price oracles

### AI & LLM
- **LangChain**: AI agent orchestration
- **OpenAI**: Large language models

### Infrastructure
- **Supabase**: Database and authentication
- **Redis**: Caching layer
- **Vercel**: Frontend deployment
- **PM2**: Process management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under UNLICENSED - see the package.json files for details.

## Links

- **Production**: [https://tasmil-finance.vercel.app/](https://tasmil-finance.vercel.app/)
- **Repository**: [https://github.com/x-defi/tasmil-finance](https://github.com/x-defi/tasmil-finance)
- **Issues**: [https://github.com/x-defi/tasmil-finance/issues](https://github.com/x-defi/tasmil-finance/issues)

## Support

For support, please open an issue in the GitHub repository or contact the development team.
