import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Materials from ".";

test("renders materials dropdown", async () => {
  render(<Materials />);
  const dropdowns = screen.getAllByLabelText("Materialien");
  expect(dropdowns).toHaveLength(1);

  await userEvent.selectOptions(dropdowns[0], ["Lava"]);
  expect(screen.getByDisplayValue("Lava")).toBeInTheDocument();

  await userEvent.click(screen.getByLabelText("Button to add a new material"));

  const secondDropdown = screen.getAllByLabelText("Materialien")[0];
  expect(secondDropdown).toBeInTheDocument();

  await userEvent.selectOptions(secondDropdown, ["Erde"]);
  expect(screen.getByDisplayValue("Erde")).toBeInTheDocument();
});
