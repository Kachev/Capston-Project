import styled from "styled-components";

const H3 = styled.h3`
  margin-bottom:1px;
  padding:5px;
`;
const P = styled.p`
  margin:3px;
  padding:1px;
`;
const H2 = styled.h2`
  border: 2px solid black;
  border-radius:10px;
  padding: 10px;
  text-align:center;
`;
const StyledUl = styled.ul`
  display:flex;
  flex-direction:column;
  padding:0 auto;
  margin:0;
`;
const StyledLi = styled.li`
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  list-style-type: none;
  border: 3px solid black;
  border-schadow: 1px 1px 1px rgb(0,0,0,0.50);
  border-radius: 0.5rem;
  padding: 1rem;
`;
const StyledSection = styled.section`
display: flex;
flex-direction: column;
`;
export default function Forms({ newWorkReports }) {
  return (
    <StyledSection>
      <StyledUl>
        {newWorkReports &&
          newWorkReports.map((workReport, index) => (
            <StyledLi key={index}>
              <H2>Arbeitsbericht</H2>
              <P><b>Datum:</b> {workReport.date}</P>
              <H3>Mitarbeiter</H3> 
              <P><b>Name: </b>{workReport["worker_first_name"]}</P>
              <H3>Zeiten</H3>
              <P><b>Von: </b>{workReport.from}</P> 
              <P><b>Bis: </b>{workReport.to}</P>
              <P><b>Pause: </b>{workReport.pause}</P>
              <H3>Kunde</H3>
              <P><b>Name: </b>{workReport["customer_first_name"]}</P>
              <P><b>Familienname: </b>{workReport["customer_second_name"]}</P>
              <P><b>Adresse: </b>{workReport["customer_address"]}</P>
            </StyledLi>
          ))}
      </StyledUl>
    </StyledSection>
  );
}
