import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
const PLACEHOLDER = "__PLACEHOLDER__";

function drawTable(page, rows, startX, startY, cellWidth, cellHeight, margin) {
  const lineWidth = 0.5;
  const placeholderWidth = 50; 

  let y = startY;

  rows.forEach((row) => {
    let x = startX;

    row.forEach((cell, columnIndex) => {
      // Überprüfe, ob die Zelle eine Zeichenkette ist oder ein Platzhalter
      if (typeof cell === "string") {
        // Zeichne den Zelleninhalt, es sei denn, es handelt sich um einen Platzhalter
        if (cell !== PLACEHOLDER) {
          // Überprüfe, ob der Text umbrochen werden muss
          let remainingSpace = cellWidth;
          let startIndex = 0;

          while (startIndex < cell.length) {
            const textChunk = cell.slice(startIndex, startIndex + 85);
            page.drawText(textChunk, { x, y });

            startIndex += 85;
            remainingSpace -= 85;

            // Überprüfe, ob noch mehr Text vorhanden ist und ob eine neue Zeile benötigt wird
            if (startIndex < cell.length) {
              x = startX;
              y -= cellHeight + margin;
            }
          }

          // Zeichne die vertikale Trennlinie
          if (
            columnIndex < row.length &&
            row[columnIndex + 1] !== PLACEHOLDER
          ) {
            page.drawRectangle({
              x: x + cellWidth,
              y: y - cellHeight,
              width: lineWidth,
              height: cellHeight,
              borderColor: rgb(0, 0, 0),
              borderWidth: lineWidth,
            });
          }
        }
      } else {
        // Hier kannst du zusätzliche Logik für Platzhalter implementieren
        // Zum Beispiel, wenn der Platzhalter erkannt wird, zeichne keine Trennlinien
        if (cell === PLACEHOLDER) {
          // Hier könntest du die Breite des Platzhalters berücksichtigen, um sicherzustellen, dass keine unnötige Trennlinie gezeichnet wird
          x += placeholderWidth;
        }
      }

      x += cellWidth;
    });

    // Zeichne die horizontale Trennlinie
    page.drawRectangle({
      x: startX,
      y: y - cellHeight,
      width: row.length * cellWidth,
      height: lineWidth,
      borderColor: rgb(0, 0, 0),
      borderWidth: lineWidth,
    });

    y -= cellHeight + margin;
  });
}

