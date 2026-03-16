# Rating Service

The Rating Service manages reviews and reputation scores between clients and freelancers.

## Responsibilities

- Allow clients to rate freelancers
- Allow freelancers to rate clients
- Store review comments
- Calculate average reputation scores

## Main API Routes

POST /api/ratings  
Submit a rating

GET /api/freelancers/{id}/ratings  
View freelancer ratings

GET /api/clients/{id}/ratings  
View client ratings

## Rating Structure

- Rating score (1–5)
- Written review
- Job reference
- Reviewer ID
- Review timestamp
