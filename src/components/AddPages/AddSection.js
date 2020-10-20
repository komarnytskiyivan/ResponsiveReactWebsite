import React from 'react'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import './AddSection.css'
function AddSection({
    lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img, alt, imgStart
}) {
    return (
        <div className={lightBg ? 'home__add-section' : 'home__add-section darkBg'}>
            <div className="container">
                <div className="row home__add-row"
                style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                >
                    <div className="col">
                        <div className="home__add-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__add-subtitle' : 'home__add-subtitle dark'}>
                            {description}
                            </p>
                            <form className="home__add-form">
                            <input required className="home__add-input" />
                            <Link to="/signin">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                            </form>
                        </div>
                    </div>
                    <div className="home__add-img-wrapper">
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSection