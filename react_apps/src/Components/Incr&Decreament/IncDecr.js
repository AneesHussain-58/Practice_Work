import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import './inc&dec.css'

const IncDecr = () => {
    const [myNum, setMyNum] = useState(0);

    // we can do this same process by using the useEffect hook example pop up the whatsapp sms on top that showed everyone
    useEffect(() => {
        document.title = `Chat(${myNum})`;
    })

    return (
        <Container className='main_container'>
            <Card className='main_card'>
                <p className='result_nums'>{myNum}</p>
                <div className="buttons_group">
                    <div className="buttons m-3">
                        <button className='btn btn-primary' onClick={() => (myNum >= 0 ? setMyNum(myNum + 1) : setMyNum(0))}>Increament</button>
                    </div>
                    <div className="buttons m-3">
                        <button className='btn btn-danger' onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>Decreament</button>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default IncDecr