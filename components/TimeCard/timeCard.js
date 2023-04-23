import styled from "styled-components";
import TimeForm from "../TimeForm";

const StyledTimeSection = styled.section`
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 25px;
`;
const StyledHeadlineOne = styled.h1`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 8px;
`;

export default function TimeCard({}) {
  return (
    <StyledTimeSection>
      <StyledHeadlineOne>Arbeitszeit</StyledHeadlineOne>
      <TimeForm />
    </StyledTimeSection>
  );
}
