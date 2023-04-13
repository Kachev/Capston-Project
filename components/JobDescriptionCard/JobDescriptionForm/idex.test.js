import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import JobDescriptionForm from "../JobDescriptionForm/index";

test("renders job description inputs", async () => {
  render(<JobDescriptionForm />);
  const descriptionInputs = screen.getAllByLabelText("");
  expect(descriptionInputs).toHaveLength(1);

  await userEvent.selectOptions(descriptionInputs[0], ["Apfelbaum gepflanzt"]);
  expect(screen.getByDisplayValue("Apfelbaum gepflanzt")).toBeInTheDocument();

  await userEvent.click(screen.getByText("+"));

  const allDescriptionInputs = screen.getAllByLabelText("");
  expect(allDescriptionInputs).toHaveLength(2);

  const secondDescriptionInput = allDescriptionInputs[1];
  expect(secondDescriptionInput).toBeInTheDocument();

  await userEvent.selectOptions(secondDescriptionInput, ["Unkraut entfernt"]);
  expect(screen.getByDisplayValue("Unkraut entfernt")).toBeInTheDocument();

  const textArea = screen.getByLabelText("Zusätzliche Informationen");
  await userEvent.type(textArea, "Lorem ipsum");
  expect(screen.getByDisplayValue("Lorem ipsum")).toBeInTheDocument();
});
