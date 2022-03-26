import { useEffect } from "react";
import Ellipse from '../assets/Ellipse.png'
import ThreeDots from '../assets/ThreeDots.png'
import BarChart from '../assets/BarChart.png'
import "./DndTable.css";
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Table, Button } from "react-bootstrap";
import { addRow } from "../redux/employeeSlice";

const DndTable = () => {
  const employeeTableData = useSelector((state) => state.employeeTable)
  const dispatch = useDispatch()

  useEffect(() => {
    const el = document.getElementById("table");
    tableDragger(el, {
      mode: "free",
      onlyBody: false,
      dragHandler: ".handle",
      animation: 300
    })
  }, []);

  return (
    <Container>
      <h1 className="title">Drag and Drop React-Table</h1>
      <Table responsive id="table" size="sm">
        <thead>
          <tr>
            <th className="handle"></th>
            <th className="handle">אפשרויות</th>
            <th className="handle">סך הכל שעות</th>
            <th className="handle">שעות</th>
            <th className="handle">שעות ידניות</th>
            <th className="handle">שעות חריגות</th>
            <th className="handle">שם עובד</th>
            <th className="handle">מספר תז</th>
          </tr>
        </thead>
        <tbody>
          {employeeTableData?.map((employee, index) => (
            <tr key={index} >
              <th className="handle" scope="row"><img src={ThreeDots} /></th>
              <td className="noWidth"><img src={BarChart} /></td>
              <td>{employee.sumHours}</td>
              <td>{employee.hours}</td>
              <td>{employee.overLimitHours}</td>
              <td>{employee.manualHours}</td>
              <td>{employee.name} <span><img src={Ellipse} /></span></td>
              <td>{employee.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => dispatch(addRow({
        id: 316287341,
        name: "שלמה",
        overLimitHours: '4:00',
        manualHours: '4:00',
        hours: '155:00',
        sumHours: '159:00'
      }))}>Add Row</Button>
    </Container>
  );
}
export default DndTable;
