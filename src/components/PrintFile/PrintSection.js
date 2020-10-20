import React from 'react'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import './PrintSection.css'
function PrintSection({
    lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img, alt, imgStart
}) {
    return (
        <div className={lightBg ? 'home__print-section' : 'home__print-section darkBg'}>
            <div className="container">
                <div className="row home__print-row"
                style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                >
                    <div className="col">
                        <div className="home__print-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__print-subtitle' : 'home__print-subtitle dark'}>
                            {description}
                            </p>
                            
                            <Link to="/signin">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="home__print-img-wrapper">
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintSection