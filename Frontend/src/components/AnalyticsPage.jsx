import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';  // Using Chart.js for a bar chart
import api from '../services/api';

const AnalyticsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/admin/analytics')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching analytics:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="analytics-page">
      <h3>Visitor Engagement and Quiz Performance</h3>
      <Bar data={data.chartData} options={data.chartOptions} />
    </div>
  );
};

export default AnalyticsPage;
