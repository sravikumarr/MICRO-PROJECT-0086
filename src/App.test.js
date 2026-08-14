import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders form elements and labels', () => {
  render(<App />);
  expect(screen.getByText(/CARDHOLDER NAME/i)).toBeInTheDocument();
  expect(screen.getByText(/CARD NUMBER/i)).toBeInTheDocument();
  expect(screen.getByText(/EXP\. DATE \(MM\/YY\)/i)).toBeInTheDocument();
  expect(screen.getByText(/CVC/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
});

test('shows error messages when submitting empty form', () => {
  render(<App />);
  const confirmButton = screen.getByRole('button', { name: /confirm/i });
  fireEvent.click(confirmButton);

  const errorMessages = screen.getAllByText(/can't be blank/i);
  expect(errorMessages.length).toBeGreaterThan(0);
});
