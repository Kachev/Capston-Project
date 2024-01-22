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
  text-shadow: 2px 2px 8px;
`;

const StyledLi = styled.li`
  background-color: #7cc592;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 1rem;

  list-style-type: none;
  box-shadow: 3px 5px 15px rgb(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  min-width: 325px;
  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:6; -webkit-box-orient: vertical;"
      : ""};
`;
const StyledUl = styled.ul`
  padding: 3px;
`;
const StyledDescriptionSection = styled.section`
  border-top: 1px dashed black;
`;

const StyledButton = styled.button`
  border: none;
  background-color: inherit;
  align-self: center;
`;
const StyledIcon = styled(Image)`
  position: relative;
  top: 3px;
  margin-right: 7px;
`;

const StyledExpandButton = styled.button`
  border: none;
  background: inherit;
  position: relative;
  bottom: 30px;
  right: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export default function Forms({
  newWorkReports,
  setNewWorkReports,
  handleCreatePdf,
}) {
  const newWorkReportsRef = useRef();
  const [isExpanded, setIsExpanded] = useState(newWorkReports.map(() => false));
  const [needExpandBtn, setNeedExpandBtn] = useState(false);
  const [workReports, setWorkReports] = useState(
    newWorkReports.map(() => true)
  );

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
  }, [newWorkReportsRef.current]);

  return (
    <StyledUl ref={newWorkReportsRef}>
      {newWorkReports &&
        newWorkReports.map((workReport, id) => (
          <StyledLi isExpanded={isExpanded[id]} key={workReport.id}>
            <StyledDiv>
              <StyledButton onClick={() => handleCreatePdf(workReport)}>
                <StyledIcon
                  src="/pdf-file.png"
                  width={24}
                  height={24}
                  alt="create Pdf"
                />
              </StyledButton>
              <StyledButton onClick={() => handleDeleteReport(id)}>
                <StyledIcon
                  src="/delete.png"
                  width={30}
                  height={30}
                  alt="delete icon"
                />
              </StyledButton>
            </StyledDiv>
            {!needExpandBtn && (
              <StyledExpandButton
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
              </StyledExpandButton>
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
                  {workReport.customerFirstName} {workReport.customerSecondName}
                </StyledParagraph>
                <StyledParagraph>
                  <b>Adresse: </b>
                  {workReport.customerAddress}
                </StyledParagraph>
              </section>
              <StyledHeadlineThree>Mitarbeiter</StyledHeadlineThree>
              <section>
                {Object.keys(workReport)
                  .filter((key) => key.startsWith("workerName"))
                  .map((key) => {
                    const workerIndex = key.slice(-1);
                    const workerName = workReport[key];
                    const workerFrom = workReport[`workerFrom-${workerIndex}`];
                    const workerTo = workReport[`workerTo-${workerIndex}`];
                    const workerPause =
                      workReport[`workerPause-${workerIndex}`];

                    return (
                      <div key={key}>
                        <StyledParagraph>
                          <b>
                            Name:
                            <br />
                            {workerName}
                          </b>
                        </StyledParagraph>
                        <StyledParagraph>
                          <b>Von: </b>
                          {workerFrom}
                        </StyledParagraph>
                        <StyledParagraph>
                          <b>Bis: </b>
                          {workerTo}
                        </StyledParagraph>
                        <StyledParagraph>
                          <b>Pause: </b>
                          {workerPause} Std.
                        </StyledParagraph>
                      </div>
                    );
                  })}
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
              </section>
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
              </section>
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
              <section>
                <StyledHeadlineThree>
                  Dünger und Pflanzenschutzmittel
                </StyledHeadlineThree>
                {Object.entries(workReport)
                  .filter(([key]) => key.startsWith("fertilizer-"))
                  .map(([key, value]) => {
                    if (key.endsWith("-amount")) {
                      const fertilizerName =
                        workReport[key.replace("-amount", "")];
                      return (
                        <StyledParagraph key={key}>
                          <b>{fertilizerName}</b>
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
                    return <StyledParagraph key={key}>{value}</StyledParagraph>;
                  } else if (key.startsWith("textarea")) {
                    if (value.trim() === "") {
                      return (
                        <StyledParagraph key={key}>
                          Keine zusätzliche Informationen
                        </StyledParagraph>
                      );
                    } else {
                      return (
                        <StyledDescriptionSection key={key}>
                          <h4>Zusätzliche Informationen</h4>
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
