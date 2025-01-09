const express = require('express');
const artifactRoutes = require('./routes/artifactRoutes');
const quizRoutes = require('./routes/quizRoutes');
const visitorRoutes = require('./routes/visitorRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/artifacts', artifactRoutes);
app.use('/quiz', quizRoutes);
app.use('/visitor-progress', visitorRoutes);

//auth
const authRoutes = require('./routes/authRoutes');
const { authenticate, authorize } = require('./auth/auth');

app.use('/auth', authRoutes);
app.get('/admin-data', authenticate, authorize(['admin']), (req, res) => res.json({ message: 'Admin data' }));
app.get('/visitor-data', authenticate, authorize(['visitor', 'admin']), (req, res) => res.json({ message: 'Visitor data' }));


app.listen(3000, () => console.log('Server running on port 3000'));
