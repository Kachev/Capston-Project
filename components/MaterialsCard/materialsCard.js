import styled from "styled-components";
import MaterialsForm from "../MaterialsForm/materialsForm";
import { StyledHeadlineOne } from "../Customer/CustomerCard/customerCard";

const StyledMaterialsSection = styled.section`
  border: 3px solid black;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  padding: 20px;
`;

export default function MaterialsCard() {
  return (
    <StyledMaterialsSection>
      <StyledHeadlineOne>Materialien, Maschinen und Geräte</StyledHeadlineOne>
      <MaterialsForm />
    </StyledMaterialsSection>
  );
}
