import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyArea = ({icon,color,name,aos,aos_delay}) => {
    return (
        <div className={`w-32 h-32 pl-5 flex flex-col justify-center shadow-lg m-3 animate-pulse border-t-4 border-${color}-800`} data-aos={aos} data-aos-delay={aos_delay} data-aos-duration='700'> 
            <i className={`"text-lg text-${color}-800 `} ><FontAwesomeIcon icon={icon}/></i>
            <br />
            <h3>{name}</h3>
        </div>
    )
}

export default MyArea
