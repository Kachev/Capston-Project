import {
  Label,
  StyledSelect,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
} from "..";
import { StyledAddButton, StyledDeleteButton } from "../Plants";
import { Input } from "../../Customer/CustomerForm";
import { useState, useEffect } from "react";
import { StyledContainer, StyledButtonContainer } from "../Machines";
import Image from "next/image";

export default function Disposal() {
  const [newDisposal, setNewDisposal] = useState([{ id: 1, disposal: "" }]);
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    if (newDisposal.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newDisposal]);
  function handleDeleteDisposal(index) {
    const list = [...newDisposal];
    if (list.length > 1) {
      list.splice(index, 1);
    }
    setNewDisposal(list);
  }
  function handleAddDisposal() {
    setNewDisposal([
      ...newDisposal,
      { id: newDisposal.length + 1, disposal: "" },
    ]);
  }
  function handleDisposalChange({ event, index }) {
    const { value } = event.target;
    const list = [...newDisposal];
    list[index] = { ...list[index], name: value };
    setNewDisposal(list);
  }

  function handleUnitChange({ event, index }) {
    const { name, checked } = event.target;
    const list = [...newDisposal];
    const unitList = [...(list[index].unit || [])];
    list[index][name] = unitList;
    setNewDisposal(list);
  }

  return (
    <article>
      {newDisposal.map((dropDown, index) => (
        <StyledContainer key={dropDown.id}>
          {index === 0 && (
            <Label htmlFor={`disposal-${index}`}>Entsorgung</Label>
          )}
          <StyledSelect
            id={`disposal-${index}`}
            name={`disposal-${index}`}
            onChange={(event) => handleDisposalChange({ event, index })}
          >
            <option value="">Bitte auswählen</option>
            <option value="Grüngut">Grüngut</option>
            <option value="Gras/Laub">Gras / Laub</option>
            <option value="Oberboden sauber">Oberboden sauber</option>
            <option value="Oberboden verunreinigt">
              Oberboden verunreinigt
            </option>
            <option value="Bodengemische verunreinigt">
              Bodengemische verunreinigt
            </option>
            <option value="Bauschut sauber">Bauschut sauber</option>
            <option value="Wurzelstöcke">Wurzelstöcke</option>
            <option value="Behandeltes Holz">Behandeltes Holz</option>
            <option value="Gewerbeabfälle, gemischt">
              Gewerbeabfälle, gemischt
            </option>
          </StyledSelect>

          <Input
            id={`disposal-${index}-amount`}
            name={`disposal-${index}-amount`}
            type="number"
            placeholder="Menge"
            aria-label="a lot"
            min="0"
            onChange={(event) => handleDisposalChange({ event, index })}
          />
          <StyledCheckboxContainer>
            <StyledCheckboxLabel htmlFor={`disposal-${index}-t`}>
              Tonnen
            </StyledCheckboxLabel>
            <Input
              id={`disposal-${index}-t`}
              name={`disposal-${index}-t`}
              type="checkbox"
              value="t"
              aria-label="Unit in ton"
              onChange={(event) => handleUnitChange({ event, index })}
            />
            <StyledCheckboxLabel htmlFor={`disposal-${index}-m3`}>
              m³
            </StyledCheckboxLabel>
            <Input
              id={`mdisposal-${index}-m3`}
              name={`disposal-${index}-m3`}
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
                aria-label="Button to delete a disposal"
                onClick={() => handleDeleteDisposal(index)}
              >
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Remove icon"
                />
              </StyledDeleteButton>
            )}
            {newDisposal.length - 1 === index && (
              <StyledAddButton
                type="button"
                aria-label="Button to add a new disposal"
                onClick={handleAddDisposal}
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
