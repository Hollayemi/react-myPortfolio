import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MySkill = ({name,icon,color,aos,aos_delay}) => {
    return (
        <div className={`w-32 h-32 md:h-40 md:w-40 pl-2 flex flex-col justify-center shadow-lg m-3 relative border-t-4 border-${color}-800`} data-aos={aos} data-aos-delay={aos_delay} data-aos-duration='700'> 

            <h3 className={`w-20 h-8 flex items-center justify-center bg-${color}-800 text-sm text-center text-white absolute top-0 left-0`}> {name} </h3>
            <h3 className={`w-10 h-8 flex items-center justify-center bg-${color}-800 text-sm text-center text-white absolute top-0 right-0`}><i className={`fa ${icon}`}></i></h3>
            <div>
                <p className="text-6xl flex items-center justify-center leading-7 pt-4">
                    <i className={`font-xl text-${color}-800`}><FontAwesomeIcon icon={icon}/></i>
                </p>
            </div>

        </div>
    )
}

export default MySkill
