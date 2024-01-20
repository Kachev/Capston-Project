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
import Image from "next/image";
import { nunito } from "../../../styles";

const StyledTextarea = styled.textarea`
  min-height: 100px;
  margin-top: 8px;
  opacity: 0.8;
  font-family: ${nunito.style.fontFamily};
  font-size: 17px;
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
              <option value="Pflanzen gepflanzt">Apfelbaum gepflanzt</option>
              <option value="Baum im Form geschnitten">
                Baum im Form geschnitten
              </option>
              <option value="Unkraut entfernt">Unkraut entfernt</option>
              <option value="Hecken geschnitten">Hecke geschnitten</option>
              <option value="Pflanzbeet bepflanzt">Pflanzbeet bepflanzt</option>
              <option value="Rasen gemäht">Rasen gemäht</option>
              <option value="Pflanzbeet mit Lava abgedeckt">
                Pflanzbeet mit Lava abgedeckt
              </option>
              <option value="Grasnarbe entfernt">Grasnarbe entfernt</option>
              <option value="Oberboden aufgenommen">
                Oberboden aufgenommen
              </option>
              <option value="Oberboden aufgetragen">
                Oberboden aufgetragen
              </option>
              <option value="Unterbau aufgenommen">Unterbau aufgenommen</option>
              <option value="Unterbau erstellt,planiert und verdichtet">
                Unterbau erstellt und verdichtet
              </option>
              <option value="Unterbau verdichtet">Unterbau verdichtet</option>
              <option value="Splittbettung erstellt und planiert">
                Splittbettung erstellt
              </option>
              <option value="Plattenbelag verlegt">Plattenbelag verlegt</option>
              <option value="Pflastersteine verlegt">
                Pflastersteine verlegt
              </option>
              <option value="Belagsfläche verfugt">Belagsfläche verfugt</option>
              <option value="Pflasterfläche verfugt">
                Pflasterfläche verfugt
              </option>
              <option value="Leistensteine auf Betonbettung verlegt">
                Leistensteine auf Betonbettung verlegt
              </option>
            </StyledSelect>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a Description."
                onClick={() => handleDeleteDescription(index)}
              >
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Remove icon"
                />
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
          <Image src="/add.png" width={24} height={24} alt="Add icon" />
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
