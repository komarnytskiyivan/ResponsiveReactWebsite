import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';
import {Button} from '../Button/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize',showButton);
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="Navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    DrukBox
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/PrintFile" className="nav-links">
                            Print file
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/History" className="nav-links">
                            History
                        </Link>
                    </li>
                    <li className="nav-item" onClick={closeMobileMenu}>
                        <Link to="/AddPages" className="nav-links">
                            Add pages
                        </Link>
                    </li>
                    <li className="nav-btn" onClick={closeMobileMenu}>
                        {button ? (
                            <Link to="/SignIn"className="btn-link">
                                <Button buttonStyle="btn--outline">SignIn</Button>
                            </Link>
                        ):(
                        <Link to="/SignIn" className="btn-link">
                        <Button buttonSize="btn--mobile" buttonStyle="btn--outline">SignIn</Button>
                        </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
