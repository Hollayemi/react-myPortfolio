import React from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faPhone, faInfoCircle, faCog, faTasks,faSchool, faClose} from '@fortawesome/free-solid-svg-icons'

import Stephen from "../../../asset/stephen.PNG"



const Sidebar = ({toggleSideBar}) => {
    return (
        <div className="bg-teal-900 w-full h-full flex items-start pt-16 oveflow-auto justify-center">
            <div className='m-3 block  absolute top-0 right-0 lg:hidden cursor-pointer'>
                <i onClick={toggleSideBar} className="text-white"><FontAwesomeIcon icon={faClose} /></i>
            </div>
            <ul className="flex flex-col justify-center items-center oveflow-auto">
                <img src={Stephen} alt="Profile_picture" className="rounded-full shadow-xl w-40 h-40" />
                <div className="mb-3 mt-3">
                    <h5 className="font-bold text-white text-sm text-center">Oluwasusi Stephen Olayemi</h5>
                    <h5 className="font-bold text-teal-500 text-sm text-center">Software Developer</h5>
                </div>

                <div className="flex flex-col justify-cnter">
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white pr-4"><FontAwesomeIcon  icon={faHome}/></i> <Link spy={true} smooth={true} to ="screen"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Home</p></Link></li>
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white pr-4"><FontAwesomeIcon icon={faInfoCircle} /></i> <Link spy={true} smooth={true} to ="about"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">About</p></Link></li>
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white  pr-4"><FontAwesomeIcon icon={faCog} /></i> <Link spy={true} smooth={true} to ="skills"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Skills</p></Link></li>
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white  pr-4"><FontAwesomeIcon icon={faTasks} /></i> <Link spy={true} smooth={true} to ="works"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Works</p></Link></li>
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white pr-4"><FontAwesomeIcon icon={faSchool} /></i> <Link spy={true} smooth={true} to ="education"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Education</p></Link></li>
                    <li className="flex cursor-pointer items-center text-xs py-2"><i className="text-white  pr-4"><FontAwesomeIcon icon={faPhone} /></i> <Link spy={true} smooth={true} to ="contact"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Contact</p></Link></li>
                </div>

                <div className="">
                    <p className="text-xs text-center text-gray-500 p-5 mt-10">
                       An investment in knowledge pays the best Interest. <br />
                       <b>Passion for learning is the only way you can never cease to grow</b>
                    </p>
                </div>
                <div className="w-2/4 h-1 bg-teal-100"></div>
            </ul>
        </div>
    )
}

export default Sidebar