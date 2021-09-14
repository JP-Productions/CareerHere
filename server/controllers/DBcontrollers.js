const db = require('../models/models');

const DBcontroller = {};

DBcontroller.verifyUser = async (req, res, next) => {
  try {
    const queryString = `SELECT * FROM users WHERE (email) VALUES ($1)`;
    const result = await db.query(queryString);
  } catch (error) {}
};

module.exports = DBcontroller;
