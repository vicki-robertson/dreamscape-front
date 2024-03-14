import { test} from 'vitest';
import { render } from '@testing-library/react';
import SearchBar from '../../src/app/components/ui/SearchBar'; 
import PaginationButtons from '../../src/app/components/ui/PaginationButtons';


test("The home page renders the SearchBar component without crashing", () => {
  const mockOnSearch = () => {}; 
  render(<SearchBar onSearch={mockOnSearch} />); 
});

test("The home page renders the PaginationButtons component without crashing", () => {
  render(<PaginationButtons />);
});


