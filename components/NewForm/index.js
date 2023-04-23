import Heading from "../Heading";
import TimeCard from "../TimeCard/timeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import styled from "styled-components";
import MaterialsCard from "../MaterialsCard";
import JobDescriptionCard from "../JobDescriptionCard";

const StyledSection = styled.section`
  /* display: flex;
  flex-direction: column; */
  align-items: center; 

`;
export const Form = styled.form`
margin:8px;

`;
const StyledMain = styled.main`
gisplay:flex;
flex-direction:column;
align-items:center;
`;

export default function NewForm({ handleAddNewWorkReport }) {
  return (
    <StyledMain>
      <StyledSection>
        <Form onSubmit={handleAddNewWorkReport}>
          <TimeCard />
          <Customer />
          <MaterialsCard />
          <JobDescriptionCard />
          <Button aria-label="Button for submiting information" type="submit">
            Fertigstellen
          </Button>
        </Form>
      </StyledSection>
    </StyledMain>
  );
}
