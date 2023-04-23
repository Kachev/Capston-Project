import Heading from "../Heading";
import TimeCard from "../TimeCard/timeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import styled from "styled-components";
import MaterialsCard from "../MaterialsCard";
import JobDescriptionCard from "../JobDescriptionCard";

const StyledSection = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
export const Form = styled.form`
margin:8px;
align-items: center;
 /*  display: flex;
  flex-direction: column;
  min-width: 325px; */
`;

export default function NewForm({ handleAddNewWorkReport }) {
  return (
    <main>
      <StyledSection>
        <Heading>Arbeitsbericht</Heading>
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
    </main>
  );
}
