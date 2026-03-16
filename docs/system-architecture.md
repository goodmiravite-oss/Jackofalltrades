# Jack of All Trades System Architecture

## Overview

Jack of All Trades is a service marketplace platform connecting clients, freelancers, and service companies through a secure escrow-based system.

The platform consists of several layers that work together to manage job posting, bidding, payments, scheduling, and ratings.

---

## Core Architecture

Mobile Apps / Web App
(Client App, Freelancer App, Company Dashboard)

        ↓

API Gateway

        ↓

Backend Services

- Authentication Service
- Job Marketplace Service
- Wallet and Escrow Service
- Notification Service
- Rating and Reputation Service

        ↓

Database Layer

Tables:
Users
Freelancers
Companies
Jobs
Bids
Wallets
Transactions
Ratings
Tools
Schedules

---

## Supporting Systems

Backoffice Admin Panel

Functions:

- Freelancer verification
- Job monitoring
- Dispute resolution
- Fraud detection
- Marketplace analytics

---

## Payment Flow

Client funds wallet  
→ Escrow holds payment  
→ Job is completed  
→ Payment released to freelancer wallet  
→ Platform commission deducted

---

## Safety Systems

Emergency button  
Location verification  
Body cam support  
Customer service monitoring

---

## Future Scalability

Microservices architecture  
Cloud infrastructure  
AI job matching  
Demand and supply analytics
