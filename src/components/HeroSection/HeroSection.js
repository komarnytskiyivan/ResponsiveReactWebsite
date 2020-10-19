import React from 'react'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'
function HeroSection({
    lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img, alt, imgStart
}) {
    return (
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                            {description}
                            </p>
                            <Link to="/signin">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="home__hero-img-wrapper">
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection