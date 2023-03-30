import styled from "styled-components";
import TimeForm from "../TimeForm";

const WorkerContainer = styled.div`
    border: 3px solid black;
    border-radius: 0.5rem;
    padding: 1rem;
`;
const H1 = styled.h1`
    text-align:center;
`;

export default function TimeCard() {
    return(
        <WorkerContainer>
            <H1>Arbeitszeit</H1>
            <TimeForm  />
        </WorkerContainer>
    );
}