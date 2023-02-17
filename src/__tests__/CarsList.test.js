import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { CarsList } from "../pages/CarsList";

test("should render a list of cars", () => {
  render(<CarsList />);
  expect(screen.getByTestId('cars-container')).toBeInTheDocument();
  expect(screen.getByTestId('cars-list')).toBeInTheDocument();
});
