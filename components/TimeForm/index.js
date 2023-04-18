import styled from "styled-components";
import { Label, Input, StyledFormFieldset } from "../Customer/CustomerForm";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTimeContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;
const InputPause = styled.input`
  width: 80px;
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
`;
export default function TimeForm() {
  return (
    <StyledFormFieldset>
      <Label htmlFor="date">Datum:</Label>
      <Input
        id="date"
        type="date"
        name="date"
        aria-label="Date"
        defaultValue={new Date().toISOString().slice(0, 10)}
        required
      />
      <Label htmlFor="workerName">Mitarbeiter</Label>
      <Input
        type="text"
        id="workerName"
        name="workerName"
        placeholder="Mitarbeiter/innen"
        aria-label="Worker name"
        required
      />
      <StyledContainer>
        <Label htmlFor="workerFrom">Von</Label>
        <Label htmlFor="workerTo">Bis</Label>
        <Label htmlFor="workerPause">Pause</Label>
      </StyledContainer>
      <StyledTimeContainer>
        <Input
          id="workerFrom"
          type="time"
          name="from"
          aria-label="From"
          defaultValue="08:00"
          required
        />
        <Input
          id="workerTo"
          type="time"
          name="to"
          aria-label="To"
          defaultValue="16:30"
          required
        />
        <InputPause
          id="workerPause"
          type="number"
          name="pause"
          min="0"
          step="any"
          aria-label="Pause"
          required
        />
      </StyledTimeContainer>
    </StyledFormFieldset>
  );
}
