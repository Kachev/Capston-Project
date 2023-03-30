import styled from "styled-components";
import Button from "../../components/Button";
import Forms from "../../components/ReportsLists";
const StyledSection = styled.section`
    display:flex;
    justify-content:center;
`;


export default function ReportsList() {
  return (
    <StyledSection>
      <Button>+</Button>
    </StyledSection>
  );
}
