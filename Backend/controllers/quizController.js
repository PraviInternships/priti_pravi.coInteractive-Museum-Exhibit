exports.getQuiz = (req, res) => {
    const { artifactId } = req.params;
    res.json({ message: `Quiz for artifact ID ${artifactId}` });
  };
  
  exports.submitQuiz = (req, res) => {
    const quizData = req.body;
    res.status(200).json({ message: 'Quiz submitted successfully', quizData });
  };
  