import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Plants from ".";

test("renders plant inputs", async () => {
  render(<Plants />);
  const plantInputs = screen.getAllByLabelText("Pflanzen");
  expect(plantInputs).toHaveLength(1);

  await userEvent.type(plantInputs[0], "Tomaten");
  expect(screen.getByDisplayValue("Tomaten")).toBeInTheDocument();

  await userEvent.click(screen.getByLabelText("Button to add a new plant"));

  const allPlantInputs = screen.getAllByLabelText("Pflanzen");
  expect(allPlantInputs).toHaveLength(2);

  const secondPlantInput = allPlantInputs[1];
  expect(secondPlantInput).toBeInTheDocument();

  await userEvent.type(secondPlantInput, "Gurken");
  expect(screen.getByDisplayValue("Gurken")).toBeInTheDocument();

  const amountInputs = screen.getAllByLabelText("Menge");
  expect(amountInputs).toHaveLength(2);

  await userEvent.type(amountInputs[0], "5");
  expect(screen.getByDisplayValue("5")).toBeInTheDocument();

  await userEvent.type(amountInputs[1], "10");
  expect(screen.getByDisplayValue("10")).toBeInTheDocument();
});
