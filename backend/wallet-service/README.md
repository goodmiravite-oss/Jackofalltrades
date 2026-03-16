# Wallet Service

The Wallet Service manages payments, balances, and escrow transactions for the Jack of All Trades platform.

## Responsibilities

- Manage user wallet balances
- Handle client deposits
- Hold payments in escrow during jobs
- Release payment after job completion
- Deduct platform commissions
- Record all financial transactions
- Process withdrawals for freelancers

## Main API Routes

GET /api/wallet  
View wallet balance

POST /api/wallet/deposit  
Add funds to wallet

POST /api/wallet/withdraw  
Withdraw funds from wallet

POST /api/wallet/escrow  
Hold payment for a job

POST /api/wallet/release  
Release payment to freelancer after job completion

GET /api/transactions  
View transaction history

## Payment Flow

Client deposits money  
→ Wallet balance increases

Client accepts freelancer bid  
→ Escrow locks job payment

Job completed and confirmed  
→ Escrow releases payment to freelancer

Platform commission deducted automatically

## Security

- Escrow protection
- Transaction logging
- Dispute support
- Fraud monitoring
