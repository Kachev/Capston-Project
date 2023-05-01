import { StyledContainer, StyledButtonContainer } from "../Machines";
import { StyledAddButton, StyledDeleteButton } from "../Plants";
import {
  Label,
  StyledSelect,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
} from "..";
import { Input } from "../../Customer/CustomerForm";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Materials() {
  const [newMaterials, setNewMaterials] = useState([{ id: 1, materials: "" }]);
  const [hideButton, setHideButton] = useState(false);

  function handleAddNewMaterials() {
    setNewMaterials([
      ...newMaterials,
      { id: newMaterials.length + 1, materials: "", aLot: "", unit: [] },
    ]);
  }
  useEffect(() => {
    if (newMaterials.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newMaterials]);
  function handleDeleteMaterials(index) {
    const list = [...newMaterials];
    if (list.length > 1) {
      list.splice(index, 1);
    } else if (list.length === 1) {
      setHideButton(true);
    }
    setNewMaterials(list);
  }

  function handleMaterialChange({ event, index }) {
    const { value } = event.target;
    const list = [...newMaterials];
    list[index] = { ...list[index], materials: value };
    setNewMaterials(list);
  }

  function handleUnitChange({ event, index }) {
    const { name, checked } = event.target;
    const list = [...newMaterials];
    const unitList = [...(list[index].unit || [])];

    list[index][name] = unitList;
    setNewMaterials(list);
  }
  return (
    <article>
      {newMaterials.map((dropDown, index) => (
        <StyledContainer key={dropDown.id}>
          {index === 0 && (
            <Label htmlFor={`materials-${index}`}>Materialien</Label>
          )}
          <StyledSelect
            id={`materials-${index}`}
            name={`materials-${index}`}
            onChange={(event) => handleMaterialChange({ event, index })}
          >
            <option value="">Bitte auswählen</option>
            <option value="Erde">Erde</option>
            <option value="Lava">Lava</option>
            <option value="Unterbau">Unterbau</option>
          </StyledSelect>

          <Input
            id={`materials-${index}-amount`}
            name={`materials-${index}-amount`}
            type="number"
            placeholder="Menge"
            min="0"
            aria-label="a lot"
            onChange={(event) => handleMaterialChange({ event, index })}
          />
          <StyledCheckboxContainer>
            <StyledCheckboxLabel htmlFor={`materials-${index}-t`}>
              Tonnen
            </StyledCheckboxLabel>
            <Input
              id={`materials-${index}-t`}
              name={`materials-${index}-t`}
              type="checkbox"
              value="t"
              aria-label="Unit in ton"
              onChange={(event) => handleUnitChange({ event, index })}
            />
            <StyledCheckboxLabel htmlFor={`materials-${index}-m3`}>
              m³
            </StyledCheckboxLabel>
            <Input
              id={`materials-${index}-m3`}
              name={`materials-${index}-m3`}
              type="checkbox"
              value="m3"
              aria-label="Unit in cubic"
              onChange={(event) => handleUnitChange({ event, index })}
            />
          </StyledCheckboxContainer>
          <StyledButtonContainer>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a material"
                onClick={() => handleDeleteMaterials(index)}
              >
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Remove icon"
                />
              </StyledDeleteButton>
            )}
            {newMaterials.length - 1 === index && (
              <StyledAddButton
                type="button"
                aria-label="Button to add a new material"
                onClick={handleAddNewMaterials}
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
