import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Forms from ".";

const newWorkReports = [
  {
    date: "2022-01-01",
    customerFirstName: "Max",
    customerSecondName: "Mustermann",
    customerAddress: "Musterstraße 1",
    workerName: "Hans Müller",
    from: "08:00",
    to: "16:00",
    pause: "1",
    "materials-1": "Holz",
    "materials-1-amount": "5",
    "materials-1-m3": true,
    "materials-2": "Metall",
    "materials-2-amount": "10",
    "materials-2-t": true,
  },
];

describe("Forms", () => {
  test("should render the component without crashing", () => {
    const { getByText } = render(<Forms newWorkReports={newWorkReports} />);
    expect(getByText("Arbeitsbericht")).toBeInTheDocument();
  });

  test("should expand and collapse the work report on button click", async () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Forms newWorkReports={newWorkReports} />
    );
    const expandButton = getByLabelText(
      "Button to expand and collapse reports"
    );
    expect(getByText("Hans Müller")).toBeInTheDocument();
    expect(expandButton).toBeInTheDocument();
  });
});
