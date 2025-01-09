import React, { useState, useEffect } from 'react';
import api from '../services/api';  // Assuming an API service is set up

const VisitorProgress = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // Fetch visitor progress from the API
    api.get('/visitor-progress')
      .then(response => setProgress(response.data))
      .catch(error => console.error('Error fetching progress:', error));
  }, []);

  if (!progress) return <div>Loading...</div>;

  return (
    <div className="visitor-progress">
      <h3>Your Progress</h3>
      {/* Display progress data */}
      <p>Completed Exhibits: {progress.completedExhibits}</p>
      <p>Quiz Attempts: {progress.quizAttempts}</p>
    </div>
  );
};

export default VisitorProgress;
