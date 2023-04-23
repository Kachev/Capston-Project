import styled from "styled-components";
import MaterialsForm from "../MaterialsForm";
import { StyledHeadlineOne } from "../Customer/CustomerCard";

const StyledMaterialsSection = styled.section`
  /* border: 3px solid black; */
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
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
