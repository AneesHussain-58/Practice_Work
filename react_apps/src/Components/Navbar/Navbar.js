import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import NavbarMain from './NavbarMain'
import Home from './Home'
import About from './About'
import Contacts from './Contacts';
import Services from './Services';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='containers'>
            <NavbarMain />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </div>
    )
}

export default Navbar