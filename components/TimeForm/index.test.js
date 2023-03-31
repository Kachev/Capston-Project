import React from "react";
import { render, screen } from "@testing-library/react";
import TimeForm from ".";

test("should render correct labels", () => {
  render(<TimeForm />);
  expect(screen.getByText("Datum:")).toBeInTheDocument();
  expect(screen.getByText("Mitarbeiter")).toBeInTheDocument();
  expect(screen.getByText("Von")).toBeInTheDocument();
  expect(screen.getByText("Bis")).toBeInTheDocument();
  expect(screen.getByText("Pause")).toBeInTheDocument();
});
