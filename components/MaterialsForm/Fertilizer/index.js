import styled from "styled-components";
import { useState, useEffect } from "react";
import { StyledContainer, StyledButtonContainer } from "../Machines";
import { StyledAddButton, StyledDeleteButton } from "../Plants";
import { Input } from "../../Customer/CustomerForm";
import { StyledSelect } from "..";
import Image from "next/image";

const Label=styled.label`
font-weight:bold;

`;

export default function Fertilizer() {
  const [newFertilizer, setNewFertilizer] = useState([
    { id: 1, fertilizer: "" },
  ]);
  const [hideButton, setHideButton] = useState(false);

  function handleAddNewFertilizer() {
    setNewFertilizer([
      ...newFertilizer,
      { id: newFertilizer.length + 1, fertilizer: "", amount: "" },
    ]);
  }
  useEffect(() => {
    if (newFertilizer.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newFertilizer]);

  function handleDeleteFertilizer(index) {
    const list = [...newFertilizer];
    if (list.length > 1) {
      list.splice(index, 1);
    } else if (list.length === 1) {
      setHideButton(true);
    }
    setNewFertilizer(list);
  }

  function handleFertilizerChange({ event, index }) {
    const { value } = event.target;
    const list = [...newFertilizer];
    list[index] = { ...list[index], fertilizer: value };
    setNewFertilizer(list);
  }

  function handleFertilizerAmountChange(event, index) {
    const { value } = event.target;
    const list = [...newFertilizer];
    list[index] = { ...list[index], amount: value };
    setNewFertilizer(list);
  }

  return (
    <article>
      {newFertilizer.map((dropDown, index) => (
        <StyledContainer key={dropDown.id}>
          {index === 0 && (
            <Label htmlFor={`fertilizer-${index}`}>
              Dünger und Pflanzschutzmittel
            </Label>
          )}
          <StyledSelect
            id={`fertilizer-${index}`}
            name={`fertilizer-${index}`}
            onChange={(event) => handleFertilizerChange({ event, index })}
          >
            <option value="">Bitte auswählen</option>
            <option value="Animalin">Animalin</option>
            <option value="Rasaflor">Rasaflor</option>
            <option value="Osmocote">Osmocote</option>
            <option value="Flüssigdünger">Flüssigdünger</option>
            <option value="Eisendünger">Eisendünger</option>
            <option value="Xentari">Xentari</option>
            <option value="Pilzmittel">Pilzmittel</option>
            <option value="Schneckenkorn">Schneckenkorn</option>
          </StyledSelect>
          <Input
            id={`fertilizer-${index}-amount`}
            name={`fertilizer-${index}-amount`}
            placeholder="Menge"
            aria-label="a lot"
            onChange={(event) => handleFertilizerAmountChange(event, index)}
          />
          <StyledButtonContainer>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a plant"
                onClick={() => handleDeleteFertilizer(index)}
              >
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Remove icon"
                />
              </StyledDeleteButton>
            )}
            {newFertilizer.length - 1 === index && (
              <StyledAddButton
                type="button"
                aria-label="Button to add a new plant"
                onClick={handleAddNewFertilizer}
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
