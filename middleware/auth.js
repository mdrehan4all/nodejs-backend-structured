const database = require('../database');

module.exports = async (req, res, next) => {
  // Authentication logic
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .send({ error: "Unauthorized: Missing bearer token" });
  }
  let user = await database.getUserByToken(token);
  if (user[0] === undefined) {
    return res.status(401).send({ error: "Unauthorized: Invalid token" });
  }

  next();
};