import { expect, test } from 'vitest'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Page from '../src/app/page'
 

describe('Page', () => {
  test('renders without crashing', async () => {
    render(<Page />);
    await waitFor(() => {
      expect(document.querySelector('h2').textContent).toContain('Acceso de usuario');
    });
  });

  test('renders header with search bar', async () => {
    render(<Page />);
    await waitFor(() => {
      expect(document.querySelector('input[type="text"]')).toBeInTheDocument();
    });
  });

  test('fetches and displays destinations on initial render', async () => {
    render(<Page />);
    await waitFor(() => {
      expect(document.textContent).toContain('Fetching data for page: 1');
      // Adjust this part based on how your destinations are rendered
      expect(document.textContent).toContain('Destination Name');
    });
  });

  test('changes page when pagination button is clicked', async () => {
    render(<Page />);
    fireEvent.click(await screen.findByRole('button', { name: /2/i }));
    await waitFor(() => {
      expect(document.textContent).toContain('Changing to page: 2');
      // Assert that the destinations for page 2 are rendered
    });
  });

  test('displays search results when searching', async () => {
    render(<Page />);
    fireEvent.change(await screen.findByRole('textbox', { name: /search/i }), { target: { value: 'search term' } });
    await waitFor(() => {
      // Assert that the search results are rendered
    });
  });

  test('displays error message when search fails', async () => {
    render(<Page />);
    fireEvent.change(await screen.findByRole('textbox', { name: /search/i }), { target: { value: 'invalid search' } });
    await waitFor(() => {
      // Assert that the error message is rendered
    });
  });

  // Add more tests as needed for specific functionalities and edge cases
});
