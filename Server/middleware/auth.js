import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("No token provided!");

  jwt.verify(token, "jwtkey", (err, user) => {
    if (err) return res.status(401).json("Invalid token!");

    req.user = user; // Assuming the token contains user id and username
    next();
  });
};
