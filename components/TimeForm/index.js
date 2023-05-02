import styled from "styled-components";
import { Label, Input, StyledFormFieldset } from "../Customer/CustomerForm";
import { StyledAddButton } from "../MaterialsForm/Plants";
import Image from "next/image";
import { useState } from "react";
import { StyledDeleteButton } from "../MaterialsForm/Plants";
import { useEffect } from "react";
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
  font-weight: bold;
  margin-top: 5px;
`;
const StyledWorkerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function TimeForm() {
  const [newWorker, setNewWorker] = useState([{ id: 1, workerName: "" }]);
  const [hideButton, setHideButton] = useState(false);
  useEffect(() => {
    if (newWorker.length > 1) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, [newWorker]);
  function handleAddWorker() {
    setNewWorker([
      ...newWorker,
      {
        id: newWorker.length + 1,
        workerName: "",
        workerFrom: "",
        workerTo: "",
        workerPause: "",
      },
    ]);
  }
  function handleDeleteWorker(id) {
    const list = [...newWorker];
    list.splice(id, 1);
    setNewWorker(list);
  }
  function handleWorkerChange({ event, id }) {
    const { value } = event.target;
    const list = [...newWorker];
    list[id] = { ...list[id], workerName: value };
    setNewWorker(list);
  }

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
      {newWorker.map((workerName, id) => (
        <StyledWorkerContainer key={workerName.id}>
          <Label htmlFor={`workerName-${id}`}>Mitarbeiter</Label>
          <Input
            type="text"
            id={`workerName-${id}`}
            name={`workerName-${id}`}
            placeholder="Mitarbeiter/innen"
            aria-label="Worker name"
            required
          />
          <StyledContainer>
            <StyledTimeLabel htmlFor={`workerFrom-${id}`}>Von</StyledTimeLabel>
            <StyledTimeLabel htmlFor={`workerTo-${id}`}>Bis</StyledTimeLabel>
            <StyledTimeLabel htmlFor={`workerPause-${id}`}>
              Pause
            </StyledTimeLabel>
          </StyledContainer>
          <StyledTimeContainer>
            <Input
              id={`workerFrom-${id}`}
              type="time"
              name={`workerFrom-${id}`}
              aria-label="From"
              defaultValue="08:00"
              required
              onChange={(event) => handleWorkerChange({ event, id })}
            />
            <Input
              id={`workerTo-${id}`}
              type="time"
              name={`workerTo-${id}`}
              aria-label="To"
              defaultValue="16:30"
              required
              onChange={(event) => handleWorkerChange({ event, id })}
            />
            <InputPause
              id={`workerPause-${id}`}
              type="number"
              name={`workerPause-${id}`}
              min="0"
              step="any"
              aria-label="Pause"
              required
              defaultValue=""
              onChange={(event) => handleWorkerChange({ event, id })}
            />
          </StyledTimeContainer>
          {!hideButton && (
            <StyledDeleteButton
              type="button"
              aria-label="Button to delete a plant"
              onClick={() => handleDeleteWorker(id)}
            >
              <Image
                src="/remove.png"
                width={24}
                height={24}
                alt="Remove icon"
              />
            </StyledDeleteButton>
          )}
          {newWorker.length - 1 === id && (
            <StyledAddButton
              type="button"
              aria-label="Button to add a Worker"
              onClick={handleAddWorker}
            >
              <Image src="/add.png" width={24} height={24} alt="Add icon" />
            </StyledAddButton>
          )}
        </StyledWorkerContainer>
      ))}
    </StyledFormFieldset>
  );
}
