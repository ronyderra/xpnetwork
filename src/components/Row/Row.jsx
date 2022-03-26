import './Row.css'
import Ellipse from '../../assets/Ellipse.png'
import ThreeDots from '../../assets/ThreeDots.png'
import BarChart from '../../assets/BarChart.png'

const Row = (props) => {
    return (
        <>
            {
                props.data?.map((employee, index) => (
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
                ))
            }
        </>
    )
}
export default Row;