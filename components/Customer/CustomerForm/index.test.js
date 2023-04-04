import { render, screen } from "@testing-library/react";
import CustomerForm from ".";

describe("CustomerForm", () => {
  test("should render a form with required fields and their associated labels", () => {
    render(<CustomerForm />);

    const firstNameInput = screen.getByLabelText("Customer first name");
    expect(firstNameInput).toBeInTheDocument();
    expect(screen.getByText("Name")).toHaveAttribute("for", firstNameInput.id);

    const secondNameInput = screen.getByLabelText("Customer second name");
    expect(secondNameInput).toBeInTheDocument();
    expect(screen.getByText("Familienname")).toHaveAttribute(
      "for",
      secondNameInput.id
    );

    const addressInput = screen.getByLabelText("Customer address");
    expect(addressInput).toBeInTheDocument();
    expect(screen.getByText("Adresse")).toHaveAttribute("for", addressInput.id);

    expect(firstNameInput).toBeRequired();
    expect(secondNameInput).toBeRequired();
    expect(addressInput).toBeRequired();
  });
});
