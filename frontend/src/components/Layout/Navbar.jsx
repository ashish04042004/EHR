import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { GiCrossFlare, GiCrossMark, GiCrossShield, GiCrossbow, GiCrossedAirFlows, GiCrossedChains, GiCrossroad, GiHamburgerMenu } from 'react-icons/gi';
import logo1 from "../../assests/logo.jpg";
import "./Navbar.css"; // Import CSS file
import { FaCross, FaCrosshairs } from 'react-icons/fa';

function Navbar() {
    const path=window.location.pathname;
    const [show, setShow] = useState(false);
    const { isAuthorized, setIsAuthorized, user } = useContext(Context);
    const navigateTo = useNavigate();
    const handleLogout = async () => {
     
    }

    return (
        <div>
        {path==="/register"||path==="/login"?<></>:<>
        <nav>
            <div className='nav_container'>
                <div className='logo'>
                    <img src={logo1} alt='logo' />
                </div>
                <ul className={`navbar-content ${show ? "show" : ""}`}> 
                  <li>
                        <Link to={"/"} onClick={() => setShow(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/booktest"} onClick={() => setShow(false)}>Book a Test</Link>
                    </li>
                    <li>
                        <Link to={"/nearcenter"} onClick={() => setShow(false)}>
                            Near Center
                        </Link>
                    </li>

                            <li>
                                <Link to={"/ManualEntry"} onClick={() => setShow(false)}>
                                   Manual Entry
                                </Link>
                            </li>
                            <li>
                                <Link to={"/serviceProvider"} onClick={() => setShow(false)}>
                                   Service Provider
                                </Link>
                            </li>

                    
                   {!isAuthorized?<div><Link to={"/login"}>Login/</Link>
                   <Link to={"/register"}>SignUp</Link>
                   </div>: <button onClick={handleLogout}>LOGOUT</button>}
                </ul>
                <div className='hamburger'>
                   {!show? <GiHamburgerMenu onClick={() => setShow(!show)} /> :<GiCrossedChains onClick={() => setShow(!show)} />
                     }  </div>
            </div>
        </nav>
    </>
        }
        </div>
    )
}

export default Navbar;
