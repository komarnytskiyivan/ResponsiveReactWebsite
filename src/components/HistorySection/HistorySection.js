import React from 'react'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import './HistorySection.css'
function HistorySection({
    lightBg,topLine,buttonLabel,img, alt, imgStart
}) {
    return (
        <div className={lightBg ? 'home__history-section' : 'home__history-section darkBg'}>
            <div className="container">
                <div className="row home__history-row"
                style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                >
                    <div className="col">
                        <div className="home__history-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <table class="table" id="table-files">
                                <thead class="thead-dark" className="home_history-thead">
                                    <tr>
                                        <th scope="col">Filename</th>
                                        <th scope="col">Printing Date</th>
                                        <th scope="col">Page Number</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <Link to="/signin">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="home__history-img-wrapper">
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistorySection