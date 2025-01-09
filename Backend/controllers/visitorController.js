exports.getVisitorProgress = (req, res) => {
    res.json({ message: 'Visitor progress retrieved' });
  };
  
  exports.trackVisitor = (req, res) => {
    const visitorData = req.body;
    res.status(201).json({ message: 'Visitor data tracked successfully', visitorData });
  };
  