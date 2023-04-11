import styled from "styled-components";
import { StyledAddButton } from "../Plants";
import { StyledSelect, Label } from "..";
import { useState } from "react";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export default function Machines() {
  const [newMachines, setNewMachines] = useState([{ machinesAndDevices: "" }]);

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
          {newMachines.length - 1 === index && (
            <StyledAddButton type="button" onClick={handleAddNewMachines}>
              <span>+</span>
            </StyledAddButton>
          )}
        </StyledContainer>
      ))}
    </article>
  );
}
