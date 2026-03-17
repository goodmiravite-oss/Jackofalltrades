# API Design – Jack of All Trades

This document defines the core API endpoints for the platform.

---

## 1. AUTH SERVICE

### Register

POST /auth/register

### Login

POST /auth/login

### Get Profile

GET /auth/me

---

## 2. JOB SERVICE

### Create Job

POST /jobs

### Get All Jobs

GET /jobs

### Get Job by ID

GET /jobs/{id}

### Update Job Status

PUT /jobs/{id}/status

---

## 3. BIDDING SERVICE

### Submit Bid

POST /bids

### Get Bids for Job

GET /jobs/{id}/bids

### Accept Bid

POST /bids/{id}/accept

---

## 4. WALLET SERVICE

### Deposit Funds

POST /wallet/deposit

### Withdraw Funds

POST /wallet/withdraw

### Get Wallet Balance

GET /wallet

---

## 5. ESCROW SERVICE

### Lock Payment

POST /escrow/lock

### Release Payment

POST /escrow/release

### Refund Payment

POST /escrow/refund

---

## 6. RATING SERVICE

### Submit Rating

POST /ratings

### Get User Ratings

GET /ratings/{userId}

---

## 7. NOTIFICATION SERVICE

### Send Notification

POST /notifications/send

### Get Notifications

GET /notifications

---

## Notes

* All endpoints go through API Gateway
* Authentication required (JWT Token)
* All responses are in JSON format
