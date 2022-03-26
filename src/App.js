import { useEffect } from "react";
import Ellipse77 from './images/Ellipse77.png'
import Group73 from './images/Group73.png'
import barChart6 from './images/barChart6.png'
import "./App.css";
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Table, Button } from "react-bootstrap";
import { addRow } from "./employeeSlice";

const App = () => {
  const employeeTableData = useSelector((state) => state.employeeTable)
  const dispatch = useDispatch()

  useEffect(() => {
    const el = document.getElementById("table");
    const dragger = tableDragger(el, {
      mode: "free",
      onlyBody: false,
      dragHandler: ".handle",
      animation: 300
    });
    dragger.on("drop", function (from, to) {
      console.log(from);
    });
  }, []);

  return (
    <Container>
      <h1 className="title">Drag and Drop React-Table</h1>
      <Table responsive id="table" size="sm">
        <thead>
          <tr>
            <th className="handle" ></th>
            <th className="handle" >אפשרויות</th>
            <th className="handle">סך הכל שעות</th>
            <th className="handle">שעות</th>
            <th className="handle">שעות ידניות</th>
            <th className="handle">שעות חריגות</th>
            <th className="handle">שם עובד</th>
            <th className="handle">מספר תז</th>
          </tr>
        </thead>
        <tbody>
          {employeeTableData?.map((employe, index) => (
            <tr key={index} >
              <th className="handle" scope="row"><img src={Group73} /> </th>
              <td className="noWidth"><img src={barChart6} /></td>
              <td>{employe.sumHours}</td>
              <td>{employe.hours}</td>
              <td>{employe.overLimitHours}</td>
              <td>{employe.manualHours}</td>
              <td  >{employe.name} <span><img src={Ellipse77} /></span></td>
              <td >{employe.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => dispatch(addRow({
        "id": 316287341,
        "name": "שלמה",
        "overLimitHours": '4:00',
        "manualHours": '4:00',
        "hours": '155:00',
        "sumHours": '159:00'
      }))}>Add Row</Button>
    </Container>
  );
}
export default App;
