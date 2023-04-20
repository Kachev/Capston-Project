import React from "react";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowDownIcon, ArrowUpIcon } from "../../public/icons";
import Image from "next/image";

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
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:7; -webkit-box-orient: vertical;"
      : ""};
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
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
const StyledIcon = styled(Image)`
  position: relative;
  top: 4px;
  left: 5px;
  margin-right: 1rem;
`;

export default function Forms({ newWorkReports, setNewWorkReports }) {
  const [workReports, setWorkReports] = useState(
    newWorkReports.map(() => true)
  );

  const newWorkReportsRef = useRef();
  const [isExpanded, setIsExpanded] = useState(newWorkReports.map(() => false));
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  function handleDeleteReport(id) {
    const shouldDelete = window.confirm(
      "Sind Sie sicher, dass Sie diesen Bericht löschen möchten?"
    );
    if (shouldDelete) {
      const updatedNewWorkReports = [...newWorkReports];
      updatedNewWorkReports.splice(id, 1);
      setNewWorkReports(updatedNewWorkReports);

      const updatedWorkReports = [...workReports];
      updatedWorkReports.splice(id, 1);
      setWorkReports(updatedWorkReports);
    }
  }

  useEffect(() => {
    setNeedExpandBtn(
      newWorkReportsRef?.current?.scrollHeight >
        newWorkReportsRef?.current?.clientHeight
    );
  }, []);

  return (
    <StyledUl ref={newWorkReportsRef}>
      {newWorkReports &&
        newWorkReports.map((workReport, id) => (
          <StyledLi isExpanded={isExpanded[id]} key={workReport.id}>
            <StyledButton onClick={() => handleDeleteReport(id)}>
              <StyledIcon
                src="/icons8-remove-24.png"
                width={24}
                height={24}
                alt="delete icon"
              />
            </StyledButton>
            {!needExpandBtn && (
              <StyledButton
                aria-label="Button to expand and collapse reports"
                onClick={() => {
                  const newExpanded = [...isExpanded];
                  newExpanded[id] = !newExpanded[id];
                  setIsExpanded(newExpanded);
                }}
              >
                {isExpanded[id] ? (
                  <ArrowUpIcon alt="Arrow icon pointing up" color="black" />
                ) : (
                  <ArrowDownIcon alt="Arrow icon pointing down" color="black" />
                )}
              </StyledButton>
            )}
            <div>
              <StyledHeadlineTwo>Arbeitsbericht</StyledHeadlineTwo>
              <StyledParagraph>
                <b>Datum:</b> {workReport.date}
              </StyledParagraph>
              <StyledHeadlineThree>Kunde</StyledHeadlineThree>
              <section>
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
              </section>
              <StyledHeadlineThree>Mitarbeiter</StyledHeadlineThree>
              <section>
                <StyledParagraph>
                  <b>Name: </b>
                  {workReport.workerName}
                </StyledParagraph>
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
              </section>
              <StyledHeadlineThree>Materialien</StyledHeadlineThree>
              <section>
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
              </section>
              <StyledHeadlineThree>Maschinen</StyledHeadlineThree>
              <section>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("machinesAndDevices-"))
                  .map(([, value]) => (
                    <StyledParagraph key={value}>{value}</StyledParagraph>
                  ))}
              </section>{" "}
              <StyledHeadlineThree>Entsorgung</StyledHeadlineThree>
              <section>
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
              </section>{" "}
              <StyledHeadlineThree>Pflanzen</StyledHeadlineThree>
              <section>
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
              </section>
              <StyledHeadlineThree>Arbeitsbeschreibung</StyledHeadlineThree>
              <section>
                {Object.entries(workReport).map(([key, value]) => {
                  if (key.startsWith("descriptions-")) {
                    return (
                      <StyledDescriptionSection key={key}>
                        <StyledParagraph>{value}</StyledParagraph>
                      </StyledDescriptionSection>
                    );
                  } else if (key.startsWith("textarea")) {
                    if (value.trim() === "") {
                      return (
                        <StyledDescriptionSection key={key}>
                          <StyledParagraph>
                            Keine zusätzliche Informationen
                          </StyledParagraph>
                        </StyledDescriptionSection>
                      );
                    } else {
                      return (
                        <StyledDescriptionSection key={key}>
                          <StyledParagraph>{value}</StyledParagraph>
                        </StyledDescriptionSection>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </section>
            </div>
          </StyledLi>
        ))}
    </StyledUl>
  );
}
