import React from 'react'
import { Items } from './Navbar_Items'
import { NavLink } from 'react-router-dom'
import './navbarMain.css'

const NavbarMain = () => {
    const nav_items = Items.map((curElem, index) => {
        return (
            <li key={index}>
                <NavLink to={curElem.url}>
                    {curElem.title}
                </NavLink>
            </li>
        )
    })
    return (
        <nav>
            <div className="">

                <ul className='ul_items'>
                    <p className='logo'>VPN <font>Lab</font></p>
                    {nav_items}
                </ul>
            </div>
        </nav>
    )
}

export default NavbarMain