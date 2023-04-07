import { useState } from "react";
import styled from "styled-components";
import { Input } from "../Customer/CustomerForm";
const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  min-width:345px;
`;
const StyledPlantContainer = styled.div`
  display: grid;
  margin-bottom: 10px;
`;
const StyledMaterialsContainer = styled.div`
  display: grid;
  margin-bottom: 10px;
`;
const StyledMachinesContainer = styled.div`
  display: grid;
  margin-bottom: 10px;
`;
const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;
export const StyledCheckboxLabel = styled.label`
  padding-top: 10px;
  font-weight: bold;
  height: 10px;
`;

const StyledSelect = styled.select`
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: bold;
  height: 10px;
  margin-bottom: 8px;
`;

export default function MaterialsForm() {
  const [newMachines, setNewMachines] = useState([{ machinesAndDevices: "" }]);
  const [newMaterials, setNewMaterials] = useState([{ materials: "" }]);
  const [newDisposal, setNewDisposal] = useState([{ disposal: "" }]);
  const [newPlant, setNewPlant] = useState([{ plant: "" }]);

  function handleAddNewMachines() {
    setNewMachines([...newMachines, { machinesAndDevices: "" }]);
  }

  function handleAddNewMaterials() {
    setNewMaterials([...newMaterials, { materials: "", aLot: "", unit: [] }]);
  }
  function handleAddDisposal() {
    setNewDisposal([...newDisposal, { disposal: "" }]);
  }
  function handleAddPlant() {
    setNewPlant([...newPlant, { plant: "" }]);
  }
  function handlePlantChange(event, index) {
    const { value } = event.target;
    const list = [...newPlant];
    list[index] = value;
    setNewPlant(list);
  }

  function handleMaterialChange({ event, index }) {
    const { value } = event.target;
    const list = [...newMaterials];
    list[index] = { name: value };
    setNewMaterials(list);
  }

  function handleUnitChange({ event, index }) {
    const { name, checked } = event.target;
    const list = [...newMaterials];
    const unitList = [...(list[index].unit || [])];

    if (checked) {
      unitList.push(name);
    } else {
      const indexToRemove = unitList.indexOf(name);
      unitList.splice(indexToRemove, 1);
    }

    list[index][name] = unitList;
    setNewMaterials(list);
  }

  return (
    <StyledFormFieldset>
      {newMaterials.map((dropDown, index) => (
        <StyledMaterialsContainer key={index}>
          <Label htmlFor={`materials-${index}`}>Materialien</Label>
          <StyledSelect
            id={`materials-${index}`}
            name={`materials-${index}`}
            onChange={(event) => handleMaterialChange( event, index )}
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
            aria-label="a lot"
            onChange={(event) => handleMaterialChange( event, index )}
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
              onChange={(event) => handleUnitChange( event, index)}
            />
            <StyledCheckboxLabel htmlFor={`materials-${index}-m3`}>
              m3
            </StyledCheckboxLabel>
            <Input
              id={`materials-${index}-m3`}
              name={`materials-${index}-m3`}
              type="checkbox"
              value="m3"
              aria-label="Unit in cubic"
              onChange={(event) => handleUnitChange(event, index )}
            />
          </StyledCheckboxContainer>

          {newMaterials.length - 1 === index && (
            <button type="button" onClick={handleAddNewMaterials}>
              <span>+</span>
            </button>
          )}
        </StyledMaterialsContainer>
      ))}
      {newMachines.map((dropDown, index) => (
        <StyledMachinesContainer key={index}>
          <Label htmlFor={`machinesAndDevices-${index}`}>
            Maschinen und Geräte
          </Label>
          <StyledSelect
            id={`machinesAndDevices-${index}`}
            name={`machinesAndDevices-${index}`}
            required
            onChange={(event) => handleMaterialChange( event, index )}
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
      {newDisposal.map((dropDown, index) => (
        <StyledMaterialsContainer key={index}>
          <Label htmlFor={`disposal-${index}`}>Entsorgung</Label>
          <StyledSelect
            id={`disposal-${index}`}
            name={`disposal-${index}`}
            onChange={(event) => handleMaterialChange(event, index )}
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
            onChange={(event) => handleMaterialChange( event, index )}
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
              onChange={(event) => handleUnitChange( event, index )}
            />
            <StyledCheckboxLabel htmlFor={`disposal-${index}-m3`}>
              m3
            </StyledCheckboxLabel>
            <Input
              id={`mdisposal-${index}-m3`}
              name={`disposal-${index}-m3`}
              type="checkbox"
              value="m3"
              aria-label="Unit in cubic"
              onChange={(event) => handleUnitChange( event, index )}
            />
          </StyledCheckboxContainer>

          {newDisposal.length - 1 === index && (
            <button type="button" onClick={handleAddDisposal}>
              <span>+</span>
            </button>
          )}
        </StyledMaterialsContainer>
      ))}
      {newPlant.map((value, index) => (
        <StyledPlantContainer key={index}>
          <Label htmlFor={`plant-${index}`}>Pflanzen</Label>
          <Input
            id={`plant-${index}`}
            name={`plant-${index}`}
            value={value.name}
            type="text"
            onChange={(event) => handlePlantChange(event, index)}
          />
          <label htmlFor={`plant-${index}-amount`}>Menge</label>
          <Input
            id={`plant-${index}-amount`}
            name={`plant-${index}-amount`}
            type="number"
            placeholder="Menge"
            aria-label="a lot"
            onChange={(event) => handlePlantChange(event, index)}
          />
          {newPlant.length - 1 === index && (
            <button type="button" onClick={handleAddPlant}>
              <span>+</span>
            </button>
          )}
        </StyledPlantContainer>
      ))}
    </StyledFormFieldset>
  );
}
