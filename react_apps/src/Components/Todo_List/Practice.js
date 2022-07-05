import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const Practice = () => {
    const [inputValue, setInputValue] = useState("");
    const [getInput, setGetInput] = useState([]);

    const addValue = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
    }
    const getData = () => {
        const updateValue = {
            id: new Date().getTime().toString(),
            name: inputValue,
        }
        setGetInput([...getInput, updateValue]);
        setInputValue("")
    }
    const deleteData = (index) => {
        const deleteItem = getInput.filter((curElem) => {
            return curElem.id !== index;
        })
        setGetInput(deleteItem);
    }

    return (
        <>
            <Container >
                <Card>
                    <div className="inputs_values">
                        <input type="text" placeholder='Add Text' value={inputValue} onChange={addValue} />
                        <button className='btn btn-success' onClick={getData}>+</button>
                    </div>
                    <div className="fetched_Data">
                        {getInput.length ? getInput.map((curElem) => {
                            return (
                                <div className="inner_fetched_data">
                                    <label htmlFor="">{curElem.name}</label>
                                    <button className='btn btn-danger' onClick={() => deleteData(curElem.id)}>-</button>
                                </div>
                            )
                        }) : null}

                    </div>
                </Card>
            </Container>
        </>
    )
}

export default Practice