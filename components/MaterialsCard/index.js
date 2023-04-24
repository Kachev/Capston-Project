import styled from "styled-components";
import MaterialsForm from "../MaterialsForm";
import { StyledHeadlineTwo } from "../Customer/CustomerCard";

const StyledMaterialsSection = styled.section`
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  margin-bottom: 20px;
  padding: 20px;
  background-color:#7CC592;
`;

export default function MaterialsCard() {
  return (
    <StyledMaterialsSection>
      <StyledHeadlineTwo>Materialien, Maschinen und Geräte</StyledHeadlineTwo>
      <MaterialsForm />
    </StyledMaterialsSection>
  );
}
