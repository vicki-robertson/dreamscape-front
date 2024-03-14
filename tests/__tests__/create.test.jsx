import { test } from 'vitest'
import { render, screen} from '@testing-library/react'
import Create from "../../src/app/components/Forms/Create";

test("The form Create should include a textbox that says, 'Escribe titulo...'", () => {
  render(<Create />);

  const formElement = screen.getByPlaceholderText("Escribe titulo...");
  expect(formElement).toBeDefined();
});

test("The form Create should include a textbox that says 'Sube una imagen...'", () => {
  render(<Create />);

  const formElement = screen.getByPlaceholderText("Sube una imagen...");
  expect(formElement).toBeDefined();
});