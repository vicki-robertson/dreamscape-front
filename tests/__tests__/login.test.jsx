import { expect, test } from 'vitest'
import { render, screen} from '@testing-library/react'
import LoginForm from "../../src/app/components/Forms/LoginForm";
import Button from '../../src/app/components/ui/Button';
 
test("The 'LoginForm' component should include the text, 'Acceso de usuario", () => {
  render(<LoginForm />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Acceso de usuario" })
  ).toBeDefined();
});

test("The login form renders the Button component without crashing", () => {
  render(<Button />);
});

test("The login page renders the login form without crashing", () => {
  const { container } = render(<LoginForm />);
  expect(container.querySelector('form')).not.toBeNull();
});







