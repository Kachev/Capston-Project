import styled from "styled-components";

const StyledHeadlineThree = styled.h3`
  margin-bottom: 1px;
  align-self: start;
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
  /*  display: flex;
  flex-direction: column; */
  padding: 30px auto;
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
  display: flex;
  justify-content: space-between;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  /* max-width: 500px; */
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

export default function Forms({ newWorkReports }) {
  return (
    <StyledSection>
      <StyledUl>
        {newWorkReports &&
          newWorkReports.map((workReport, index) => (
            <StyledLi key={index}>
              <StyledContainer>
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
              </StyledContainer>
              <StyledContainer>
                <StyledContainer>
                  <StyledHeadlineThree>Materialien</StyledHeadlineThree>
                  {Object.entries(workReport)
                    .filter(([key]) => key.startsWith("materials-"))
                    .map(([key, value]) => {
                      if (key.endsWith("-amount")) {
                        const materialName =
                          workReport[key.replace("-amount", "")];
                        let materialUnit = "Stück";
                        if (workReport[`${key.replace("-amount", "")}-m3`]) {
                          materialUnit = "m³";
                        } else if (
                          workReport[`${key.replace("-amount", "")}-t`]
                        ) {
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
                </StyledContainer>
                <StyledHeadlineThree>Maschinen</StyledHeadlineThree>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("machinesAndDevices-"))
                  .map(([, value]) => (
                    <StyledParagraph key={value}>{value}</StyledParagraph>
                  ))}

                <StyledHeadlineThree>Entsorgung</StyledHeadlineThree>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("disposal-"))
                  .map(([key, value]) => {
                    if (key.endsWith("-amount")) {
                      const disposalName =
                        workReport[key.replace("-amount", "")];
                      let disposalUnit = "Stück";
                      if (workReport[`${key.replace("-amount", "")}-m3`]) {
                        disposalUnit = "m³";
                      } else if (
                        workReport[`${key.replace("-amount", "")}-t`]
                      ) {
                        disposalUnit = "t";
                      }
                      return (
                        <StyledParagraph key={key}>
                          <b>{disposalName}</b>
                          <br />
                          Menge: {value} {disposalUnit}
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

                <StyledHeadlineThree>Pflanzen</StyledHeadlineThree>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("plant-"))
                  .map(([key, value]) => {
                    if (key.endsWith("-amount")) {
                      const plantName = workReport[key.replace("-amount", "")];
                      return (
                        <StyledParagraph key={key}>
                          <b>{plantName}</b>
                          <br />
                          Menge: {value}
                        </StyledParagraph>
                      );
                    }
                  })}
              </StyledContainer>
            </StyledLi>
          ))}
      </StyledUl>
    </StyledSection>
  );
}
