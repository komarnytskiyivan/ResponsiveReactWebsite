import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import {historyObjOne} from './Data'
function History() {
    return (
        <div>
            <HeroSection {...historyObjOne} />
        </div>
    )
}

export default History
