import styled from "styled-components";
import { useState } from "react";
import { Label, Input } from "../../Customer/CustomerForm/customerForm";
const StyledPlantContainer = styled.div`
  display: grid;
  margin-bottom: 10px;
`;
export default function Plants() {
  const [newPlant, setNewPlant] = useState([{ id: 1, plant: "" }]);

  function handleAddPlant() {
    setNewPlant([...newPlant, { id: newPlant.length + 1, plant: "" }]);
  }
  function handlePlantChange(event, index) {
    const { value } = event.target;
    const list = [...newPlant];
    list[index] = { ...list[index], plant: value };
    setNewPlant(list);
  }
  function handlePlantAmountChange({ event, index }) {
    const { value } = event.target;
    const list = [...newPlant];
    list[index] = { ...list[index], amount: value };
    setNewPlant(list);
  }
  return (
    <div>
      {newPlant.map((plant, index) => (
        <StyledPlantContainer key={plant.id}>
          <Label htmlFor={`plant-${index}`}>Pflanzen</Label>
          <Input
            id={`plant-${index}`}
            name={`plant-${index}`}
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
    </div>
  );
}
