import Heading from "../Heading";
import TimeCard from "../TimeCard/timeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import useLocalStorageState from "use-local-storage-state";
import { WorkReports } from "../../DB/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import MaterialsCard from "../MaterialsCard";

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

export default function NewForm() {
  const router = useRouter();
  const [newWorkReports, setNewWorkReports] = useLocalStorageState(
    "WorkReports",
    { defaultValue: WorkReports }
  );

  console.log(newWorkReports);

  function handleAddNewWorkReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setNewWorkReports([data, ...newWorkReports]);
    router.push({
      pathname: "/ReportsList",
      query: { newWorkReports: JSON.stringify([data, ...newWorkReports]) },
    });
  }

  return (
    <main>
      <StyledSection>
        <Heading>Arbeitsbericht</Heading>
        <Form onSubmit={handleAddNewWorkReport}>
          <TimeCard />
          <Customer />
          <MaterialsCard />
          <Button aria-label="Button for submiting information" type="submit">Fertigstellen</Button>
        </Form>
      </StyledSection>
    </main>
  );
}
