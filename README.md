# **VertexVita**

Welcome to **VertexVita**, a decentralized AI-powered healthcare platform built on **Linera** — putting patients back in control of their medical data with encrypted *Intelligent Health NFTs*, real-time AI diagnostics, and verifiable sharing with doctors.

**Repository:** [https://github.com/Wadill/VertexVita](https://github.com/Wadill/VertexVita)  
**Live Demo:** https://vertexvita.vercel.app/  (update link as needed)

## LIVE on MAINNET! Contract: 0x1F0441f4aD7ddAf44187F780afc6AacdC270Bba7 
---

## **What It Does**

VertexVita lets patients own their lifetime medical records as **updatable, encrypted Intelligent Health NFTs** on Linera.

1. Upload records
2. AI analyzes privately
3. Receive instant diagnostics & personalized insights
4. Share securely with doctors or emergency responders

All at **sub-cent fees** and **real-time finality** thanks to Linera's microchain architecture.

---

## **The Problem It Solves**

Centralized healthcare systems:  
❌ leak data  
❌ lock patients out  
❌ cost too much

VertexVita fixes this with **Linera’s microchains**, **user-owned chains**, and **Lit Protocol** to deliver:

* True data ownership
* HIPAA-grade privacy
* Instant, global interoperability
* Consumer-scale UX with real-time performance

---

## **Features**

* **Encrypted medical records** on IPFS + Lit Protocol
* **Intelligent Health NFTs (ERC-721A)** representing lifetime medical records
* **Real-time AI diagnostics** (skin, ECG, blood panels) via off-chain AI workers
* **Verifiable doctor credentials & patient identity** (using decentralized identity solutions)
* **Emergency QR access** (“break-glass” decryption)
* **The Graph-powered dashboard** with rich visualizations
* **Wearables sync** (Apple Health, Google Fit, Oura support coming)

---

## **Technologies Used**

**Frontend:**

* Next.js 14, TypeScript, Tailwind CSS
* Framer Motion, Recharts

**Blockchain:**

* Linera (Mainnet)
* Linera microchains for per-user scalability

**Encryption & Identity:**

* Lit Protocol
* Decentralized identity tools

**Storage:**

* IPFS
* NFT.Storage
* web3.storage

**Smart Contracts:**

* Solidity, Hardhat (or Rust/Wasm where applicable for Linera compatibility)
* ERC-721A

**Wallet & Indexing:**

* wagmi, viem, RainbowKit
* The Graph

**AI:**

* Hugging Face
* Custom biomedical models (hybrid on/off-chain)

---

## **How We Built It**

* Started with a scalable Web3 template adapted for Linera
* Deployed **Intelligent Health NFT** + access control contracts
* Built encrypted upload flow → IPFS → Lit-encrypted CID → on-chain
* Created off-chain **AI workers** listening for events, running inference, writing results
* Integrated decentralized identity for verifiable credentials without KYC
* Indexed all user data with **The Graph** for instant dashboards
* Deployed on Linera Testnet → ready for mainnet

---

## **Roadmap**

### **Wave 1 (Done)** – Testnet MVP

* Encrypted records
* Intelligent Health NFTs
* Basic AI diagnostics

### **Wave 2 – Mainnet + First 1,000 Users**

* Full AI engine (3 medical models)
* Doctor verification marketplace
* Apple Health / Oura sync
* Cross-chain health passports via Linera messaging

### **Wave 3 – Category Leader**

* Insurance & clinical trials marketplace
* Hospital integrations (India/LATAM pilot)
* VertexVita Predict (long-term risk scoring)
* `$VITA` token + DAO

### **Wave 4 – Global Standard**

* 1M+ users
* Major wearable & insurer partnerships
* The Web3 EHR layer on real-time blockchain

---

## **Challenges We Ran Into**

* Syncing off-chain AI inference latency with Linera’s real-time execution
* Keeping gas costs **< $0.01** for frequent updates on microchains
* Achieving real **HIPAA-grade privacy** on a public decentralized network (solved via Lit + identity tools)

---

## **What We Learned**

Linera is one of the fastest, lowest-latency, and most scalable platforms for real consumer health applications thanks to its microchain design and elastic validators.

* Lit Protocol + decentralized identity = genuine medical privacy
* Architecting with fundraising in mind leads to far better UX and scalability

---

## **Installation**

```bash
git clone https://github.com/Wadill/VertexVita.git
cd VertexVita
npm install

cp .env.example .env.local
# Add your WalletConnect ID & private key

npm run dev