import { expect, test } from 'vitest'
import { render, screen} from '@testing-library/react'
import LoginForm from "../../src/app/components/Forms/LoginForm";
import Button from '../../src/app/components/ui/Button';
 
test("The 'LoginForm' component should include the text 'Acceso de usuario", () => {
  render(<LoginForm />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Acceso de usuario" })
  ).toBeDefined();
});

test("The page renders the Button component without crashing", () => {
  render(<Button />);
});


'
  );
});



