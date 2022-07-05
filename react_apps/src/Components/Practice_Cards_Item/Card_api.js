import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Row } from 'react-bootstrap'

const Card_api = ({ getApi }) => {
    return (
        <>
            <Container>
                <Row>
                    {getApi.map((curElem) => {
                        return (
                            <Card className='m-2' style={{ width: '18rem' }} key={curElem.id}>
                                <Card.Body>
                                    <Card.Title>{curElem.id}</Card.Title>
                                    <Card.Title>{curElem.category}</Card.Title>
                                    <Card.Text>{curElem.name}</Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={curElem.image} />
                                <Card.Text>{curElem.desc}</Card.Text>
                                <Card.Title>{curElem.price}</Card.Title>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Card_api