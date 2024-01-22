import styled from "styled-components";
import { useState, useEffect } from "react";
import { Label, Input } from "../../Customer/CustomerForm";
import { StyledContainer, StyledButtonContainer } from "../Machines";
import Image from "next/image";

export const StyledAddButton = styled.button`
  background-color: inherit;
  border: none;
  align-self: center;
  margin-top: 9px;
`;
export const StyledDeleteButton = styled.button`
  background-color: inherit;
  border: none;
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
          {index === 0 && <Label htmlFor={`plant-${index}`}>Pflanzen</Label>}
          <Input
            id={`plant-${index}`}
            name={`plant-${index}`}
            placeholder="Pflanze eingeben"
            type="text"
            onChange={(event) => handlePlantChange(event, index)}
          />
          {/* <Label htmlFor={`plant-${index}-amount`}>Menge</Label> */}
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
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Remove icon"
                />
              </StyledDeleteButton>
            )}
            {newPlant.length - 1 === index && (
              <StyledAddButton
                type="button"
                aria-label="Button to add a new plant"
                onClick={handleAddPlant}
              >
                <Image src="/add.png" width={24} height={24} alt="Add icon" />
              </StyledAddButton>
            )}
          </StyledButtonContainer>
        </StyledContainer>
      ))}
    </article>
  );
}
