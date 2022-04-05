import './Row.css'
import Ellipse from '../../assets/Images/Ellipse.png'
import ThreeDots from '../../assets/Images/ThreeDots.png'
import BarChart from '../../assets/Images/BarChart.png'

const Row = (props) => {
    return (
        <>
            {
                props.data?.map((employee, index) => (
                    <tr className='tableRow' key={index} >
                        <td className="center handle " scope="row"><img src={ThreeDots} /></td>
                        <td className='center barImage'><img src={BarChart} /></td>
                        <td className='center'>{employee.sumHours}</td>
                        <td className='center'>{employee.hours}</td>
                        <td className='center'>{employee.overLimitHours}</td>
                        <td className='center'>{employee.manualHours}</td>
                        <td className='right'>{employee.name} <img className='ellipse' src={Ellipse} /></td>
                        <td className='right'>{employee.id}</td>
                    </tr>
                ))
            }
        </>
    )
}
export default Row;