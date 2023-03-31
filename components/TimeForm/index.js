
import styled from "styled-components";



const FormContainer = styled.fieldset`
display: flex;
flex-direction: column;
`;
const Label = styled.label`
  font-weight: bold;
  height:10px;
  margin-bottom:8px;
`;
const Input = styled.input`
  height:30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  
`;


export default function TimeForm() {
   
  
  
  return (
    <FormContainer >
      <Label htmlFor="date">Datum:</Label>
      <Input id="date" type="date" name="date" required />
      <Label htmlFor="worker">Mitarbeiter</Label>
      <Input type="text" id="worker" name="worker_first_name" placeholder="Mitarbeiter/innen" required/>
      <Label htmlFor="worker-from">Von</Label>
      <Input id="worker-from" type="time" name="from" required />
      <Label htmlFor="worker-to">Bis</Label>
      <Input id="worker-to" type="time" name="to" required/>
      <Label htmlFor="worker-pause">Pause</Label>
      <Input id="worker-pause" type="time" name="pause" required />
    </FormContainer>
  );
}
