import styled from "styled-components";
import TimeForm from "../TimeForm";
import { StyledHeadlineTwo } from "../Customer/CustomerCard";

const StyledTimeSection = styled.section`
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 25px;
  background-color:#7CC592;
`;


export default function TimeCard({}) {
  return (
    <StyledTimeSection>
      <StyledHeadlineTwo>Arbeitszeit</StyledHeadlineTwo>
      <TimeForm />
    </StyledTimeSection>
  );
}
