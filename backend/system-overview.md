# Backend System Overview

The backend of Jack of All Trades is composed of several services that work together to power the service marketplace.

## Services

Auth Service
Handles authentication and identity verification.

Job Service
Manages job creation, updates, and job lifecycle.

Bidding Service
Handles freelancer bids for posted jobs.

Wallet Service
Manages escrow payments, deposits, withdrawals, and transaction logs.

Notification Service
Sends alerts to users regarding jobs, bids, and payments.

Rating Service
Handles reviews and reputation scores.

## Service Flow

Client posts job
→ Job Service stores job

Freelancers view job
→ Bidding Service records bids

Client accepts bid
→ Wallet Service locks escrow

Job completed
→ Wallet Service releases payment

Both users rate each other
→ Rating Service updates reputation

Notifications sent throughout the process.
