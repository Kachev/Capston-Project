import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { WorkReports } from "../DB/data";
import { uid } from "uid";
import { useRouter } from "next/router";

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

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
        handleAddNewWorkReport={handleAddNewWorkReport}
      />
    </>
  );
}
