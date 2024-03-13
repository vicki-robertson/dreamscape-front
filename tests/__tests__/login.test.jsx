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


test('LoginForm component should have correct buttons', () => {
  const component = LoginForm();

  // Assuming your Button component renders buttons with text content
  const acceptButton = component.querySelector('button:contains("Aceptar")');
  const cancelButton = component.querySelector('button:contains("Cancelar")');

  // Assert that the "Aceptar" button is present
  assert(acceptButton, 'Aceptar button should be present');

  // Assert that the "Cancelar" button is present
  assert(cancelButton, 'Cancelar button should be present');

  // Assert that the "Aceptar" button has the correct Tailwind CSS class
  assert(
    acceptButton.classList.contains('bg-green'), // Adjust based on actual class names
    'Aceptar button should have bg-green class'
  );

  // Assert that the "Cancelar" button has the correct Tailwind CSS class
  assert(
    cancelButton.classList.contains('bg-red'), // Adjust based on actual class names
    'Cancelar button should have bg-red class'
  );
});



