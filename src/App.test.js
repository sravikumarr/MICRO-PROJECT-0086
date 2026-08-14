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

test('renders credit card with default placeholder values', () => {
  render(<App />);
  expect(screen.getByText('0000 0000 0000 0000')).toBeInTheDocument();
  expect(screen.getByText('JANE APPLESEED')).toBeInTheDocument();
  expect(screen.getByText('00/00')).toBeInTheDocument();
  expect(screen.getByText('000')).toBeInTheDocument();
});

test('updates credit card preview on live input', () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/e\.g\. Jane Appleseed/i);
  fireEvent.change(nameInput, { target: { value: 'Alex Smith' } });

  expect(screen.getByText('ALEX SMITH')).toBeInTheDocument();
});
