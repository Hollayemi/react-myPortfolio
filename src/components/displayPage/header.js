import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faRobot} from '@fortawesome/free-solid-svg-icons'

const Header = ({toggleSideBar}) => {

    return (
        <div className="flex justify-between fixed w-full shadow-lg z-40 bg-white items-center p-3 text-xl">
                        
            <i onClick={toggleSideBar} className="text-teal-900 px-3 block lg:hidden cursor-pointer"><FontAwesomeIcon icon={faBars} /></i>
            <i className="text-teal-900 px-3 cursor-pointer"><FontAwesomeIcon icon={faRobot} /></i>
            
        </div>
    )
}

export default Header