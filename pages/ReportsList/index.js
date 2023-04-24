import styled from "styled-components";
import Forms from "../../components/ReportsLists";
import { useRouter } from "next/router";
import Image from "next/image";

const StyledSection = styled.section`
  display: grid;
`;
const StyledNewFormButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #73ca8e;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  margin-left: 28%;
  position: sticky;
  bottom: 20px;
  padding: 3px ;
`;
const StyledImage = styled(Image)`
border: none;
border-radius: 10px;
padding: 1px;
margin:2px 4px ; 
vertical-align: middle;
}
`;

export default function ReportsList({
  handleCreatePdf,
  newWorkReports,
  setNewWorkReports,
}) {
  const router = useRouter();

  function handleOnClick() {
    router.push("/NewWorkReport");
  }
  return (
    <StyledSection>
      <Forms
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
        handleCreatePdf={handleCreatePdf}
      />
      <StyledNewFormButton
        type="button"
        onClick={handleOnClick}
        aria-label="Add new report"
      >
        Neuer Bericht
        <StyledImage src="/add.png" width={24} height={24} alt="Add icon" />
      </StyledNewFormButton>
    </StyledSection>
  );
}
