import { getByRole, render, screen } from "@testing-library/react";
import React from "react";
import Forms from ".";

describe("Forms", () => {
  test("should render a work report correctly", () => {
    const workReport = {
      date: "2022-04-01",
      worker_first_name: "Max",
      from: "09:00",
      to: "17:00",
      pause: "01:00",
      customer_first_name: "Hans",
      customer_second_name: "Muster",
      customer_address: "Musterstraße 123",
    };
    const { getByText } = render(<Forms newWorkReports={[workReport]} />);
    expect(getByRole(`Datum: ${workReport.date}`)).toBeInTheDocument();
    expect(getByText("Mitarbeiter:")).toBeInTheDocument();
    expect(getByText(`Name: ${workReport.worker_first_name}`)).toBeInTheDocument();
    expect(getByText("Zeiten:")).toBeInTheDocument();
    expect(getByText(`Von: ${workReport.from}`)).toBeInTheDocument();
    expect(getByText(`Bis: ${workReport.to}`)).toBeInTheDocument();
    expect(getByText(`Pause: ${workReport.pause}`)).toBeInTheDocument();
    expect(getByText("Kunde:")).toBeInTheDocument();
    expect(getByText(`Name: ${workReport.customer_first_name}`)).toBeInTheDocument();
    expect(getByText(`Familienname: ${workReport.customer_second_name}`)).toBeInTheDocument();
    expect(getByText(`Adresse: ${workReport.customer_address}`)).toBeInTheDocument();
  });
});




      

 /*    test('should display correct data in form', () => {
        const workReports = {
            date: "2022-04-01",
            worker_first_name: "Max",
            from: "09:00",
            to: "17:00",
            pause: "01:00",
            customer_first_name: "Hans",
            customer_second_name: "Muster",
            customer_address: "Musterstraße 123",
          };

        render(<Forms newWorkReports={workReports} />);
        expect(screen.getByRole('heading', { name: /Datum:/ })).toHaveTextContent('2022-04-01');
        expect(screen.getByText('Max')).toBeInTheDocument();
        expect(screen.getByText('08:00')).toBeInTheDocument();
        expect(screen.getByText('16:00')).toBeInTheDocument();
      }); */