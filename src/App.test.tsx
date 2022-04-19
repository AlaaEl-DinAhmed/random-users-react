import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

describe('App Component', () => {
  test('should show loading indicator', () => {
    render(<App />);

    const btn = screen.getByText('Loading...');

    expect(btn).toBeInTheDocument();
  });

  test('should render list of users', async () => {
    render(<App />);

    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(10);
  });

  test('should get new users list', async () => {
    render(<App />);

    await userEvent.click(await screen.findByText('Next'));

    expect(await screen.findAllByRole('listitem')).toHaveLength(10);
  });

  test('should render a disabled button', async () => {
    render(<App />);

    expect(await screen.findByRole('button', { name: 'Prev' })).toBeDisabled();
  });

  test('should render an enabled button', async () => {
    render(<App />);

    await userEvent.click(await screen.findByRole('button', { name: 'Next' }));

    await waitFor(async () => {
      expect(await screen.findByRole('button', { name: 'Prev' })).toBeEnabled();
    });
  });
});
