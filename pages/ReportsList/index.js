import styled from "styled-components";
import Forms from "../../components/ReportsLists";
import SavedReports from "../../components/NavBar";

const StyledSection = styled.section`
  display: grid;
`;

export default function ReportsList({
  handleCreatePdf,
  newWorkReports,
  setNewWorkReports,
}) {
  return (
    <StyledSection>
      <Forms
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
        handleCreatePdf={handleCreatePdf}
      />
      <SavedReports />
    </StyledSection>
  );
}
