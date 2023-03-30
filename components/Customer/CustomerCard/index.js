import CustomerForm from "../CustomerForm";
import styled from "styled-components";

const CustomerContainer = styled.div`
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
`;
const H1 = styled.h1`
    text-align:center;
`;
export default function Customer() {
  return (
    <CustomerContainer>
      
      <CustomerForm />
    </CustomerContainer>
  );
}