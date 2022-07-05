import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './nav_bars_links.css'

const NavbarComp = ({ filterItem, uniqueUpdatedlist }) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                {uniqueUpdatedlist.map((curElem) => {
                    return (
                        <Container key={curElem.toString()}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="m-auto px-5 nav_links_items">
                                    <Nav.Link className='items' href="#" onClick={() => filterItem(curElem)}>{curElem}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    )
                })}
                {/* <Nav.Link className='items' href="#home" onClick={() => filterItem("Breakfast")}>Breakfast</Nav.Link>
                        <Nav.Link className='items' href="#home" onClick={() => filterItem("Evening")}>Evening</Nav.Link>
                        <Nav.Link className='items' href="#home" onClick={() => filterItem("Lunch")}>Lunch</Nav.Link>
                        <Nav.Link className='items' href="#home" onClick={() => filterItem("Dinner")}>Dinner</Nav.Link>
                        <Nav.Link className='items' href="#link" onClick={()=>setManuapi(ManuApi)}>All</Nav.Link> */}

            </Navbar>
        </>
    )
}

export default NavbarComp