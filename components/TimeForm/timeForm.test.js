import React from "react";
import { render, screen } from "@testing-library/react";
import TimeForm from "../TimeForm/timeForm";

describe("TimeForm", () => {
  test("should render a form with required fields and their associated labels", () => {
    render(<TimeForm />);

    const dateInput = screen.getByLabelText("Datum:");
    expect(dateInput).toBeInTheDocument();
    expect(screen.getByText("Datum:")).toHaveAttribute("for", dateInput.id);

    const workerNameInput = screen.getByLabelText("Mitarbeiter");
    expect(workerNameInput).toBeInTheDocument();
    expect(screen.getByText("Mitarbeiter")).toHaveAttribute(
      "for",
      workerNameInput.id
    );

    const workerFromInput = screen.getByLabelText("Von");
    expect(workerFromInput).toBeInTheDocument();
    expect(screen.getByText("Von")).toHaveAttribute("for", workerFromInput.id);

    const workerToInput = screen.getByLabelText("Bis");
    expect(workerToInput).toBeInTheDocument();
    expect(screen.getByText("Bis")).toHaveAttribute("for", workerToInput.id);

    const workerPauseInput = screen.getByLabelText("Pause");
    expect(workerPauseInput).toBeInTheDocument();
    expect(screen.getByText("Pause")).toHaveAttribute(
      "for",
      workerPauseInput.id
    );

    expect(dateInput).toBeRequired();
    expect(workerNameInput).toBeRequired();
    expect(workerFromInput).toBeRequired();
    expect(workerToInput).toBeRequired();
    expect(workerPauseInput).toBeRequired();
  });
});
