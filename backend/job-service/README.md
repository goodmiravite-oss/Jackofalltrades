# Job Service

The Job Service manages all job-related operations in the Jack of All Trades platform.

## Responsibilities

- Create new jobs posted by clients
- Store job information in the database
- Show available jobs to freelancers
- Update job status (open, assigned, in-progress, completed)
- Cancel jobs
- Connect jobs with bids from freelancers

## Main API Routes

POST /api/jobs  
Create a new job

GET /api/jobs  
List all available jobs

GET /api/jobs/{id}  
Get job details

PUT /api/jobs/{id}  
Update job details

DELETE /api/jobs/{id}  
Cancel job

## Job Status Flow

open → bidding → assigned → in-progress → completed → rated
