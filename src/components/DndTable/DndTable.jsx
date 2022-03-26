import { useEffect, useState } from "react";
import Ellipse from '../../assets/Ellipse.png'
import ThreeDots from '../../assets/ThreeDots.png'
import BarChart from '../../assets/BarChart.png'
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Table } from "react-bootstrap";
import Column from '../Column/Column'
import AddRowBtn from '../AddRowBtn/AddRowBtn'
import "./DndTable.css";

const DndTable = () => {
  const employeeTableData = useSelector((state) => state.employeeTable)
  const employeeColumnData = useSelector((state) => state.employeeColumn)

  const [dataToAdd, setDataToAdd] = useState({
    id: 316287341,
    name: "שלמה",
    overLimitHours: '4:00',
    manualHours: '4:00',
    hours: '155:00',
    sumHours: '159:00'
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const el = document.getElementById("dndTable");
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
      <Table responsive id="dndTable" size="sm" >
        <thead>
          <Column data={employeeColumnData} />
        </thead>
        <tbody>
          {employeeTableData?.map((employee, index) => (
            <tr key={index} >
              <td className="handle" scope="row"><img src={ThreeDots} /></td>
              <td className="noWidth"><img src={BarChart} /></td>
              <td>{employee.sumHours}</td>
              <td>{employee.hours}</td>
              <td>{employee.overLimitHours}</td>
              <td>{employee.manualHours}</td>
              <td>{employee.name} <img className="barImage" src={Ellipse} /></td>
              <td>{employee.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddRowBtn data={dataToAdd} />
    </Container>
  );
}
export default DndTable;
