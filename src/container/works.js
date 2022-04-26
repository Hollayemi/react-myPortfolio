import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeftLong, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'

import * as Pictures from '../components/displayPage/workdone/allPictures'
import ProgressSkills from '../components/displayPage/workdone/progressSkills'



const Work = () => {

    const [Showing, setShowing] = useState(0)
    const [current, setCurrent] = useState(0)

    const viewHandler = (index) =>{
        setCurrent(0)
        setShowing(index)
    }

    const allWorks = Pictures.Logo.map((each,index) => {
        return(
            
            <div key={index} className='w-48 myMinWidth h-40 m-3 rounded overflow-hidden shadow-md border flex items-center flex-col'>
                <img src={each.logo} alt="Logo" className='h-20 w-3/' />
                <Link to={each.url}><h4>{each.name}</h4></Link>
                <button className='border text-sm px-3 mt-3' onClick={()=>viewHandler(index)}>View</button>
            </div> 
        )
    })

    //length of pictures
    const viewLen = (Pictures.Kemon[Showing].length)-1
    const arrRight = () =>{
        setCurrent(viewLen === current? 0 : current+1)
    }
    const arrLeft = () =>{
        setCurrent(current === 0 ? viewLen : current-1)
    }

    
    
    
    const eachProject = Pictures.Kemon[Showing].map((picture,index) => {
        return (
                <div key={index} 
                    className={ `${(current === index ? 'flex w-5/6 max-h-90 shadow-xl items-center justify-center transition ease-in-out duration-100 opacity-100' : 'hidden opacity-25')}` }>
                        <button className='flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-white mx-2' onClick={arrLeft}><i className='text-teal-900'><FontAwesomeIcon icon={faArrowLeftLong} /></i></button>
                        <img src={picture.image} className='w-3/4 min-h-min h-fit' alt='kemon_picture'/>
                        <button className='flex items-center justify-center w-12 h-12 rounded-full shadow-xl bg-white mx-2' onClick={arrRight} ><i className='text-teal-900'><FontAwesomeIcon icon={faArrowRightLong} /></i></button>
                </div>
        )
    })

    return (
        <div className='w-full mb-10' id='works'>

            <div className='allWorks w-full mb-10' data-aos='fade-up' data-aos-delay='100' data-aos-duration='700'>
                <h2 className='px-8 myMainText text-white font-bold text-xl py-8'>My Works</h2>
            </div>

            <div className='flex justify-center overflow-auto items-center' data-aos='fade-up' data-aos-delay='100' data-aos-duration='700'>
                {allWorks}
            </div>

            <div className='flex w-full items-center max-h-80 justify-center bg-teal-900 py-10'>
                {eachProject}
            </div>
            

            <div className='w-full flex flex-col items-center justify-evenly'>
                <div className='flex w-full sm:w-3/4  m-2 p-2'>
                    <ProgressSkills color='yellow' percent="75%" width="3/4" skill="Javascript" aos='fade-up-right'  aos_delay='50' />
                    <ProgressSkills color='teal' percent="90%" width="5/6" skill="JQuery" aos='fade-up-left'  aos_delay='50' />
                </div>
                <div className='flex w-full sm:w-3/4  m-2 p-2'>
                    <ProgressSkills color='blue' percent="60%" width="7/12" skill="OpenCV & YOLO" aos='fade-up-right'  aos_delay='150'/>
                    <ProgressSkills color='red' percent="80%" width="9/12" skill="React & Redux" aos='fade-up-left'  aos_delay='150'/>
                </div>
                <div className='flex w-full sm:w-3/4  m-2 p-2'>
                    <ProgressSkills color='blue' percent="90%" width="10/12" skill="HTML5" aos='fade-up-right'  aos_delay='250'/>
                    <ProgressSkills color='blue' percent="90%" width="10/12" skill="CSS3" aos='fade-up-left'  aos_delay='250'/>
                </div>
                <div className='flex w-full sm:w-3/4  m-2 p-2'>
                    <ProgressSkills color='blue' percent="80%" width="9/12" skill="PHP" aos='fade-up-right'  aos_delay='350'/>
                    <ProgressSkills color='blue' percent="70%" width="8/12" skill="Tailwind" aos='fade-up-left'  aos_delay='350'/>
                </div>
            </div>


        </div>
    )
}

export default Work
