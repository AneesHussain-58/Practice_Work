import React, { useEffect } from 'react'
import Main_Card from './Main_Card'
import backimg from './images/back_ing.jpg'
import f from './images/food1.jpg'
import b from './images/background.jpg'
import bk from './images/burger.jpg'
import s from './images/shopping-2.jpg'
import fr from './images/form_back.jpg'
import { Container, Row } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Cards_Items = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <Container>
            <Row>
                <Main_Card aos="fade-up" aos_offset="100" img1={backimg} title="Anees Hussain" desc="This is the description" />
                <Main_Card aos="fade-up" aos_offset="100" img1={b} title="Anees Hussain" desc="This is the description" />
                <Main_Card aos="fade-up" aos_offset="100" img1={backimg} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-up" aos_offset="100" img1={bk} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={s} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={fr} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={backimg} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={f} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={s} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-left" aos_offset="100" img1={bk} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
                <Main_Card aos="fade-up" aos_offset="100" img1={backimg} title="Anees Hussain" desc="This is an para that this is about the content of the paragraph so be like a that" />
            </Row>
        </Container>
    )
}

export default Cards_Items