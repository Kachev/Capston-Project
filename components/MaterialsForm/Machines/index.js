import styled from "styled-components";
import { StyledAddButton, StyledDeleteButton } from "../Plants";
import { StyledSelect, Label } from "..";
import { useState, useEffect } from "react";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Machines() {
  const [newMachines, setNewMachines] = useState([{ machinesAndDevices: "" }]);
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    if (newMachines.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newMachines]);

  function handleDeleteMachines(index) {
    const list = [...newMachines];
    if (list.length > 1) {
      list.splice(index, 1);
    }
    setNewMachines(list);
  }

  function handleAddNewMachines() {
    setNewMachines([...newMachines, { machinesAndDevices: "" }]);
  }

  function handleMachinesChange(event, index) {
    const { value } = event.target;
    const list = [...newMachines];
    list[index] = { machinesAndDevices: value };
    setNewMachines(list);
  }

  return (
    <article>
      {newMachines.map((dropDown, index) => (
        <StyledContainer
          key={`${index}-${newMachines[index].machinesAndDevices}`}
        >
          <Label htmlFor={`machinesAndDevices-${index}`}>
            Maschinen und Geräte
          </Label>
          <StyledSelect
            id={`machinesAndDevices-${index}`}
            name={`machinesAndDevices-${index}`}
            required
            value={newMachines[index].machinesAndDevices}
            onChange={(event) => handleMachinesChange(event, index)}
          >
            <option value="Rasenmäher">Rasenmäher</option>
            <option value="Laubbläser">Laubbläser</option>
            <option value="Kompaktbagger">Kompaktbagger</option>
          </StyledSelect>
          <StyledButtonContainer>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                onClick={() => handleDeleteMachines(index)}
              >
                <span>X</span>
              </StyledDeleteButton>
            )}
            {newMachines.length - 1 === index && (
              <StyledAddButton type="button" onClick={handleAddNewMachines}>
                <span>+</span>
              </StyledAddButton>
            )}
          </StyledButtonContainer>
        </StyledContainer>
      ))}
    </article>
  );
}
