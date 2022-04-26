import React, { useState } from 'react'
import EachLevel from '../components/displayPage/educations/eachLevel'
import {faMinimize, faMaximize} from '@fortawesome/free-solid-svg-icons'

const Education = () => {

    const [showing, setShowing] = useState(0)
    
    const moreHandler = number => {
        setShowing(number)
    }
    return (

        <div className='w-full flex flex-col items-center justify-center pt-10' id="education">
            <EachLevel
                aos='fade-up-left'  
                aos_delay='50'
                currState = {showing === 1 ? 'block' : 'hidden'}
                moreHandler={showing !== 1 ? ()=>moreHandler(1) :  ()=>moreHandler(0)}
                level= {`O'Level (SSCE 2017)`}
                icon = {showing === 1 ? faMinimize : faMaximize}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />
                

            <EachLevel
                aos='fade-up-left'  
                aos_delay='150'
                currState = {showing === 2 ? 'block' : 'hidden'}
                moreHandler={showing !== 2 ? ()=>moreHandler(2) :  ()=>moreHandler(0)}
                level= 'B.sc (in view 2017 - 2022)'
                icon = {showing === 2 ? faMinimize : faMaximize}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />

            <EachLevel
                aos='fade-up-left'  
                aos_delay='250'
                currState = {showing === 3 ? 'block' : 'hidden'}
                moreHandler={showing !== 3 ? ()=>moreHandler(3) :  ()=>moreHandler(0)}
                level= 'Cousera Javascript and React'
                icon = {showing === 3 ? faMinimize : faMaximize}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />

            <EachLevel
                aos='fade-up-left'  
                aos_delay='350'
                currState = {showing === 4 ? 'block' : 'hidden'}
                moreHandler={showing !== 4 ? ()=>moreHandler(4) :  ()=>moreHandler(0)}
                level= 'Udemy Python'
                icon = {showing === 4 ? faMinimize : faMaximize}
                more='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' />


        </div>
    )
}

export default Education
