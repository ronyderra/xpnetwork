import React, { useEffect, useState } from "react";
import tableDragger from "table-dragger";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { Container, Table } from "react-bootstrap";
import Column from '../Column/Column'
import AddRowBtn from '../AddRowBtn/AddRowBtn'
import Row from '../Row/Row'
import "./DndTable.css";

const DndTable: React.FC = () => {
  const employeeTableData = useAppSelector((state) => state.employeeTable)
  const employeeColumnData = useAppSelector((state) => state.employeeColumn)

  const [dataToAdd, setDataToAdd] = useState({
    id: 316287341,
    name: "שלמה",
    overLimitHours: '4:00',
    manualHours: '4:00',
    hours: '155:00',
    sumHours: '159:00'
  })

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
    <>
      <h1 className="title">Drag and Drop React-Table</h1>
      <AddRowBtn data={dataToAdd} />
      <div className="container">
        <table className="table" id="dndTable">
          <thead className="tableHead">
            <Column data={employeeColumnData} />
          </thead>
          <tbody className="tableBody">
            <Row data={employeeTableData} />
          </tbody>
        </table>
      </div>
    </>
  );
}
export default DndTable;
