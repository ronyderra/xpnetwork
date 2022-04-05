import { addRow } from "../../redux/employeeSlice";
import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap";
import React from "react";

interface Props {
    data: {}
}

const AddRowBtn: React.FC<Props> = ({ data }) => {
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(addRow(data))}>Add Row</Button>
        </>
    )
}
export default AddRowBtn;



