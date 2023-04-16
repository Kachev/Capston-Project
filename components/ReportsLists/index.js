import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowDownIcon, ArrowUpIcon } from "../../public/icons";

export const StyledHeadlineThree = styled.h3`
  margin-bottom: 3px;
  align-self: start;
`;
const StyledParagraph = styled.p`
  margin: 1px;
  padding: 1px;
`;
const StyledHeadlineTwo = styled.h2`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const StyledLi = styled.li`
  margin-bottom: 8px;
  margin-top: 1rem;
  margin-right: 2rem;
  list-style-type: none;
  border: 3px solid black;
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  min-width: 325px;
  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 7; -webkit-box-orient: vertical;"
      : ""};
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
const StyledSection = styled.section`
  /*   display: flex;
  border: 2px solid black;
  justify-content: space-around;
  flex-wrap: wrap; */
`;
const StyledContainer = styled.div`
  /*  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 5px; */
`;
const StyledDescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed black;
`;

const StyledButton = styled.button`
  border: none;
  align-self: start;
  background-color: white;
`;

export default function Forms({ newWorkReports }) {
  const newWorkReportsRef = useRef();
  const [isExpanded, setIsExpanded] = useState(newWorkReports.map(() => false));
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  useEffect(() => {
    setNeedExpandBtn(
      newWorkReportsRef?.current?.scrollHeight >
        newWorkReportsRef?.current?.clientHeight
    );
  }, []);

  return (
    <StyledUl ref={newWorkReportsRef}>
      {newWorkReports &&
        newWorkReports.map((workReport, index) => (
          <StyledLi isExpanded={isExpanded[index]} key={workReport}>
            {!needExpandBtn && (
              <StyledButton
                aria-label="Button to expand and collapse reports"
                onClick={() => {
                  const newExpanded = [...isExpanded];
                  newExpanded[index] = !newExpanded[index];
                  setIsExpanded(newExpanded);
                }}
              >
                {isExpanded[index] ? (
                  <ArrowUpIcon alt="Arrow icon pointing up" color="black" />
                ) : (
                  <ArrowDownIcon alt="Arrow icon pointing down" color="black" />
                )}
              </StyledButton>
            )}
            <StyledContainer>
              <StyledHeadlineTwo>Arbeitsbericht</StyledHeadlineTwo>
              <StyledParagraph>
                <b>Datum:</b> {workReport.date}
              </StyledParagraph>
              <StyledHeadlineThree>Kunde</StyledHeadlineThree>
              <StyledSection>
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
              </StyledSection>
              <StyledHeadlineThree>Mitarbeiter</StyledHeadlineThree>
              <StyledSection>
                <StyledParagraph>
                  <b>Name: </b>
                  {workReport.workerName}
                </StyledParagraph>
                {/* <StyledHeadlineThree>Zeiten</StyledHeadlineThree> */}
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
                  {workReport.pause} Std.
                </StyledParagraph>
              </StyledSection>
              <StyledHeadlineThree>Materialien</StyledHeadlineThree>
              <StyledSection>
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
              </StyledSection>
              <StyledHeadlineThree>Maschinen</StyledHeadlineThree>
              <StyledSection>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("machinesAndDevices-"))
                  .map(([, value]) => (
                    <StyledParagraph key={value}>{value}</StyledParagraph>
                  ))}
              </StyledSection>{" "}
              <StyledHeadlineThree>Entsorgung</StyledHeadlineThree>
              <StyledSection>
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
              </StyledSection>{" "}
              <StyledHeadlineThree>Pflanzen</StyledHeadlineThree>
              <StyledSection>
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
              </StyledSection>
              <StyledHeadlineThree>Arbeitsbeschreibung</StyledHeadlineThree>
              <StyledSection>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("description-"))
                  .map(([key, value], index) => {
                    if (key.endsWith("-textarea") && index > 0) {
                      return (
                        <StyledDescriptionSection key={key}>
                          {value.trim() === "" ? (
                            <StyledParagraph>
                              Keine zusätzliche Informationen
                            </StyledParagraph>
                          ) : (
                            <StyledParagraph>{value}</StyledParagraph>
                          )}
                        </StyledDescriptionSection>
                      );
                    } else if (!key.endsWith("-textarea")) {
                      return (
                        <StyledParagraph key={key}>{value}</StyledParagraph>
                      );
                    }
                    return null;
                  })}
              </StyledSection>
            </StyledContainer>
          </StyledLi>
        ))}
    </StyledUl>
  );
}
