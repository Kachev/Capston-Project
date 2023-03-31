import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerForm from ".";

test("should render correct labels", () => {
  render(<CustomerForm />);
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Familienname")).toBeInTheDocument();
  expect(screen.getByText("Adresse")).toBeInTheDocument();
});
