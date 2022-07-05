import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row } from 'react-bootstrap';

const Cards_Items = ({ manuapi }) => {
    console.log(manuapi);
    return (
        <>
            <Container >
                <Row >
                    {manuapi.map((curElem) => {
                        return (
                            <Card
                                style={{ width: '25rem' }}
                                className="mb-2 m-2" key={curElem.id}>
                                <Card.Body >
                                    <Card.Title>{curElem.id}</Card.Title>
                                    <Card.Title>{curElem.category}</Card.Title>
                                    <Card.Text>{curElem.name}</Card.Text>
                                    <Card.Img variant="top" src={curElem.image} style={{ width: '50px' }} />
                                    <Card.Text>{curElem.desc}</Card.Text>
                                    <Card.Text>{curElem.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Cards_Items