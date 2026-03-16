# Jack of All Trades Database Schema

## Core Tables

### Users
- id
- name
- email
- phone
- role (client / freelancer / company)
- created_at

### Freelancers
- id
- user_id
- bio
- skills
- rating
- jobs_completed

### Companies
- id
- company_name
- owner_user_id
- employees_count

### Jobs
- id
- client_id
- title
- description
- location
- budget
- status

### Bids
- id
- job_id
- freelancer_id
- bid_amount
- message
- status

### Wallets
- id
- user_id
- balance

### Transactions
- id
- wallet_id
- amount
- type
- created_at

### Ratings
- id
- job_id
- client_id
- freelancer_id
- rating
- review

### Tools
- id
- freelancer_id
- tool_name
- description

### JobSchedules
- id
- job_id
- start_time
- end_time
- status
