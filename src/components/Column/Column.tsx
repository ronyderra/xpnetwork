import React from 'react'
import './Column.css'

interface Data {
    option: string,
    hoursSum: string,
    hours: string,
    manualHours: string,
    overHours: string,
    name: string,
    id: string
}

interface Props {
    data: [Data]
}

const Column: React.FC<Props> = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <tr className='tableRow' key={index}>
                        <th className="handle"></th>
                        <th className="handle">{item.option}</th>
                        <th className="handle">{item.hoursSum}</th>
                        <th className="handle">{item.hours}</th>
                        <th className="handle">{item.manualHours}</th>
                        <th className="handle">{item.overHours}</th>
                        <th className="handle">{item.name}  </th>
                        <th className="handle">{item.id}</th>
                    </tr>
                ))
            }
        </>
    )
}
export default Column;