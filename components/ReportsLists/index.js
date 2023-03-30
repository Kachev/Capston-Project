export default function Forms({ newWorkReports }) {
  return (
    <ul>
      {newWorkReports &&
        newWorkReports.map((workReport, index) => (
          <li key={index}>
            <b>Datum:</b> {workReport.date}
            <br />
            <b>Mitarbeiter</b> <br />
            <b>Name:</b> {workReport["worker_first_name"]}
            <br />
            <b>Zeiten</b> <br />
            <b>Von</b> {workReport.from}
            <br />
            <b>Bis:</b> {workReport.to}
            <br />
            <b>Pause:</b> {workReport.pause}
            <br/>
            <b>Kunde</b>
            <br />
            <b>Name:</b> {workReport["customer_first_name"]}
            <br />
            <b>Familienname:</b> {workReport["customer_second_name"]}
            <br />
            <b>Adresse:</b> {workReport["customer_address"]}
          </li>
        ))}
    </ul>
  );
}
