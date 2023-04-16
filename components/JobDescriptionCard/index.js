import styled from "styled-components";
import { StyledHeadlineOne } from "../Customer/CustomerCard";
import JobDescriptionForm from "./JobDescriptionForm";
const StyledSection = styled.section`
border:3px solid black;
border-radius: 0.5rem;
min-width: 355px;
padding:20px;
margin-bottom:20px;
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
