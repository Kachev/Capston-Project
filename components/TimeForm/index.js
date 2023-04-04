import { Label, Input, StyledFormFieldset } from "../Customer/CustomerForm";

export default function TimeForm() {
  return (
    <StyledFormFieldset>
      <Label htmlFor="date">Datum:</Label>
      <Input id="date" type="date" name="date" aria-label="Date" required />
      <Label htmlFor="workerName">Mitarbeiter</Label>
      <Input
        type="text"
        id="workerName"
        name="workerName"
        placeholder="Mitarbeiter/innen"
        aria-label="Worker name"
        required
      />
      <Label htmlFor="workerFrom">Von</Label>
      <Input
        id="workerFrom"
        type="time"
        name="from"
        aria-label="From"
        required
      />
      <Label htmlFor="workerTo">Bis</Label>
      <Input id="workerTo" type="time" name="to" aria-label="To" required />
      <Label htmlFor="workerPause">Pause</Label>
      <Input
        id="workerPause"
        type="time"
        name="pause"
        aria-label="Pause"
        required
      />
    </StyledFormFieldset>
  );
}
