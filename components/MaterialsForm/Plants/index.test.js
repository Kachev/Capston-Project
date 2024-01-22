import { render, screen, waitFor } from "@testing-library/react";
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

  const firstPlantInput = allPlantInputs[0];
  expect(firstPlantInput).toBeInTheDocument();

  const secondPlantInput = screen.getByLabelText("Pflanzen", {
    selector: "input:nth-child(2)",
  });
  expect(secondPlantInput).toBeInTheDocument();

  await userEvent.type(secondPlantInput, "Apfelbaum");

  await waitFor(() => {
    const amountInputs = screen.queryAllByPlaceholderText("Menge");
    expect(amountInputs).toHaveLength(2);

    amountInputs.forEach((amountInput, index) => {
      expect(amountInput).toBeInTheDocument();
    });
  });
});
