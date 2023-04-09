import styled from "styled-components";
import { Input } from "../Customer/CustomerForm/customerForm";
import Disposal from "../MaterialsForm/Disposal/disposal";
import Machines from "./Machines/machines";
import Materials from "./Materials/materials";
import Plants from "./Plants/plants";
const StyledFormFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  /* min-width: 345px; */
  
`;
const StyledContainer = styled.div`

`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;
export const StyledCheckboxLabel = styled.label`
  padding-top: 10px;
  font-weight: bold;
  height: 10px;
`;

export const StyledSelect = styled.select`
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-bottom: 8px;
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
