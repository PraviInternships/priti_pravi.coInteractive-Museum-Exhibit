exports.getArtifacts = (req, res) => {
    res.json({ message: 'Retrieve all artifacts' });
  };
  
  exports.addArtifact = (req, res) => {
    const artifact = req.body;
    res.status(201).json({ message: 'Artifact added successfully', artifact });
  };
  