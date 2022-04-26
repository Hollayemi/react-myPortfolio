import React from 'react'

const ProgressSkills = ({color,skill,percent,width,aos,aos_delay}) => {
    return (
        <div className='flex flex-col w-1/2 m-3' data-aos={aos} data-aos-delay={aos_delay} data-aos-duration='700'>
            <div className='flex justify-between'>
                <p>{skill}</p>
                <p>{percent}</p>
            </div>
            <div className='bg-gray-200 h-2 rounded flex items-center '>
                <div className={`h-full bg-${color}-500 w-${width} rounded`}></div>
                <div className={`h-3 w-3 rounded-full bg-${color}-500 -m-3 shadow`}></div>
            </div>
        </div>
    )
}

export default ProgressSkills
