import styled from "styled-components";

export const StyledFormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border:none;
`;
export const Label = styled.label`
  font-weight: bold;
  height: 10px;
  margin-bottom: 8px;

`;
export const Input = styled.input`
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-top:5px;
  opacity:0.8;
`;
export default function CustomerForm() {
  return (
    <StyledFormFieldset>
      <Label htmlFor="customerFirstName">Name</Label>
      <Input
        id="customerFirstName"
        name="customerFirstName"
        type="text"
        aria-label="Customer first name"
        defaultValue=""
        required
      />
      <Label htmlFor="customerSecondName">Familienname</Label>
      <Input
        id="customerSecondName"
        name="customerSecondName"
        type="text"
        aria-label="Customer second name"
        defaultValue=""
        required
      />
      <Label htmlFor="customerAddress">Adresse</Label>
      <Input
        id="customerAddress"
        name="customerAddress"
        type="text"
        aria-label="Customer address"
        defaultValue=""
        required
      />
    </StyledFormFieldset>
  );
}
