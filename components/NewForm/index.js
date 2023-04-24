import Heading from "../Heading";
import TimeCard from "../TimeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import styled from "styled-components";
import MaterialsCard from "../MaterialsCard";
import JobDescriptionCard from "../JobDescriptionCard";
import Image from "next/image";

export const Form = styled.form`
  margin: 8px;
`;
const StyledImage = styled(Image)`
  border: none;
  padding: 1px;
  margin: 2px 4px;
  vertical-align: middle;
`;

export default function NewForm({ handleAddNewWorkReport }) {
  return (
    <main>
      <Form onSubmit={handleAddNewWorkReport}>
        <TimeCard />
        <Customer />
        <MaterialsCard />
        <JobDescriptionCard />
        <Button aria-label="Button for submiting information" type="submit">
          Fertigstellen
          <StyledImage src="/save.png" width={24} height={24} alt="Save icon" />
        </Button>
      </Form>
    </main>
  );
}
