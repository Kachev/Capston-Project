import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Forms from ".";

const newWorkReports = [
  {
    date: "2022-01-01",
    customerFirstName: "Andreas",
    customerSecondName: "Bergstein",
    customerAddress: "Hamburg",
    "workerName-0": "Fritz",
    "workerFrom-0": "08:00",
    "workerTo-0": "16:00",
    "workerPause-0": "00:30",
    "materials-0": "Holz",
    "materials-0-amount": "5",
    "materials-0-m3": true,
    "materials-1": "Metall",
    "materials-1-amount": "10",
    "materials-1-t": true,
  },
];

describe("Forms", () => {
  test("should render the component without crashing", () => {
    const { container } = render(<Forms newWorkReports={newWorkReports} />);

    // Verwende container.textContent, um den gesamten Text zu überprüfen
    expect(container.textContent).toContain("Fritz");

    const expandButton = screen.getByLabelText(
      "Button to expand and collapse reports",
      { container }
    );
    expect(expandButton).toBeInTheDocument();
  });
});
