import styled from "styled-components";
import { customer } from "../../../DB/data";
import Button from "../../Button";
import {useState} from "react";

const FormContainer = styled.fieldset`
    display:grid;
    gap:0.5rem;
    
    
`;
const Label = styled.label`
    font-weight: bold;
`;
const Input = styled.input`
    padding:0.5rem;
    font-size: inherit;
    border: 2px solid black;
    border-radius: 0.5rem;

`;
const Select = styled.select`
  padding: 0.5rem;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
`;
export default function CustomerForm() {
    

  return (
    <FormContainer >
      <Label htmlFor="customer-first_name">Name</Label>
      <Input id="customer_first_name" name="customer_first_name" type="text" required/>
      <Label htmlFor="customer_second_name">Familienname</Label>
      <Input id="customer_second_name" name="customer_second_name" type="text" required/>
      <Label htmlFor="customer_address">Adresse</Label>
      <Input id="customer_addresse" name="customer_address" type="text" required/>
    </FormContainer>
  );
}
