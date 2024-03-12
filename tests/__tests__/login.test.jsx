import { expect, test } from 'vitest'
import { render, screen} from '@testing-library/react'
import StartSession from "../../src/app/components/Forms/LoginForm";
import Button from '../../src/app/components/ui/Button';
 
test("The 'StartSession' component should include the text 'Acceso de usuario", () => {
  render(<StartSession />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Acceso de usuario" })
  ).toBeDefined();
});

test("The app renders the Button component without crashing", () => {
  render(<Button />);
});



