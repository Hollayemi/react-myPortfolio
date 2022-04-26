import React from "react";

import Screen from "../components/displayPage/main/screen";
import About from './about'
import Work from './works'
import '../components/displayPage/display.css'
import Education from "./education";
import Contact from "./contact";



const Display = () =>{
     
    return(
        <main>
            <Screen />
            <div className="px-3">
                <About/>
                <Work/>
                <Education />
                {/* <br/><br/><br/><br/><br/><br/> */}
            </div>
            <Contact />

        </main>
    )
}

export default Display