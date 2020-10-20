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
                            <form className="home__print-form">
                            <div class="field" className="home__add-file">
                                <div class="input-group date  btn-file">
                                    <div class="input-group-append">
                                        <label for="attachmentName" class="input-group-text">
                                            <i class="fa fa-paperclip fa-1.2x" aria-hidden="true"></i>
                                            <input type="file" id="attachmentName" name="attachmentName" className="home__add-file-input"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <select class="browser-default custom-select" id="terminal-list" className="home__add-select">
                                <option value="0" selected="">Select terminal for printing</option>
                                <option value="1">№ 1 (НУ ЛП 4 корпус)</option>
                            </select>
                            <div class="d-flex justify-content-center" className="home__add-map">
                                <a href="https://www.google.com/maps/search/DrukBox/@49.8379347,24.0168108,15z">Show DrukBox terminals on the maps</a>
                            </div>
                            <form className="home__add-time">
                                <fieldset className="home__add-time-fieldset">
                                    <input id="input_from time-picker" class="datepicker custom-select" className="home__add-timepicker" type="time" name="time" />
                                </fieldset>
                            </form>
                            <Link to="/signin">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                            </form>
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