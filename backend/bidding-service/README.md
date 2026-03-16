# Bidding Service

The Bidding Service manages freelancer bids for jobs posted by clients.

## Responsibilities

- Allow freelancers to submit bids for available jobs
- Store bid information in the database
- Allow clients to review bids
- Allow clients to accept or reject bids
- Track bid status changes

## Main API Routes

POST /api/bids  
Submit a bid for a job

GET /api/jobs/{id}/bids  
View all bids for a job

GET /api/bids/{id}  
View bid details

PUT /api/bids/{id}  
Update bid amount or message

POST /api/bids/{id}/accept  
Client accepts a bid

POST /api/bids/{id}/reject  
Client rejects a bid

## Bid Status Flow

pending → accepted → rejected

## Marketplace Logic

When a job is posted:
- Freelancers can view the job
- Freelancers submit bids
- Client compares bids
- Client selects one freelancer
- Job moves to assigned status
