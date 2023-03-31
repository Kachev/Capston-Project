import Heading from "../Heading";
import TimeCard from "../TimeCard";
import Customer from "../Customer/CustomerCard";
import Button from "../Button";
import useLocalStorageState from "use-local-storage-state";
import { WorkReports } from "../../DB/data";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
  align-items: center;
`;

export default function NewForm() {
  const router = useRouter();
  const [newWorkReports, setNewWorkReports] = useLocalStorageState(
    "workReport",
    { defaultValue: WorkReports }
  );

  function handleAddNewWorkReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setNewWorkReports([data, ...newWorkReports]);
    router.push("/ReportsList");
  }

  return (
    <main>
      <StyledSection>
        <Heading>Arbeitsbericht</Heading>
        <Form onSubmit={handleAddNewWorkReport}>
          <TimeCard />
          <Customer />
          <Button>Fertigstellen</Button>
        </Form>
      </StyledSection>
    </main>
  );
}
