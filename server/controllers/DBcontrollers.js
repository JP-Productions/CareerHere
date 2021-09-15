const db = require('../models/models');

const DBcontroller = {};

DBcontroller.verifyUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, token } = req.body;
    // check if user in database
    // if so send them on their way
    // insert them into the database
    const params = [email];
    const verifyString = `SELECT * FROM users WHERE email = $1`;
    const verifyResult = await db.query(verifyString, params);
    if (verifyResult.rows.length) {
      /// if result.rows has length 1 we will set cookie in order to allow user access
      res.locals.id = verifyResult.rows[0].id;
    } else {
      const insertParams = [firstName, lastName, email, token];
      const insertString = `INSERT INTO users (first_name, last_name, email, user_name, password) VALUES ($1, $2, $3, $3, $4) RETURNING * `;
      const insertResult = await db.query(insertString, insertParams);
      console.log(insertResult);
      res.locals.id = insertResult.rows[0].id;
    }
    return next();
  } catch (error) {
    console.log(`err in verifyUser, ${error}`);
  }
};

DBcontroller.getAllUserApps = async (req, res, next) => {
  try {  
    const userId = req.body.user_id;
    const params =[userId];
    const getAppsString = 'SELECT * FROM applications WHERE user_id=$1'
    const apps = await db.query(getAppsString, params);
    res.locals.apps = apps.rows;
    return next();
  } catch (error) {
    console.log(`err in getAllUserApps, ${error}`)
  }
};

DBcontroller.postUserApps = async (req, res, next) => {
  try {
    const { user_id, title, stage, offer_date, offer_salary, offer_deadline, last_contact, culture_notes, location, pros, cons, misc } = req.body;
    const insertApps = 'INSERT INTO applications (user_id, title, stage, offer_date, offer_salary, offer_deadline, last_contact, culture_notes, location, pros, cons, misc)  VALUES($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
    const params = [user_id, title, stage, offer_date, offer_salary, offer_deadline, last_contact, culture_notes, location, pros, cons, misc];
    await db.query(insertApps, params);
    //res.locals.apps = apps.rows;
    return next();
  } catch(error){
    console.log(`err in postUserApps, ${error}`)
  }
};

DBcontroller.updateUserApps = async (req, res, next) => {
  try {
    const id = req.body.id;
    const { user_id, title, stage, offer_date, offer_salary, offer_deadline, last_contact, culture_notes, location, pros, cons, misc } = req.body;
    const params = [id, user_id, title, stage, offer_date, offer_salary, offer_deadline, last_contact, culture_notes, location, pros, cons, misc]
    const updateUser = `UPDATE applications SET user_id=$2, title=$3, stage=$4, offer_date=$5, offer_salary=$6, offer_deadline=$7, last_contact=$8, culture_notes=$9, location=$10, pros=$11, cons=$12, misc=$13 WHERE id=$1`
    await db.query(updateUser, params)
    return next();
  } catch (error){
    console.log(`err in updateUserApps, ${error}`)
  }
};

DBcontroller.deleteUserApps = async (req, res, next) => {
  try {
    const id = req.body.id;
    const deleteUser = 'DELETE FROM applications WHERE id=$1' // targeted application, id
    await db.query(deleteUser, [id])
    return next();
  } catch (error) {
    console.log(`err in deletEUserApps, ${error}`)
  }
}



module.exports = DBcontroller;
