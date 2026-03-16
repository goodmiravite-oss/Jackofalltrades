# Job Workflow

## Client creates a job
Client opens the mobile app
→ submits job title, description, location, and budget
→ job is stored in the Jobs table
→ notification sent to nearby freelancers

## Freelancers view job
Freelancers browse the job feed
→ select job details
→ submit a bid with price and message
→ bid stored in the Bids table

## Client selects freelancer
Client reviews bids
→ accepts one bid
→ job status changes to "assigned"
→ escrow payment reserved from client wallet

## Job execution
Freelancer travels to job location
→ system verifies location
→ job schedule starts
→ work is completed

## Payment release
Client confirms job completion
→ escrow funds released
→ freelancer wallet credited
→ platform commission deducted

## Rating and review
Client rates freelancer
Freelancer rates client
→ ratings stored in Ratings table
→ reputation scores updated
