// SearchBar.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';  // Adjust the import path based on your file structure

describe('SearchBar Component', () => {
  it('should render the search input field correctly', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/Search for artifacts.../);  // Adjust placeholder as needed
    expect(inputElement).toBeInTheDocument();
  });

  it('should update the value when the user types in the input field', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/Search for artifacts.../);
    fireEvent.change(inputElement, { target: { value: 'Ancient Vase' } });
    expect(inputElement.value).toBe('Ancient Vase');
  });

  it('should call the onSearch function when the search button is clicked', () => {
    const mockSearch = jest.fn();
    render(<SearchBar onSearch={mockSearch} />);
    
    const inputElement = screen.getByPlaceholderText(/Search for artifacts.../);
    const buttonElement = screen.getByRole('button', { name: /Search/ });
    
    fireEvent.change(inputElement, { target: { value: 'Ancient Vase' } });
    fireEvent.click(buttonElement);
    
    expect(mockSearch).toHaveBeenCalledWith('Ancient Vase');
  });
});
