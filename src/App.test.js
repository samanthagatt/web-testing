import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders animal form header', () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act
  const header = getByText(/add new animal/i);
  // Assert
  expect(header).toBeInTheDocument();
});

// Jest global functions
// - test
test('concise test - renders animal form header', () => {
  const {getByText} = render(<App />);
  // If it exists (resolves to true / truthy) => it'll pass the test
  getByText(/add new animal/i);
})
