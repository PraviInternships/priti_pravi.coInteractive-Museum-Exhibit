// AnalyticsPage.test.jsx
import { render, screen } from '@testing-library/react';
import AnalyticsPage from '../components/analytics/AnalyticsPage';  // Adjust the import path based on your file structure

describe('AnalyticsPage Component', () => {
  it('should render the Analytics page header', () => {
    render(<AnalyticsPage />);
    const headerElement = screen.getByText(/Analytics/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should display visitor engagement data correctly', () => {
    render(<AnalyticsPage />);
    const engagementDataElement = screen.getByText(/Visitor Engagement/i);  // Adjust the text/content based on actual data
    expect(engagementDataElement).toBeInTheDocument();
  });

  it('should render the charts correctly', () => {
    render(<AnalyticsPage />);
    const chartElement = screen.getByRole('img', { name: /engagement chart/i });  // Assuming the chart is rendered as an image
    expect(chartElement).toBeInTheDocument();
  });

  it('should handle no data state gracefully', () => {
    render(<AnalyticsPage data={[]} />);  // Simulating no data
    const noDataMessage = screen.getByText(/No data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });
});
