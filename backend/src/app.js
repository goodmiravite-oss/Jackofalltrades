const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/users/user.routes');
const jobRoutes = require('./modules/jobs/job.routes');
const bidRoutes = require('./modules/bids/bid.routes');
const walletRoutes = require('./modules/wallet/wallet.routes');
const escrowRoutes = require('./modules/escrow/escrow.routes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/escrow', escrowRoutes);

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Jack of All Trades API is LIVE 🚀');
});

module.exports = app;
