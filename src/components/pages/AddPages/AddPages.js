import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import {addPagesObjOne} from './Data'
function AddPages () {
    return (
        <div>
            <HeroSection {...addPagesObjOne} />
        </div>
    )
}

export default AddPages
