import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey, faFileDownload} from '@fortawesome/free-solid-svg-icons'

import MyCV from '../../../Stephen CV.pdf'
import { Link } from "react-router-dom";
import { Link as MyLink } from "react-scroll";
import Aos from "aos";
import 'aos/dist/aos.css';

const Screen = (prop) =>{
    return (
        <div id='screen' className="myMain  min-h-screen  h-full flex items-center text-4xl">
            <div className="font-bold w-full h-full min-h-screen flex items-center text-center flex-col justify-center myMainText text-white">
                <h1><b>SOFTWARE</b> <i className="text-teal-900">DEVELOPER </i></h1>
                
                <div className="flex flex-col sm:flex-row">

                    <button className="border px-4 mx-2 my-2 py-2 sm:py-1 sm:my-0 ">
                        <Link to={MyCV} className="text-lg"><h5>download cv <FontAwesomeIcon icon={faFileDownload} /> </h5></Link>
                    </button>

                    <button className="border border-teal-300 px-4 mx-2 my-2 py-2 sm:py-1 sm:my-0 ">
                        <MyLink  spy={true} smooth={true} to="contact" className="text-lg"><h5>Start a project<FontAwesomeIcon icon={faKey} /></h5> </MyLink>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
Aos.init()

export default Screen