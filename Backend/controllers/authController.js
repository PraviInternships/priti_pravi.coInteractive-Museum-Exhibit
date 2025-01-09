const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

exports.login = (req, res) => {
  const { username, password, role } = req.body;
  // Validate against database (mocked for now)
  const token = jwt.sign({ username, role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
