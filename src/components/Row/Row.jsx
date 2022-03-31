import './Row.css'
import Ellipse from '../../assets/Ellipse.png'
import ThreeDots from '../../assets/ThreeDots.png'
import BarChart from '../../assets/BarChart.png'

const Row = (props) => {
    return (
        <>
            {
                props.data?.map((employee, index) => (
                    <tr className='tableRow' key={index} >
                        <td className='center' scope="row"><img src={ThreeDots} /></td>
                        <td className='center barImage'><img src={BarChart} /></td>
                        <td className='center'>{employee.sumHours}</td>
                        <td className='center'>{employee.hours}</td>
                        <td className='center'>{employee.overLimitHours}</td>
                        <td className='center'>{employee.manualHours}</td>
                        <td className='right'>{employee.name} <img className="barImage" src={Ellipse} /></td>
                        <td className='right'>{employee.id}</td>
                    </tr>
                ))
            }
        </>
    )
}
export default Row;