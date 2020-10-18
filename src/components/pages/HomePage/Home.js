import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import {homeObjOne} from './Data'
function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
        </div>
    )
}

export default Home
