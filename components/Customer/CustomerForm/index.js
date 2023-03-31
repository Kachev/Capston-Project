import styled from "styled-components";

const FormContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-weight: bold;
  height: 10px;
  margin-bottom: 8px;
`;
const Input = styled.input`
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
`;
export default function CustomerForm() {
  return (
    <FormContainer>
      <Label htmlFor="customer-first_name">Name</Label>
      <Input
        id="customer_first_name"
        name="customer_first_name"
        type="text"
        required
      />
      <Label htmlFor="customer_second_name">Familienname</Label>
      <Input
        id="customer_second_name"
        name="customer_second_name"
        type="text"
        required
      />
      <Label htmlFor="customer_address">Adresse</Label>
      <Input
        id="customer_addresse"
        name="customer_address"
        type="text"
        required
      />
    </FormContainer>
  );
}
