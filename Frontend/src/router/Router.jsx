import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArtifactPage from '../components/ArtifactPage';
import QuizPage from '../components/QuizPage';
import ArtifactForm from '../components/admin/ArtifactForm';
import QuizManager from '../components/admin/QuizManager';
import VisitorAnalytics from '../components/admin/VisitorAnalytics';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ArtifactPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/admin/artifacts" element={<ArtifactForm />} />
      <Route path="/admin/quizzes" element={<QuizManager />} />
      <Route path="/admin/analytics" element={<VisitorAnalytics />} />
    </Routes>
  );
};

export default Router;
