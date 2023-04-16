import Heading from "../Heading";
import TimeCard from "../TimeCard/timeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import { useRouter } from "next/router";
import styled from "styled-components";
import MaterialsCard from "../MaterialsCard";
import JobDescriptionCard from "../JobDescriptionCard";
import { uid } from "uid";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 325px;
`;

export default function NewForm({ newWorkReports, setNewWorkReports }) {
  const router = useRouter();

  function handleAddNewWorkReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = { id: uid(), ...data };

    setNewWorkReports([newData, ...newWorkReports]);
    router.push({
      pathname: "/ReportsList",
    });
  }

  console.log(newWorkReports);
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
