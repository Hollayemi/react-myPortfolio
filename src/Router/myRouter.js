import React, {useState} from "react"
import { useRoutes } from 'react-router-dom';

import Display from '../container/displaySection'
import Sidebar from '../components/displayPage/sidebar/sidebar';
import Header from '../components/displayPage/header'

const MyRouter = () => {

    const [show, showSidebar] = useState(false)

    const showFunc = () =>{
        showSidebar(!show)
    }
    let allRoutes = useRoutes([
        
        {
            path: "/",
            children: [
                {path:"/",
                element:
                    <> 
                        <div className="block lg:hidden"> <Header toggleSideBar={showFunc} /> </div>
                        <div className='flex'>
                            <div className={` transition xl:w-1/5 lg:w-1/4 lg:block md:w-2/5 sm:2/3 ${show === true ? 'md:block sm:block block': 'md:hidden sm:hidden hidden' } z-50 h-full fixed bg-teal-900`}>
                                <Sidebar toggleSideBar={showFunc}/>
                            </div>
                            <div className="xl:w-1/5 lg:w-1/4 sm:w-0"></div>
            
                            <div className='w-full xl:w-4/5 lg:w-3/4 '>
                                <Display />
                            </div>
                        </div> 
                    </>}
            ]
        }
    ])
    return allRoutes
}

export default MyRouter
