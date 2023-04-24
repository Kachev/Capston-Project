import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { WorkReports } from "../DB/data";
import { uid } from "uid";
import { useRouter } from "next/router";
import { useState } from "react";
import createPdfFromWorkReport from "../components/PdfCreator/index.js";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  const [newWorkReports, setNewWorkReports] = useLocalStorageState(
    "WorkReports",
    { defaultValue: WorkReports }
  );
  const router = useRouter();
  function handleAddNewWorkReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = { id: uid(), ...data };
    console.log(data);
    setNewWorkReports([newData, ...newWorkReports]);
    router.push({
      pathname: "/ReportsList",
    });
  }

  const [workReports, setWorkReports] = useState(
    newWorkReports.map(() => true)
  );

  function handleCreatePdf(workReport) {
    createPdfFromWorkReport(workReport).then((pdfBytes) => {
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url);
    });
  }

  return (
    <>
      <Heading>GrünApp</Heading>
      <GlobalStyle />

      <Component
        {...pageProps}
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
        handleAddNewWorkReport={handleAddNewWorkReport}
        workReports={workReports}
        setWorkReports={setWorkReports}
        handleCreatePdf={handleCreatePdf}
      />
    </>
  );
}
