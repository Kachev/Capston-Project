import { useState } from "react";
import styled from "styled-components";
import { StyledFormFieldset } from "../../Customer/CustomerForm";
import { Label, StyledSelect } from "../../MaterialsForm";
import { StyledContainer } from "../../MaterialsForm/Machines";
import {
  StyledAddButton,
  StyledDeleteButton,
} from "../../MaterialsForm/Plants";
import { useEffect } from "react";

const StyledTextarea = styled.textarea`
  min-height: 100px;
`;
const StyledSelectContainer = styled.div`
/*   display: flex;
  justify-content: space-between; */
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export default function JobDescriptionForm() {
  const [newDescriptions, setNewDescription] = useState([
    { id: 1, description: "" },
  ]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    if (newDescriptions.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newDescriptions]);

  function handleDeleteDescription(index) {
    const list = [...newDescriptions];
    if (list.length > 1) {
      list.splice(index, 1);
    }
    setNewDescription(list);
  }

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
              htmlFor={`descriptions-${index}`}
              aria-label="Work description"
            >
              Beschreibung
            </Label>
          )}
          <StyledDiv>
            <StyledSelect
              id={`descriptions-${index}`}
              name={`descriptions-${index}`}
              value={newDescriptions[index].description}
              required
              onChange={(event) => handleDescriptionChange({ event, index })}
            >
              <option value="">Bitte auswählen</option>
              <option value="Apfelbaum gepflanzt">Apfelbaum gepflanzt</option>
              <option value="Unkraut entfernt">Unkraut entfernt</option>
              <option value="Hecke geschnitten">Hecke geschnitten</option>
              <option value="Pflanzbeet bepflanzt">Pflanzbeet bepflanzt</option>
            </StyledSelect>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a Description."
                onClick={() => handleDeleteDescription(index)}
              >
                X
              </StyledDeleteButton>
            )}
          </StyledDiv>
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
        <Label htmlFor="textarea-description" aria-label="More information">
          Zusätzliche Informationen
        </Label>
        <StyledTextarea
          id="textarea-description"
          name="textarea-description"
          defaultValue={textAreaValue}
          onChange={handleTextAreaChange}
        />
      </StyledContainer>
    </StyledFormFieldset>
  );
}
