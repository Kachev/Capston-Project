import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Machines from ".";

test("renders machines dropdown", async () => {
  render(<Machines />);
  const dropdowns = screen.getAllByLabelText("Maschinen");
  expect(dropdowns).toHaveLength(1);

  await userEvent.selectOptions(dropdowns[0], ["Laubbläser"]);
  expect(screen.getByDisplayValue("Laubbläser")).toBeInTheDocument();

  await userEvent.click(screen.getByText("+"));

  const allDropdowns = screen.getAllByLabelText("Maschinen");
  expect(allDropdowns).toHaveLength(2);

  const secondDropdown = screen.getAllByLabelText("Maschinen", {
    selector: "select:last-of-type",
  });
  expect(secondDropdown[0]).toBeInTheDocument();

  await userEvent.selectOptions(secondDropdown[0], ["Kompaktbagger"]);
  expect(screen.getByDisplayValue("Kompaktbagger")).toBeInTheDocument();
});
