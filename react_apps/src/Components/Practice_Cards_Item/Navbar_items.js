import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navbar_items = ({ getData, uniqueValue }) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {uniqueValue.map((curElem) => {
                            return (
                                <Nav className="me-auto" key={curElem.toString()}>
                                    <Nav.Link href="#home" onClick={() => getData(curElem)}>{curElem}</Nav.Link>
                                </Nav>
                            )
                        })}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbar_items