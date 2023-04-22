import NewForm from "../components/NewForm";

export default function Home({
  handleAddNewWorkReport,
  newWorkReports,
  setNewWorkReports,
}) {
  return (
    <main>
      <NewForm
        handleAddNewWorkReport={handleAddNewWorkReport}
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
      />
    </main>
  );
}
