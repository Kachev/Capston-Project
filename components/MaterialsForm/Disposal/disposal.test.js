import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Disposal from "../Disposal/disposal";

test("renders disposal dropdowns", async () => {
  render(<Disposal />);

  const disposalDropdown = screen.getByLabelText("Entsorgung");
  expect(disposalDropdown).toBeInTheDocument();

  await userEvent.selectOptions(disposalDropdown, ["Bauschut"]);
  expect(screen.getByDisplayValue("Bauschut")).toBeInTheDocument();

  const addBtn = screen.getByText("+");
  await userEvent.click(addBtn);
  const allDisposalDropdowns = screen.getAllByLabelText("Entsorgung");
  expect(allDisposalDropdowns).toHaveLength(2);

  const secondDropdown = allDisposalDropdowns[1];
  expect(secondDropdown).toBeInTheDocument();
  await userEvent.selectOptions(secondDropdown, ["Grüngut"]);
  expect(screen.getByDisplayValue("Grüngut")).toBeInTheDocument();
});
