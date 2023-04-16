import NewForm from "../components/NewForm";

export default function Home({ newWorkReports, setNewWorkReports }) {
  return (
    <main>
      <NewForm
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
      />
    </main>
  );
}
