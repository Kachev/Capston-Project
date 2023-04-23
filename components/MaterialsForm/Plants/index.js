import styled from "styled-components";
import { useState, useEffect } from "react";
import { Label, Input } from "../../Customer/CustomerForm";
import { StyledContainer, StyledButtonContainer } from "../Machines";

export const StyledAddButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  align-self: center;
  margin-top: 10px;
  margin-bottom: 8px;
`;
export const StyledDeleteButton = styled.button`
  width: 35px;
  height: 25px;
  background-color: #d11a2a;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  align-self: center;
  margin-top: 9px;
`;
export default function Plants() {
  const [newPlant, setNewPlant] = useState([{ id: 1, plant: "" }]);
  const [hideButton, setHideButton] = useState(false);

  function handleAddPlant() {
    setNewPlant([
      ...newPlant,
      { id: newPlant.length + 1, plant: "", amount: "" },
    ]);
  }
  useEffect(() => {
    if (newPlant.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newPlant]);
  function handleDeletePlant(index) {
    const list = [...newPlant];
    if (list.length > 1) {
      list.splice(index, 1);
    }
    setNewPlant(list);
  }
  function handlePlantChange(event, index) {
    const { value } = event.target;
    const list = [...newPlant];
    list[index] = { ...list[index], plant: value };
    setNewPlant(list);
  }
  function handlePlantAmountChange(event, index) {
    const { value } = event.target;
    const list = [...newPlant];
    list[index] = { ...list[index], amount: value };
    setNewPlant(list);
  }
  return (
    <article>
      {newPlant.map((plant, index) => (
        <StyledContainer key={plant.id}>
          <Label htmlFor={`plant-${index}`}>Pflanzen</Label>
          <Input
            id={`plant-${index}`}
            name={`plant-${index}`}
            type="text"
            onChange={(event) => handlePlantChange(event, index)}
          />
          <Label htmlFor={`plant-${index}-amount`}>Menge</Label>
          <Input
            id={`plant-${index}-amount`}
            name={`plant-${index}-amount`}
            type="number"
            placeholder="Menge"
            aria-label="a lot"
            onChange={(event) => handlePlantAmountChange(event, index)}
          />
          <StyledButtonContainer>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a plant"
                onClick={() => handleDeletePlant(index)}
              >
                <span>X</span>
              </StyledDeleteButton>
            )}
            {newPlant.length - 1 === index && (
              <StyledAddButton type="button" aria-label="Button to add a new plant" onClick={handleAddPlant}>
                <span>+</span>
              </StyledAddButton>
            )}
          </StyledButtonContainer>
        </StyledContainer>
      ))}
    </article>
  );
}
