const express = require("express");

const app = express();

const corsMiddleware = require("./middleware/corsauthmiddleware");

const authRoutes = require("./routes/authroutes");

app.use(corsMiddleware);

app.use(express.json());

app.use(authRoutes);

module.exports = app;
