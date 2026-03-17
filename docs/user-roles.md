# User Roles & Permissions

This document defines user types and access control in the platform.

---

## 1. USER TYPES

### Client

* Post jobs
* Fund wallet
* Accept bids
* Rate freelancers

### Freelancer

* View jobs
* Submit bids
* Complete jobs
* Receive payments

### Company / Agency

* Manage multiple freelancers
* Assign jobs internally
* Monitor team performance
* Handle bulk operations

### Admin (Backoffice)

* Verify users
* Resolve disputes
* Monitor transactions
* Detect fraud
* Manage platform settings

---

## 2. PERMISSION MATRIX

| Action           | Client | Freelancer | Company | Admin |
| ---------------- | ------ | ---------- | ------- | ----- |
| Create Job       | ✅      | ❌          | ✅       | ❌     |
| Submit Bid       | ❌      | ✅          | ✅       | ❌     |
| Accept Bid       | ✅      | ❌          | ✅       | ❌     |
| Deposit Funds    | ✅      | ❌          | ✅       | ❌     |
| Withdraw Funds   | ❌      | ✅          | ✅       | ❌     |
| Release Escrow   | ✅      | ❌          | ✅       | ✅     |
| Submit Rating    | ✅      | ❌          | ✅       | ❌     |
| View Analytics   | ❌      | ❌          | ✅       | ✅     |
| Resolve Disputes | ❌      | ❌          | ❌       | ✅     |

---

## 3. AUTHORIZATION FLOW

User logs in
→ Auth Service validates identity
→ JWT Token issued

Each request:
→ API Gateway checks token
→ System verifies role permissions
→ Request allowed or denied

---

## 4. SECURITY RULES

* No direct wallet access without authentication
* Escrow release requires job completion + client confirmation
* Admin actions are logged and audited
* Suspicious activity triggers manual review

---

## Summary

Role-based access control ensures system security, fairness, and proper user interaction.
