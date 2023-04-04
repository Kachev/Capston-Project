import styled from "styled-components";
import Button from "../../components/Button";
import Forms from "../../components/ReportsLists";
import { useRouter } from "next/router";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Button onClick={handleOnClick} aria-label="Add new report">
        +
      </Button>
    </StyledSection>
  );
}
