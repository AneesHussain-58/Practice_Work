import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import 'aos/dist/aos.css'

const Main_Card = (props) => {
    return (
        <Card className='mt-3 m-3 overflow-hidden shadow' data-aos={props.aos} data-aos-offset={props.aos_offset} style={{ width: "25rem" }}>
            <Card.Img variant="top" src={props.img1} style={{ height: "20rem" }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Main_Card