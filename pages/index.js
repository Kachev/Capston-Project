import Customer from "../components/Customer/CustomerCard";
import Heading from "../components/Heading";
import TimeCard from "../components/TimeCard";
import Forms from "../components/ReportsLists";
import Button from "../components/Button";
import { WorkReports } from "../DB/data";
import useLocalStorageState from "use-local-storage-state";


export default function Home() {
  const [newWorkReports, setNewWorkReports] = useLocalStorageState(
    "workReport",
    { defaultValue: WorkReports }
    
  );
  function handleAddNewWorkReport(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setNewWorkReports([data, ...newWorkReports]);
    console.log(newWorkReports);
  }

  return (
    <>
      <Heading>Arbeitsbericht</Heading>
      <main>
        <form onSubmit={handleAddNewWorkReport}>
          <TimeCard />

          <Customer />
          <Button type="submit">Verigstellen</Button>
        </form>
        
          <Forms newWorkReports={newWorkReports}/>
        
      </main>
    </>
  );
}
