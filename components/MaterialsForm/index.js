import styled from "styled-components";
import Disposal from "./Disposal";
import Machines from "./Machines";
import Materials from "./Materials";
import Plants from "./Plants";
const StyledFormFieldset = styled.fieldset`
  display: flex;
  justify-content: space-around;
`;
const StyledContainer = styled.div`
  max-width: 135px;
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;
export const StyledCheckboxLabel = styled.label`
  font-weight: bold;
  align-self: center;
`;

export const StyledSelect = styled.select`
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-top: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  height: 10px;
  margin-bottom: 8px;
`;

export default function MaterialsForm() {
  return (
    <StyledFormFieldset>
      <StyledContainer>
        <Materials />
        <Machines />
      </StyledContainer>
      <StyledContainer>
        <Disposal />
        <Plants />
      </StyledContainer>
    </StyledFormFieldset>
  );
}
