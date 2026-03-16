# Jack of All Trades API Endpoints

## Authentication

POST /api/auth/register
Create a new user account

POST /api/auth/login
Authenticate user and return token

POST /api/auth/logout
Logout user session

---

## User Profile

GET /api/users/profile
Get user profile

PUT /api/users/profile
Update profile information

---

## Freelancers

GET /api/freelancers
List freelancers

GET /api/freelancers/{id}
View freelancer profile

POST /api/freelancers/skills
Add freelancer skills

POST /api/freelancers/tools
Add tools owned by freelancer

---

## Jobs

POST /api/jobs
Client creates a job

GET /api/jobs
List available jobs

GET /api/jobs/{id}
View job details

PUT /api/jobs/{id}
Update job

DELETE /api/jobs/{id}
Cancel job

---

## Bidding

POST /api/bids
Freelancer places a bid

GET /api/jobs/{id}/bids
View bids for a job

POST /api/bids/{id}/accept
Client accepts a bid

---

## Wallet

GET /api/wallet
View wallet balance

POST /api/wallet/deposit
Add funds

POST /api/wallet/withdraw
Withdraw funds

---

## Transactions

GET /api/transactions
View transaction history

---

## Ratings

POST /api/ratings
Submit rating

GET /api/freelancers/{id}/ratings
View freelancer ratings

---

## Notifications

GET /api/notifications
List notifications

POST /api/notifications/read
Mark notification as read
