import CustomerForm from "../CustomerForm";
import styled from "styled-components";

const StyledCustomerSection = styled.section`
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 25px;
  background-color:#7CC592;
`;
export const StyledHeadlineTwo = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
`;
export default function Customer() {
  return (
    <StyledCustomerSection>
      <StyledHeadlineTwo>Kunde</StyledHeadlineTwo>
      <CustomerForm />
    </StyledCustomerSection>
  );
}
