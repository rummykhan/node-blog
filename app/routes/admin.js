const express = require('express');
const router = express.Router();

// Use Sequelize for Mysql Queries.
const Sequelize = require('sequelize');

// Require Models.
const models = require('../models/index');