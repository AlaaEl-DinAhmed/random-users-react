import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  const click = jest.fn();
  it('should be rendered with Next text', () => {
    render(<Button text="Next" isDisabled={false} onClick={click} />);

    const btnElement = screen.getByText('Next');

    expect(btnElement).toBeInTheDocument();
  });

  it('should be rendered with Prev text', () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText('Prev');

    expect(btnElement).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText('Prev');

    expect(btnElement).toBeDisabled();
  });

  it('should not be disabled', () => {
    render(<Button text="Prev" isDisabled={false} onClick={click} />);

    const btnElement = screen.getByText('Prev');

    expect(btnElement).toHaveTextContent('Prev');
  });

  it('should have button--disabled class if it is disabled', () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText('Prev');

    expect(btnElement).toHaveClass('button--disabled');
  });

  it('should fire click event', () => {
    render(<Button text="Next" isDisabled={false} onClick={click} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    expect(click).toHaveBeenCalled();
  });
});
