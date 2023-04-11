import styled from "styled-components";
import Forms from "../../components/ReportsLists";
import { useRouter } from "next/router";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledNewFormButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  position: sticky;
  bottom: 20px;
`;

export default function ReportsList({}) {
  const router = useRouter();
  const newWorkReports = JSON.parse(router.query.newWorkReports || "[]");

  function handleOnClick() {
    router.push("/");
  }
  return (
    <StyledSection>
      <Forms newWorkReports={newWorkReports} />
      <StyledNewFormButton type="button" onClick={handleOnClick} aria-label="Add new report">
        +
      </StyledNewFormButton>
    </StyledSection>
  );
}
