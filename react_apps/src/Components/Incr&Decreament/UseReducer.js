import React, { useReducer } from 'react'
import { Container, Card } from 'react-bootstrap'

const reducer = (stateValue, action) => {
    if (action.type === 'INCR') {
        stateValue = stateValue + 1;
    }
    // You can add condition here for the decreament when it reaches the 0 
    // if (stateValue > 0 && action.type === "DECR") {
    //     stateValue = stateValue - 1;
    // }

    if (action.type === "DECR") {
        stateValue = stateValue - 1
    }
    return stateValue;
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <Container className='main_container'>
            <Card className='main_card'>
                <p className='result_nums'>{state}</p>
                <div className="buttons_group">
                    <div className="buttons m-3">
                        <button className='btn btn-primary' onClick={() => dispatch({ type: "INCR" })}>Increament</button>
                    </div>
                    <div className="buttons m-3">
                        <button className='btn btn-danger' onClick={() => state > 0 ? dispatch({ type: "DECR" }) : dispatch(0)}>Decreament</button>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default UseReducer