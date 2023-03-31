import styled from "styled-components";
import Button from "../../components/Button";
import Forms from "../../components/ReportsLists";
import { WorkReports } from "../../DB/data";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ReportsList() {
  const router = useRouter();
  const [newWorkReports, _] = useLocalStorageState("workReport", {
    defaultValue: WorkReports,
  });
  function handleOnClick() {
    router.push("/");
  }
  return (
    <StyledSection>
      <Forms newWorkReports={newWorkReports} />
      <Button onClick={handleOnClick}>+</Button>
    </StyledSection>
  );
}
