import styled from "styled-components";

const StyledHeadlineThree = styled.h3`
  margin-bottom: 1px;
  padding: 5px;
`;
const StyledParagraph = styled.p`
  margin: 3px;
  padding: 1px;
`;
const StyledHeadlineTwo = styled.h2`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 auto;
  margin: 0;
`;
const StyledLi = styled.li`
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  list-style-type: none;
  border: 3px solid black;
  border-schadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
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
              <StyledHeadlineTwo>Arbeitsbericht</StyledHeadlineTwo>
              <StyledParagraph>
                <b>Datum:</b> {workReport.date}
              </StyledParagraph>
              <StyledHeadlineThree>Mitarbeiter</StyledHeadlineThree>
              <StyledParagraph>
                <b>Name: </b>
                {workReport.workerName}
              </StyledParagraph>
              <StyledHeadlineThree>Zeiten</StyledHeadlineThree>
              <StyledParagraph>
                <b>Von: </b>
                {workReport.from}
              </StyledParagraph>
              <StyledParagraph>
                <b>Bis: </b>
                {workReport.to}
              </StyledParagraph>
              <StyledParagraph>
                <b>Pause: </b>
                {workReport.pause}
              </StyledParagraph>
              <StyledHeadlineThree>Kunde</StyledHeadlineThree>
              <StyledParagraph>
                <b>Name: </b>
                {workReport.customerFirstName}
              </StyledParagraph>
              <StyledParagraph>
                <b>Familienname: </b>
                {workReport.customerSecondName}
              </StyledParagraph>
              <StyledParagraph>
                <b>Adresse: </b>
                {workReport.customerAddress}
              </StyledParagraph>
              <StyledHeadlineThree>Materialien</StyledHeadlineThree>
              {Object.entries(workReport)
                .filter(([key]) => key.startsWith("materials-"))
                .map(([key, value]) => {
                  if (key.endsWith("-amount")) {
                    const materialName = workReport[key.replace("-amount", "")];
                    let materialUnit = "Stück";
                    if (workReport[`${key.replace("-amount", "")}-m3`]) {
                      materialUnit = "m³";
                    } else if (workReport[`${key.replace("-amount", "")}-t`]) {
                      materialUnit = "t";
                    }
                    return (
                      <StyledParagraph key={key}>
                        <b>{materialName}</b>
                        <br />
                        Menge: {value} {materialUnit}
                      </StyledParagraph>
                    );
                  } else if (key.endsWith("-m3")) {
                    return null;
                  } else if (key.endsWith("-t")) {
                    return null;
                  } else {
                    return null;
                  }
                })}
              <StyledHeadlineThree>Maschinen</StyledHeadlineThree>
              {Object.entries(workReport)
                .filter(([key]) => key.startsWith("machinesAndDevices-"))
                .map(([, value]) => (
                  <StyledParagraph key={value}>{value}</StyledParagraph>
                ))}
            </StyledLi>
          ))}
      </StyledUl>
    </StyledSection>
  );
}