export default async function createPdfFromWorkReport(workReport) {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.setFont(font);
  page.setFontSize(14);

  // Text zum PDF-Dokument
  function processWorkerData(workReport) {
    return Object.keys(workReport)
      .filter((key) => key.startsWith("workerName"))
      .map((key) => {
        const workerIndex = key.slice(-1);
        const workerName = workReport[key];
        const workerFrom = workReport[`workerFrom-${workerIndex}`];
        const workerTo = workReport[`workerTo-${workerIndex}`];
        const workerPause = workReport[`workerPause-${workerIndex}`];
        return {
          name: workerName,
          from: workerFrom,
          to: workerTo,
          pause: workerPause,
        };
      })
      .filter((worker) => worker !== null);
  }
  const workersData = processWorkerData(workReport);

  const workersTableRows = workersData.map((worker) => [
    worker.name,
    worker.from,
    worker.to,
    worker.pause,
  ]);

  function processPlantsData(workReport) {
    return Object.entries(workReport)
      .filter(([key]) => key.startsWith("plant-"))
      .map(([key, value]) => {
        if (key.endsWith("-amount")) {
          const plantName = workReport[key.replace("-amount", "")];
          return {
            name: plantName,
            amount: value,
          };
        } else {
          return null;
        }
      })
      .filter((plant) => plant !== null);
  }
  const plantsData = processPlantsData(workReport);
  const plantsTableRows = plantsData.map((plant) => [plant.name, plant.amount]);

  const ferilizerData = Object.entries(workReport)
    .filter(([key]) => key.startsWith("fertilizer-"))
    .map(([key, value]) => {
      if (key.endsWith("-amount")) {
        const fertilizerName = workReport[key.replace("-amount", "")];
        return {
          name: fertilizerName,
          amount: value,
        };
      } else {
        return null;
      }
    })
    .filter((fertilizer) => fertilizer !== null);
  const fertilizerTableRows = ferilizerData.map((fertilizer) => [
    fertilizer.name,
    fertilizer.amount,
  ]);

  const descriptions = Object.entries(workReport)
    .filter(([key]) => key.startsWith("descriptions-"))
    .map(([key, value]) => {
      return { name: value };
    })
    .filter((description) => description !== null);

  const descriptionsTableRows = descriptions.map((descriptions) => [
    descriptions.name,
    PLACEHOLDER,
  ]);

  const descriptionsTextArea = Object.entries(workReport)
    .filter(([key]) => key.startsWith("textarea-"))
    .map(([key, value]) => {
      return { name: value };
    });

  const textAreaTableRows = descriptionsTextArea.map((textArea) => {
    const row = [textArea.name];
    const placeholdersToAdd = 1 - row.length + 1; 

    if (row.length > 85) {
    }
    for (let i = 0; i < placeholdersToAdd; i++) {
      row.push(PLACEHOLDER);
    }

    return row;
  });

  const machines = Object.entries(workReport)
    .filter(([key]) => key.startsWith("machinesAndDevices-"))
    .map(([key, value]) => {
      return { name: value };
    })
    .filter((machine) => machine !== null);

  const machinesAndDevicesTableRows = machines.map((machine) => [machine.name]);

  const materialsData = Object.entries(workReport)
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
        return {
          name: materialName,
          unit: `${value} ${materialUnit}`,
        };
      } else {
        return null;
      }
    })
    .filter((material) => material !== null);

  const materialTableRows = materialsData.map((material) => [
    material.name,
    material.unit,
  ]);
  console.log("Material", materialTableRows);
  function processDisposalData(type, workReport) {
    return Object.entries(workReport)
      .filter(([key]) => key.startsWith(`${type}-`))
      .map(([key, value]) => {
        if (key.endsWith("-amount")) {
          const disposalName = workReport[key.replace("-amount", "")];
          let disposalUnit = "Stück";
          if (workReport[`${key.replace("-amount", "")}-m3`]) {
            disposalUnit = "m³";
          } else if (workReport[`${key.replace("-amount", "")}-t`]) {
            disposalUnit = "t";
          }
          return {
            name: disposalName,
            unit: `${value} ${disposalUnit}`,
          };
        } else {
          return null;
        }
      })
      .filter((disposal) => disposal !== null);
  }

  const disposalData = processDisposalData("disposal", workReport);

  const disposalTableRows = disposalData.map((disposal) => [
    disposal.name,
    disposal.unit,
  ]);

  const combinedMaterialTableRows = materialTableRows.map(
    (materialRow, index) => [
      ...materialRow,
      ...(disposalTableRows[index] || []), 
      ...(plantsTableRows[index] || []),
    ]
  );
  const combinedTableRows = fertilizerTableRows.map((fertilizerRow, index) => [
    ...fertilizerRow,

    ...machinesAndDevicesTableRows[index],
  ]);

  const { width, height } = page.getSize();
  const x = 30;
  const y = height - 30;
  const text = "";
  // Weitere Code-Logik für die Verwendung der drawTable-Funktion
  const tableRows = [
    [
      PLACEHOLDER,
      PLACEHOLDER,
      "     ARBEITSBERICHT",
      PLACEHOLDER,
      PLACEHOLDER,
      PLACEHOLDER,
    ],
    [],
    [
      "Kunde:",
      PLACEHOLDER,
      PLACEHOLDER,
      PLACEHOLDER,
      `  Datum: ${workReport.date}`,
      PLACEHOLDER,
    ],
    [`${workReport.customerFirstName} ${workReport.customerSecondName}`],
    [`${workReport.customerAddress}`],
    [],
    [" Mitarbeiter", "  von", "  bis", "  Pause"],
    ...workersTableRows,
    [],
    [PLACEHOLDER, "  Materialien", PLACEHOLDER, "Entsorgt", "  Pflanzen"],
    [" Material", " Menge", " Material", " Menge", " Pflanze", " Menge"],
    ...combinedMaterialTableRows,
    [],
    ["  Dünger und Pilzmittel", PLACEHOLDER, "  Maschinen"],
    [" Mittel", "  Menge", ""],
    ...combinedTableRows,
    [],
    ["Arbeitsbeschreibung :", PLACEHOLDER],
    ...descriptionsTableRows,
    ...textAreaTableRows,
  ];
  console.log("oops", textAreaTableRows);
  drawTable(page, tableRows, 33, height - 25, 90, 10, 17);

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}
