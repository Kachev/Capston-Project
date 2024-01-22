import styled from "styled-components";
import { StyledAddButton, StyledDeleteButton } from "../Plants";
import { StyledSelect, Label } from "..";
import { useState, useEffect } from "react";
import Image from "next/image";

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
          {index === 0 && (
            <Label htmlFor={`machinesAndDevices-${index}`}>Maschinen</Label>
          )}
          <StyledSelect
            id={`machinesAndDevices-${index}`}
            name={`machinesAndDevices-${index}`}
            required
            value={newMachines[index].machinesAndDevices}
            onChange={(event) => handleMachinesChange(event, index)}
          >
            <option value="">Bitte auswählen</option>
            <option value="Sprinter">Sprinter</option>
            <option value="LKW">LKW</option>
            <option value="Rasenmäher">Rasenmäher</option>
            <option value="Laubbläser">Laubbläser</option>
            <option value="Kompaktbagger">Kompaktbagger</option>
            <option value="Abbruchhammer Bagger">Abruchhammer Bagger</option>
            <option value="Abbruchhammer Handgerät">
              Abbruchhammer Handgerät
            </option>
            <option value="Stabheckenschere">Stabheckenschere</option>
            <option value="Vertikutierer">Vertikutierer</option>
            <option value="Bohrmaschine">Bohrmaschine</option>
            <option value="Akkubohrmaschine">Akkubohrmaschine</option>
            <option value="Akkuschrauber">Akkuschrauber</option>
            <option value="Flex Groß">Flex Groß</option>
            <option value="Flex Klein">Flex Klein</option>
          </StyledSelect>
          <StyledButtonContainer>
            {!hideButton && (
              <StyledDeleteButton
                type="button"
                aria-label="Button to delete a Machine."
                onClick={() => handleDeleteMachines(index)}
              >
                <Image
                  src="/remove.png"
                  width={24}
                  height={24}
                  alt="Delete icon"
                />
              </StyledDeleteButton>
            )}
            {newMachines.length - 1 === index && (
              <StyledAddButton
                type="button"
                aria-label="Button to add a new Machine"
                onClick={handleAddNewMachines}
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
