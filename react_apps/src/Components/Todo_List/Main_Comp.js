import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import './main_comp.css'

const Main_Comp = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // Getting the data from input field
    const fetchedData = (e) => {
        setInputData(e.target.value)
        console.log(e.target.value);
    }

    // display the data from fetchedData method
    /*const btnData = () => {
        setItems([...items, inputData])
        console.log(items)
        setInputData("");
    }*/

    // This method only used when you want to delete any item from you saved list
    const btnData = () => {
        const updateItems = {
            id: new Date().getTime().toString(),
            name: inputData,
        }
        setItems([...items, updateItems]);
    }

    // Deleting the data
    const deleteData = (index) => {
        console.log('id is ', index);
        const deleteItems = items.filter((curElem) => {
            console.log(curElem.id);
            return curElem.id !== index;
        })
        setItems(deleteItems);
    }

    return (
        <section style={{ backgroundColor: "yellow", height: "100vh" }}>
            <Container className='container_css'>
                <Card className='m-auto cards_todoData'>
                    <div className="todo_data">
                        <input type="text" placeholder='Add Item ' value={inputData} onChange={fetchedData} />
                        <button className='btn btn-secondary btn-sm mb-1' onClick={btnData}>+</button>
                    </div>
                    {items.length ? items.map((curElem) => {
                        return (
                            <div className="fetched_Data" key={curElem.id}>
                                <p>{curElem.name} <button className='btn btn-outline-secondary btn-sm btns_sm' onClick={() => deleteData(curElem.id)}>delete</button></p>
                            </div>

                        )
                    }) : null}
                </Card>
            </Container>
        </section>

    )
}

export default Main_Comp