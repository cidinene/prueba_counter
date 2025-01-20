import { render, screen, within , fireEvent} from '@testing-library/react';
import Counter from './Counter';

test('renders increment button', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/incrementar/i);
  expect(buttonElement).toBeInTheDocument();
});


test('renders init counter', () => {
    const container= render(<Counter />);    
    var counterDisplay =screen.getByRole('paragraph', {
        name: (_, element) => element.textContent === 'Contador: 0',
      })
    expect(counterDisplay).toBeInTheDocument();
    fireEvent.click(screen.getByText(/incrementar/i))
    counterDisplay =screen.getByRole('paragraph', {
        name: (_, element) => element.textContent === 'Contador: 1',
      })
    expect(counterDisplay).toBeInTheDocument();

  });