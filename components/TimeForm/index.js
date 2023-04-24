import styled from "styled-components";
import { Label, Input, StyledFormFieldset } from "../Customer/CustomerForm";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin
`;

const StyledTimeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const InputPause = styled.input`
  width: 73.63px;
  height: 30px;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin-top: 5px;
  opacity: 0.8;
`;
const StyledTimeLabel = styled.label`
font-weight:bold;
margin-top:5px;
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
        <StyledTimeLabel htmlFor="workerFrom">Von</StyledTimeLabel>
        <StyledTimeLabel htmlFor="workerTo">Bis</StyledTimeLabel>
        <StyledTimeLabel htmlFor="workerPause">Pause</StyledTimeLabel>
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
          defaultValue=""
        />
      </StyledTimeContainer>
    </StyledFormFieldset>
  );
}
