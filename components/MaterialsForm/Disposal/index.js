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
          <Label htmlFor={`disposal-${index}`}>Entsorgung</Label>
          <StyledSelect
            id={`disposal-${index}`}
            name={`disposal-${index}`}
            onChange={(event) => handleDisposalChange({ event, index })}
          >
            <option value="Grüngut">Grüngut</option>
            <option value="Bauschut">Bauschut</option>
            <option value="Oberboden">Oberboden</option>
          </StyledSelect>

          <Input
            id={`disposal-${index}-amount`}
            name={`disposal-${index}-amount`}
            type="number"
            placeholder="Menge"
            aria-label="a lot"
            min="0"
            onChange={(event) => handleDisposalChange({ event, index })}
            required
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
                onClick={() => handleDeleteDisposal(index)}
              >
                <span>X</span>
              </StyledDeleteButton>
            )}
            {newDisposal.length - 1 === index && (
              <StyledAddButton type="button" onClick={handleAddDisposal}>
                <span>+</span>
              </StyledAddButton>
            )}
          </StyledButtonContainer>
        </StyledContainer>
      ))}
    </article>
  );
}
