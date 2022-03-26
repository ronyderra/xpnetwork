import { useEffect, useState } from "react";
import Ellipse77 from './images/Ellipse77.png'
import Group73 from './images/Group73.png'
import barChart6 from './images/barChart6.png'
import "./App.css";
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux'
import { Container,Table } from "react-bootstrap";

const App = () => {
  const employeeTableData = useSelector((state) => state.employeeTable.data)

  useEffect(() => {
    var el = document.getElementById("table");
    var dragger = tableDragger(el, {
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
      <Table responsive id="table" size="sm">
        <thead>
          <tr>
            <th className="handle" ></th>
            <th className="handle" >אפשרויות</th>
            <th className="handle">סך הכל שעות</th>
            <th className="handle">שעות</th>
            <th className="handle">שעות חריגות</th>
            <th className="handle">שם עובד</th>
            <th className="handle">מספר תז</th>
          </tr>
        </thead>
        <tbody>
          {employeeTableData?.map((employe, index) => (
            <tr key={index}>
              <th className="handle" scope="row"><img src={Group73} /> </th>
              <td className="noWidth"><img src={barChart6} /></td>
              <td>{employe.sumHours}</td>
              <td>{employe.hours}</td>
              <td>{employe.overLimitHours}</td>
              <td >{employe.name} <img src={Ellipse77} /></td>
              <td>{employe.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default App;
