import React from "react";
import { findByText, render } from "@testing-library/react";
import Forms from ".";

const newWorkReports = [
  {
    date: "2022-01-01",
    customerFirstName: "Max",
    customerSecondName: "Mustermann",
    customerAddress: "Musterstraße 1",
    "workerName-0": "Hans",
    "workerFrom-0": "08:00",
    "workerTo-0": "16:00",
    "workerPause-0": "1",
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
    const { container, getByText, getByLabelText } = render(<Forms newWorkReports={newWorkReports} />);
    expect(getByText("Arbeitsbericht")).toBeInTheDocument();
  
    const expandButton = getByLabelText(
      "Button to expand and collapse reports",
      { container }
    );
    expect(findByTextByText("Hans")).toBeInTheDocument();
    expect(expandButton).toBeInTheDocument();
  });
});