import { test } from 'vitest';
import { render } from '@testing-library/react';
import DetailsCard from '../../src/app/components/ui/DetailsCard';

test("DetailsCard renders without crashing on the destination page", () => {
  const testData = {
    name: "Paris",
    location: "France",
    reason: "To eat cheese and see the Eiffel Tower",
    image: "http://localhost:8000/img/paris.jpg" 
  };

  render(<DetailsCard data={testData} />);
});

