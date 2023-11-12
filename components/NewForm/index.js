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
const SaveButtonContainer = styled.div`
display:flex;
justify-content:center;
`;

export default function NewForm({ handleAddNewWorkReport }) {
  return (
    <main>
      <Form onSubmit={handleAddNewWorkReport}>
        <TimeCard />
        <Customer />
        <MaterialsCard />
        <JobDescriptionCard />
        <SaveButtonContainer>
          <Button aria-label="Button for submiting information" type="submit">
            Fertigstellen
            <StyledImage
              src="/save.png"
              width={24}
              height={24}
              alt="Save icon"
            />
          </Button>
        </SaveButtonContainer>
      </Form>
    </main>
  );
}
