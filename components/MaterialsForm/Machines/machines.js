import styled from "styled-components";

import { StyledSelect, Label } from "../materialsForm";
import { useState } from "react";

const StyledMachinesContainer = styled.div`
  display: grid;
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
    <>
      {newMachines.map((dropDown, index) => (
        <StyledMachinesContainer key={index}>
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
            <button type="button" onClick={handleAddNewMachines}>
              <span>+</span>
            </button>
          )}
        </StyledMachinesContainer>
      ))}
    </>
  );
}
