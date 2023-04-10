import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Materials from "../Materials/materials";

test("renders materials dropdown", async () => {
  render(<Materials />);
  const dropdowns = screen.getAllByLabelText("Materialien");
  expect(dropdowns).toHaveLength(1);

  await userEvent.selectOptions(dropdowns[0], ["Lava"]);
  expect(screen.getByDisplayValue("Lava")).toBeInTheDocument();

  await userEvent.click(screen.getByText("+"));

  const allDropdowns = screen.getAllByLabelText("Materialien");
  expect(allDropdowns).toHaveLength(2);

  const secondDropdown = allDropdowns[1];
  expect(secondDropdown).toBeInTheDocument();

  await userEvent.selectOptions(secondDropdown, ["Erde"]);
  expect(screen.getByDisplayValue("Erde")).toBeInTheDocument();
});
