import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Credit Card Generator App', () => {
  test('renders form elements and credit card preview', () => {
    render(<App />);
    expect(screen.getByText(/CARDHOLDER NAME/i)).toBeInTheDocument();
    expect(screen.getByText(/CARD NUMBER/i)).toBeInTheDocument();
    expect(screen.getByText(/EXP\. DATE \(MM\/YY\)/i)).toBeInTheDocument();
    expect(screen.getByText(/CVC/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();

    // Default card preview values
    expect(screen.getByText('0000 0000 0000 0000')).toBeInTheDocument();
    expect(screen.getByText('JANE APPLESEED')).toBeInTheDocument();
    expect(screen.getByText('00/00')).toBeInTheDocument();
    expect(screen.getByText('000')).toBeInTheDocument();
  });

  test('updates credit card preview on live user input', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('e.g. Jane Appleseed');
    const numberInput = screen.getByPlaceholderText('e.g. 1234 5678 9123 0000');
    const monthInput = screen.getByPlaceholderText('MM');
    const yearInput = screen.getByPlaceholderText('YY');
    const cvcInput = screen.getByPlaceholderText('e.g. 123');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(numberInput, { target: { value: '1234567890123456' } });
    fireEvent.change(monthInput, { target: { value: '09' } });
    fireEvent.change(yearInput, { target: { value: '28' } });
    fireEvent.change(cvcInput, { target: { value: '789' } });

    expect(screen.getByText('JOHN DOE')).toBeInTheDocument();
    expect(screen.getByText('1234 5678 9012 3456')).toBeInTheDocument();
    expect(screen.getByText('09/28')).toBeInTheDocument();
    expect(screen.getByText('789')).toBeInTheDocument();
  });

  test('shows validation errors when submitting invalid / empty data', () => {
    render(<App />);
    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    const errorMessages = screen.getAllByText(/can't be blank/i);
    expect(errorMessages.length).toBeGreaterThanOrEqual(4);
  });

  test('validates incorrect input lengths and ranges', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('e.g. Jane Appleseed');
    const numberInput = screen.getByPlaceholderText('e.g. 1234 5678 9123 0000');
    const monthInput = screen.getByPlaceholderText('MM');
    const yearInput = screen.getByPlaceholderText('YY');
    const cvcInput = screen.getByPlaceholderText('e.g. 123');
    const confirmButton = screen.getByRole('button', { name: /confirm/i });

    fireEvent.change(nameInput, { target: { value: 'Jane' } });
    fireEvent.change(numberInput, { target: { value: '12345678' } });
    fireEvent.change(monthInput, { target: { value: '15' } });
    fireEvent.change(yearInput, { target: { value: '5' } });
    fireEvent.change(cvcInput, { target: { value: '12' } });

    fireEvent.click(confirmButton);

    expect(screen.getByText('Must be 16 digits')).toBeInTheDocument();
    expect(screen.getByText('Must be 01-12')).toBeInTheDocument();
    expect(screen.getByText('Must be 3 digits')).toBeInTheDocument();
  });

  test('submits successfully with valid data, shows toast & success state, and resets on Continue', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText('e.g. Jane Appleseed');
    const numberInput = screen.getByPlaceholderText('e.g. 1234 5678 9123 0000');
    const monthInput = screen.getByPlaceholderText('MM');
    const yearInput = screen.getByPlaceholderText('YY');
    const cvcInput = screen.getByPlaceholderText('e.g. 123');
    const confirmButton = screen.getByRole('button', { name: /confirm/i });

    fireEvent.change(nameInput, { target: { value: 'Felicia Leire' } });
    fireEvent.change(numberInput, { target: { value: '9591648963891010' } });
    fireEvent.change(monthInput, { target: { value: '09' } });
    fireEvent.change(yearInput, { target: { value: '26' } });
    fireEvent.change(cvcInput, { target: { value: '123' } });

    fireEvent.click(confirmButton);

    // Verify Success State
    expect(screen.getByText('THANK YOU!')).toBeInTheDocument();
    expect(screen.getByText("We've added your card details")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();

    // Verify Toast
    expect(screen.getByText(/card details submitted successfully!/i)).toBeInTheDocument();

    // Click Continue
    const continueBtn = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueBtn);

    // Verify reset to initial form state
    expect(screen.getByText(/CARDHOLDER NAME/i)).toBeInTheDocument();
    expect(screen.getByText('0000 0000 0000 0000')).toBeInTheDocument();
  });
});
