const db = require('../models/models');

const DBcontroller = {};

DBcontroller.verifyUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, token } = req.body;
    // check if user in database
    // if so send them on their way
    // insert them into the database
    const params = [email];
    const instertParams = [firstName, lastName, email, token];
    const verifyString = `SELECT * FROM users WHERE email = $1`;
    const verifyResult = await db.query(verifyString, params);
    if (verifyResult.rows.length) {
      /// if result.rows has length 1 we will set cookie in order to allow user access
      res.locals.id = verifyResult.rows[0].id;
    } else {
      const insertString = `INSERT INTO users (first_name, last_name, email, user_name, password) VALUES ($1, $2, $3, $3, $4) RETURNING * `;
      const insertResult = await db.query(insertString, instertParams);
      console.log(insertResult);
      res.locals.id = insertResult.rows[0].id;
    }
    return next();
  } catch (error) {
    console.log(`err in verifyUser, ${error}`);
  }
};

module.exports = DBcontroller;
