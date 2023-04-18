import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { WorkReports } from "../DB/data";

export default function App({ Component, pageProps }) {
  const [newWorkReports, setNewWorkReports] = useLocalStorageState(
    "WorkReports",
    { defaultValue: WorkReports }
  );
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
      />
    </>
  );
}
