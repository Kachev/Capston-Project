import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Disposal from ".";

test("renders disposal dropdowns", async () => {
  render(<Disposal />);

  const disposalDropdown = screen.getByLabelText("Entsorgung");
  expect(disposalDropdown).toBeInTheDocument();

  await userEvent.selectOptions(disposalDropdown, ["Bauschut"]);
  expect(screen.getByDisplayValue("Bauschut")).toBeInTheDocument();

  const addBtn = screen.getByLabelText("Button to add a new disposal");
  await userEvent.click(addBtn);

  const secondDropdown = screen.getAllByLabelText("Entsorgung")[0];
  expect(secondDropdown).toBeInTheDocument();

  await userEvent.selectOptions(secondDropdown, ["Grüngut"]);
  expect(screen.getByDisplayValue("Grüngut")).toBeInTheDocument();
});
