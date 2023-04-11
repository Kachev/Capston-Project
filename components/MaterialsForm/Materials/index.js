import { StyledContainer } from "../Machines";
import { StyledAddButton } from "../Plants";
import {
  Label,
  StyledSelect,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
} from "..";
import { Input } from "../../Customer/CustomerForm";
import { useState } from "react";

export default function Materials() {
  const [newMaterials, setNewMaterials] = useState([{ id: 1, materials: "" }]);
  function handleAddNewMaterials() {
    setNewMaterials([
      ...newMaterials,
      { id: newMaterials.length + 1, materials: "", aLot: "", unit: [] },
    ]);
  }
  function handleDeleteMaterials(index) {
    const list = [...newMaterials];
    if (list.length > 1) {
      list.splice(index, 1);
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
          <Label htmlFor={`materials-${index}`}>Materialien</Label>
          <StyledSelect
            id={`materials-${index}`}
            name={`materials-${index}`}
            onChange={(event) => handleMaterialChange({ event, index })}
          >
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
            required
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
          <button type="button" onClick={() => handleDeleteMaterials(index)}>
            Delete
          </button>

          {newMaterials.length - 1 === index && (
            <StyledAddButton type="button" onClick={handleAddNewMaterials}>
              <span>+</span>
            </StyledAddButton>
          )}
        </StyledContainer>
      ))}
    </article>
  );
}
