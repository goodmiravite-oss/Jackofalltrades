# Notification Service

The Notification Service delivers alerts and updates to clients, freelancers, and companies.

## Responsibilities

- Notify freelancers of new jobs
- Notify clients when freelancers place bids
- Notify users when a bid is accepted
- Notify users when a job starts or completes
- Notify users about wallet transactions

## Main API Routes

GET /api/notifications  
List user notifications

POST /api/notifications/send  
Send notification to user

POST /api/notifications/read  
Mark notification as read

## Notification Types

- New job available
- New bid received
- Bid accepted
- Job reminder
- Payment released
