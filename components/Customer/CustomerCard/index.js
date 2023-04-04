import CustomerForm from "../CustomerForm";
import styled from "styled-components";

const CustomerSection = styled.section`
  /* display: flex;
  flex-direction: column; */
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 20px;
`;
export const StyledHeadlineOne = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
`;
export default function Customer() {
  return (
    <CustomerSection>
      <StyledHeadlineOne>Kunde</StyledHeadlineOne>
      <CustomerForm />
    </CustomerSection>
  );
}
