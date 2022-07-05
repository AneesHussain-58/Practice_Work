import React, { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'

const UseEffct = () => {
    const [myNum, setMyNum] = useState(0);

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

export default UseEffct