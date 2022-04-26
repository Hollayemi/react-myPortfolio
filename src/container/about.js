import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe, faComputer, faRobot, faDiamond, faDatabase, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'

import MyArea from "../components/displayPage/about/myArea";
import MySkill from "../components/displayPage/about/mySkill";

const About = (prop) =>{
    return (
        <div className="" id='about'>
            <div className="w-full h-1 bg-teal-900  sm:-ml-5 mb-10"></div>
            <p className="font-bold text-teal-900 pl-1 md:pl-5">About us</p>
            <p className="text-sm w-full md:w-5/6 mt-10 pl-2 sm:pl-5 lg:pl-10 leading-7">
                Hi, my name is Stephen Oluwasusi, I am software developer with experience in building websites for small, medium and large sized businesses. Whether you are trying yto win work, list your services or even create a whole online store - I can help.
                <br /><br />
                I am experienced in HTML, CSS3, React, JQuery, WordPress, Redux, Tailwind, Javascript, materialUi, PHP Firebase projects ( Firestore, Real-time Firebase etc... ). <br />
                I will fully manage your brief from start to finish. <br /><br />
                Regular communication is really important to me, so let's keep in touch!.
            </p>

            <div className="flex w-full mt-16 flex justify-evenly flex-wrap">
                
                <MyArea name="Web Development" color="purple" icon={faGlobe} aos='fade-right'  aos_delay='200'/>
                <MyArea name="Desktop application" color="red" icon={faComputer} aos='fade-right'  aos_delay='50'/>
                <MyArea name="Artificial Intelligence" color="blue" icon={faRobot} aos='fade-left' aos_delay='50' />
                <MyArea name="Graphics Design" color="purple" icon={faDiamond} aos='fade-left' aos_delay='200' />
            </div>


            <div className="bg-teal-500 w-full py-5 mt-8 flex justify-between items-center px-2 md:px-6">
                <h2 className="font-bold pl-4 text-black">SOME OF MY EXPERTISE</h2>
                <i className="border-2 p-3 border-black rounded mr-5 lg:mr-10"><FontAwesomeIcon icon={faArrowRightLong} /></i>
            </div>

            <div className="flex w-full mt-16 flex justify-evenly flex-wrap" id='skills'>

                <MySkill name="React.js" color="teal" icon="fa-react" aos='flip-up'  aos_delay='50'/>
                <MySkill name="SQL" color="purple" icon={faDatabase} aos='fade-down'  aos_delay='200'/>
                <MySkill name="Javascript" color="yellow" icon="fa-js" aos='flip-up'  aos_delay='200'/>
                <MySkill name="Python" color="blue" icon="fa-python" aos='fade-down'  aos_delay='50'/>

            </div>

            <br /><br />
            <br /><br />
        </div>
    )
}

export default About