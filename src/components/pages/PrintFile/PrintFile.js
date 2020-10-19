import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import {printFileObjOne} from './Data'
function PrintFile() {
    return (
        <div>
            <HeroSection {...printFileObjOne} />
        </div>
    )
}

export default PrintFile
