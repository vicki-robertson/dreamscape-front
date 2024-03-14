import { expect, test } from 'vitest'
import { render, screen} from '@testing-library/react'
import RegisterForm from "../../src/app/components/Forms/RegisterForm";

 
test("The 'RegisterForm' component should include the text, 'Registro de usuario", () => {
  render(<RegisterForm />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Registro de usuario" })
  ).toBeDefined();
});

test("The registration form should include a textbox that says, 'Escribe tu email...'", () => {
  render(<RegisterForm />);

  const formElement = screen.getByPlaceholderText("Escribe tu email...");
  expect(formElement).toBeDefined();
});


test("The register page renders the register form without crashing", () => {
  const { container } = render(<RegisterForm />);
  expect(container.querySelector('form')).not.toBeNull();
});

