const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  if(!token)
    return res.status(401).json({message:"Unauthorized"});

  try {

    const decoded = jwt.verify(token, "secretkey");

    req.user = decoded;

    next();

  } catch {

    res.status(401).json({message:"Invalid Token"});
  }
};
