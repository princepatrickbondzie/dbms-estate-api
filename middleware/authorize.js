const User = require("../models/User");
const jwt = require("jsonwebtoken");

//user if user has token and verify the token
const verifyToken = (req, res, next) => {
  let dateNow = new Date()
  let token = req.headers["authorization"] || "";
  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.exp < dateNow.getTime() / 1000) {
      res.status(401).json({ message: 'Token expired' });
    }
    req.user = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

//check if the user is 'admin'
const isAdminOrSuperAdmin = (req, res, next) => {
  let token = req.headers["authorization"] || "";
  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.role === "admin" || decodedToken.role === "superAdmin") {
      next();
    } else {
      return res.status(403).json({ error: "Admin or SuperAdmin resource! Access denied!" });
    }
  }
};

//check if the user is 'superAdmin'
const isSuperAdmin = (req, res, next) => {
  let token = req.headers["authorization"] || "";
  token = token.split(" ")[1];

  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.role !== "superAdmin") {
      return res.status(403).json({ error: "Super Admin resource! Access denied!" });
    }
  }
  next();
};


module.exports = { isAdminOrSuperAdmin, verifyToken, isSuperAdmin };