import styled from "styled-components";
import TimeForm from "../TimeForm";

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 25px;
  min-width: 350px;
`;
const StyledHeadlineOne = styled.h1`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 8px;
`;

export default function TimeCard() {
  return (
    <StyledTimeContainer>
      <StyledHeadlineOne>Arbeitszeit</StyledHeadlineOne>
      <TimeForm />
    </StyledTimeContainer>
  );
}
