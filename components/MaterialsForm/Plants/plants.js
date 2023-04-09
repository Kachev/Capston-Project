import styled from "styled-components";
import { useState } from "react";
import { Label, Input } from "../../Customer/CustomerForm/customerForm";
const StyledPlantContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const StyledArticle = styled.article``;
export const StyledAddButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  align-self: center;
  margin-top: 10px;
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
    <StyledArticle>
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
            <StyledAddButton type="button" onClick={handleAddPlant}>
              <span>+</span>
            </StyledAddButton>
          )}
        </StyledPlantContainer>
      ))}
    </StyledArticle>
  );
}
