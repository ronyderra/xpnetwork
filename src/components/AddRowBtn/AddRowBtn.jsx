import { addRow } from "../../redux/employeeSlice";
import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap";

const AddRowBtn = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(addRow(props.data))}>Add Row</Button>
        </>
    )
}
export default AddRowBtn;



