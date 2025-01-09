const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

exports.authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
  next();
};
