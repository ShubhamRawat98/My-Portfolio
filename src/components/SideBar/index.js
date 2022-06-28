import { Link, NavLink } from 'react-router-dom'

import './index.scss'

import LogoS from '../../assets/images/logo-s.png'
// import LogoSub from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCamera, faEnvelope, faGraduationCap, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Hamburger from 'hamburger-react'
import { useState } from 'react'


const Sidebar = () =>{
    const [isOpen, setOpen] = useState(false)
    const toggleSwitch=()=>{
         isOpen ? setOpen(false) : setOpen(true)
         console.log(isOpen)

    }
    

return (
    <div className="navbar">
        <Link className='logo' to ='/'>
            <img src={LogoS} alt="logo" />
           
        </Link>
        <nav className={isOpen ? "show":""}>
            <NavLink exact='true' activeclassname='active' className="links" to='/'>
                <FontAwesomeIcon icon={faHome} />
            </NavLink> 

            <NavLink exact='true' activeclassname='active' className='about-link links' to='/About'>
                <FontAwesomeIcon icon={faUser} />
            </NavLink> 

            <NavLink exact='true' activeclassname='active' className='studies-link links' to='/Studies'>
                <FontAwesomeIcon icon={faGraduationCap} />
            </NavLink> 
            <NavLink exact='true' activeclassname='active' className='photos-link links' to='/Photos'>
                <FontAwesomeIcon icon={faCamera} />
            </NavLink> 
            <NavLink exact='true' activeclassname='active' className='contact-link links' to='/Contact'>
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink> 

          
        </nav>
        <ul>
            <li>
                <a target="_blank"
                rel='noreferrer'
                href="https://www.linkedin.com/in/shubhamrawat99/"
                >
                <FontAwesomeIcon className='socialIcon' icon={faLinkedin} color="#0e0e0e" />
                </a>
                <a target="_blank"
                rel='noreferrer'
                href="https://www.instagram.com/shubhamrawat.22/"
                >
                <FontAwesomeIcon className='socialIcon' icon={faInstagram} color="#0e0e0e" />
                </a>
                <a target="_blank"
                rel='noreferrer'
                href="https://www.facebook.com/rawat8183"
                >
                <FontAwesomeIcon className='socialIcon'  icon={faFacebook} color="#0e0e0e" />
                </a>
            </li>
        </ul>
        <button className='navButton' onClick={toggleSwitch}>
        <Hamburger className="burger" toggled={isOpen} toggle={setOpen} />
        </button>

    </div>



)}

export default Sidebar;