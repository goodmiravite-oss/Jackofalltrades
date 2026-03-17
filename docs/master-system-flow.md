# Master System Flow

This document explains how all backend services interact in the Jack of All Trades platform.

## Core Flow

Client → API Gateway → Services → Database → Response

---

## 1. Job Creation Flow

Client App
→ API Gateway
→ Job Service
→ Database (Jobs Table)

Trigger:
→ Notification Service (notify freelancers)

---

## 2. Bidding Flow

Freelancer App
→ API Gateway
→ Bidding Service
→ Database (Bids Table)

Trigger:
→ Notification Service (notify client)

---

## 3. Escrow Payment Flow

Client Wallet
→ Wallet Service
→ Escrow System (lock funds)

Database:
→ Transactions Table
→ Wallet Ledger

---

## 4. Job Completion Flow

Freelancer marks job complete
→ Job Service updates status

Client confirms
→ Escrow releases payment
→ Wallet Service updates balances

---

## 5. Rating Flow

Client submits rating
→ Rating Service
→ Database (Ratings Table)

---

## 6. Notification Flow

Any action triggers:
→ Notification Service
→ Push / SMS / Email

---

## 7. Fraud & Admin Monitoring

All transactions logged
→ Backoffice Dashboard
→ Fraud Detection Engine

---

## Summary

All services are connected through API Gateway and share data via database and event triggers.
