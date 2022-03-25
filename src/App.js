import { useEffect, useState } from "react";
import "./App.css";
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux'

export default function App() {
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
    <div className="container">
      <h1>The Big Bang Task</h1>
      <table className="table" id="table">
        <thead>
          <tr>
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
              <th className="handle" scope="row">{index}</th>
              <td>{employe.sumHours}</td>
              <td>{employe.hours}</td>
              <td>{employe.overLimitHours}</td>
              <td>{employe.name}</td>
              <td>{employe.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
