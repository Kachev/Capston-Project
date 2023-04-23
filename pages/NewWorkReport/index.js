import NewForm from "../../components/NewForm";


export default function NewWorkReport({
  handleAddNewWorkReport,
  newWorkReports,
  setNewWorkReports,
}) {
  return (
    <>
      <NewForm
        handleAddNewWorkReport={handleAddNewWorkReport}
        newWorkReports={newWorkReports}
        setNewWorkReports={setNewWorkReports}
      />
    </>
  );
}