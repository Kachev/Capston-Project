import styled from "styled-components";
import { StyledHeadlineTwo } from "../Customer/CustomerCard";
import JobDescriptionForm from "./JobDescriptionForm";
const StyledSection = styled.section`
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 20px;
  margin-bottom: 20px;
  background-color:#7CC592;
`;
export default function JobDescriptionCard() {
  return (
    <>
      <StyledSection>
        <StyledHeadlineTwo>Arbeitsbeschreibung</StyledHeadlineTwo>
        <JobDescriptionForm />
      </StyledSection>
    </>
  );
}
