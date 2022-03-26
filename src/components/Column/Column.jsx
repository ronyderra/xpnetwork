import { useState } from "react";
import './Column.css'

const Column = (props) => {
    return (
        <>
            {
                props.data.map((item, index) => (
                    <tr key={index}>
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