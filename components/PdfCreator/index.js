import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default async function createPdfFromWorkReport(workReport) {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.setFont(font);
  page.setFontSize(12);

  // Text zum PDF-Dokument
  const plants = Object.entries(workReport)
    .filter(([key]) => key.startsWith("plant-"))
    .map(([key, value]) => {
      if (key.endsWith("-amount")) {
        const plantName = workReport[key.replace("-amount", "")];
        return `${plantName}: ${value} Stk.`;
      } else {
        return null;
      }
    })
    .join(`\n`);

  const description = Object.entries(workReport)
    .filter(([key]) => key.startsWith("descriptions-"))
    .map(([key, value]) => {
      return `${value}`;
    })
    .join(`\n`);

  const machines = Object.entries(workReport)
    .filter(([key]) => key.startsWith("machinesAndDevices-"))
    .map(([key, value]) => {
      return `${value}`;
    })
    .join(`\n`);

  const materials = Object.entries(workReport)
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
        return `${materialName}: ${value} ${materialUnit}`;
      } else {
        return null;
      }
    })
    .filter((material) => material !== null)
    .join("\n");

  const disposal = Object.entries(workReport)
    .filter(([key]) => key.startsWith("disposal-"))
    .map(([key, value]) => {
      if (key.endsWith("-amount")) {
        const disposalName = workReport[key.replace("-amount", "")];
        let disposalUnit = "Stück";
        if (workReport[`${key.replace("-amount", "")}-m3`]) {
          disposalUnit = "m³";
        } else if (workReport[`${key.replace("-amount", "")}-t`]) {
          disposalUnit = "t";
        }
        return `${disposalName}: ${value} ${disposalUnit}`;
      } else {
        return null;
      }
    })
    .filter((disposal) => disposal !== null)
    .join(`\n`);

  const { width, height } = page.getSize();
  const x = 30;
  const y = height - 30;
  const text = `
      Datum: ${workReport.date}
    \nKunde: 
    \nName: ${workReport.customerFirstName} ${workReport.customerSecondName}
    \nAdresse: ${workReport.customerAddress}
    \nMitarbeiter:
    \nName: ${workReport.workerName}
    \nVon: ${workReport.from}
    \nBis: ${workReport.to}
    \nPause: ${workReport.pause} Std.
    \nMaterialien:\n${materials}
    \nMaschinen:\n${machines}
    \nEntsorgung:\n${disposal}
    \nPflanzen:\n${plants}
    \nArbeitsbeschreibung:\n${description}
    \nZusätzliche Informationen:\n${workReport[`textarea-description`]} 
    `;
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const textWidth = font.widthOfTextAtSize(lines[i], 12);
    const textHeight = font.heightAtSize(12);
    const textX = x;
    const textY = y - i * textHeight - 10;
    page.drawText(lines[i], { x: textX, y: textY });
  }

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}
