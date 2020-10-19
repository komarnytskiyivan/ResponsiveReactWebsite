import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import {signInObjOne} from './Data'
function SignIn() {
    return (
        <div>
            <HeroSection {...signInObjOne} />
        </div>
    )
}

export default SignIn
