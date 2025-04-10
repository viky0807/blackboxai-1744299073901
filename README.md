# Web3 Chat Application

A decentralized chat application built with Next.js, Hardhat, and Ethereum.

## Features
- Connect with MetaMask wallet
- Send and receive messages on-chain
- View message history

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start local blockchain:
```bash
npx hardhat node
```

3. In a new terminal, deploy contracts:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

4. Start development server:
```bash
npm run dev
```

## Environment Setup

1. Create `.env.local` file in root directory with:
```
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
```

2. Make sure MetaMask is installed and connected to localhost:8545
