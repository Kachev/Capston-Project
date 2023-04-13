import { useState } from "react";
import styled from "styled-components";
import { StyledFormFieldset } from "../../Customer/CustomerForm";
import { Label, StyledSelect } from "../../MaterialsForm";
import { StyledContainer } from "../../MaterialsForm/Machines";
import { StyledAddButton } from "../../MaterialsForm/Plants";
const StyledTextarea = styled.textarea`
  min-height: 100px;
`;
const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeadlineFour = styled.h4`
  padding: 0;
  margin: 0;
`;
export default function JobDescriptionForm() {
  const [newDescriptions, setNewDescription] = useState([
    { id: 1, description: "" },
  ]);
  const [textAreaValue, setTextAreaValue] = useState("");

  function handleAddNewDescription() {
    const nextId = newDescriptions.length + 1;
    const newDescription = { id: nextId, description: "" };
    setNewDescription([...newDescriptions, newDescription]);
  }

  function handleDescriptionChange({ event, index }) {
    const { value } = event.target;
    const list = [...newDescriptions];
    list[index] = { ...list[index], description: value };
    setNewDescription(list);
  }

  function handleTextAreaChange(event) {
    setTextAreaValue(event.target.value);
  }

  return (
    <StyledFormFieldset>
      {newDescriptions.map((dropDown, index) => (
        <StyledSelectContainer
          key={`${index}-${newDescriptions[index].description}`}
        >
          {index === 0 && (
            <Label
              htmlFor={`description-${index}`}
              aria-label="Work description"
            >
              Beschreibung
            </Label>
          )}
          <StyledSelect
            id={`description-${index}`}
            name={`description-${index}`}
            value={newDescriptions[index].description}
            onChange={(event) => handleDescriptionChange({ event, index })}
          >
            <option value="">Bitte auswählen</option>
            <option value="Apfelbaum gepflanzt">Apfelbaum gepflanzt</option>
            <option value="Unkraut entfernt">Unkraut entfernt</option>
            <option value="Hecke geschnitten">Hecke geschnitten</option>
            <option value="Pflanzbeet bepflanzt">Pflanzbeet bepflanzt</option>
          </StyledSelect>
        </StyledSelectContainer>
      ))}
      <StyledContainer>
        <StyledAddButton
          type="button"
          aria-label="Button to add a new description"
          onClick={handleAddNewDescription}
        >
          +
        </StyledAddButton>
      </StyledContainer>
      <StyledContainer>
        <Label htmlFor="description-textarea" aria-label="More information">
          Zusätzliche Informationen
        </Label>
        <StyledTextarea
          id="description-textarea"
          name="description-textarea"
          value={textAreaValue}
          onChange={handleTextAreaChange}
        />
      </StyledContainer>
    </StyledFormFieldset>
  );
}
