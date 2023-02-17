import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { CardStandard } from "../components/Card/CardStandard";
import { CardMini } from "../components/Card/CardMini";
import { CardHorizontal } from "../components/Card/CardHorizontal";

test("Component should have a button", () => {
  render(<CardStandard />);
  expect(screen.getByTestId('btn-primary').tagName).toBe('BUTTON');
  expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
});

test("Component should have a button", () => {
  render(<CardMini />);
  expect(screen.getByText('Simular parcelas')).toBeInTheDocument();
  expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
});

test("Component should have a button", () => {
  render(<CardHorizontal />);
  expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
});
