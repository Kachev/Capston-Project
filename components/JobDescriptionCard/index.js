import styled from "styled-components";
import { StyledHeadlineOne } from "../Customer/CustomerCard";
import JobDescriptionForm from "./JobDescriptionForm";
const StyledSection = styled.section`
  /* border: 3px solid black; */
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  min-width: 355px;
  padding: 20px;
  margin-bottom: 20px;
`;
export default function JobDescriptionCard() {
  return (
    <>
      <StyledSection>
        <StyledHeadlineOne>Arbeitsbeschreibung</StyledHeadlineOne>
        <JobDescriptionForm />
      </StyledSection>
    </>
  );
}
