/* import { useState } from "react";
import styled from "styled-components";
import { worker, workReport } from "../../DB/data";
import Button from "../Button";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  padding: 0.5rem;
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

export default function TimeForm() {
  const [newTimeForms, setNewTimeForm] = useState({});
  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target.elements);
    const data = Object.fromEntries(formData)
    setNewTimeForm(data);
    console.log(data);
  } */
  import { useState } from "react";
import styled from "styled-components";
import { workReports } from "../../DB/data";
import Button from "../Button";


const FormContainer = styled.fieldset`
  display: grid;
  gap: 0.5rem;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  padding: 0.5rem;
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

export default function TimeForm() {
   
  
  
  return (
    <FormContainer >
      <Label htmlFor="date">Datum:</Label>
      <Input id="date" type="date" name="date" />
      <Label htmlFor="worker">Mitarbeiter</Label>
      <Input type="text" id="worker" name="worker_first_name" placeholder="Mitarbeiter/innen" required/>
      <Label htmlFor="worker-from">Von</Label>
      <Input id="worker-from" type="time" name="from" />
      <Label htmlFor="worker-to">Bis</Label>
      <Input id="worker-to" type="time" name="to" />
      <Label htmlFor="worker-pause">Pause</Label>
      <Input id="worker-pause" type="time" name="pause" />
    
    </FormContainer>
  );
}
