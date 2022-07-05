import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './todo_comp.css'
import { AiOutlinePlus, AiFillDelete, AiOutlineBank } from "react-icons/ai"
import { Container, Card, Row, FormControl, InputGroup } from 'react-bootstrap'
import img2 from './adding.svg'
import todo from './todo.jpg'

// Store the Todos data into the localStorage 
const getTodoData = () => {
    const saveTodo = localStorage.getItem("myItems")

    if (saveTodo) {
        return JSON.parse(saveTodo);
    }
    else {
        return [];
    }
}

const Todo_Comp = () => {
    const [inValue, setInValue] = useState("")
    const [addData, setAddData] = useState(getTodoData());
    const [isEditedItem, setIsEditedItem] = useState("");
    const [togglebtn, setToggleBtn] = useState(false)

    const onHandle = (e) => {
        setInValue(e.target.value);
    }

    const addingDataInput = () => {
        if (inValue && togglebtn) {
            setAddData(addData.map((curElem) => {
                if (curElem.id === isEditedItem) {
                    return { ...curElem, name: inValue }
                }
                else {
                    return curElem
                }
            }))
        }
        else {
            const updateItem = {
                id: new Date().getTime().toString(),
                name: inValue,
            }
            console.log(updateItem)
            setAddData([...addData, updateItem]);
            setInValue("")
        }
        // After edit, the input value is set to be empty
        setInValue("")

        // when we edit the item then icon will replace to original (+)
        setToggleBtn(false)

    }

    // Edit the item
    const editItem = (index) => {
        const edited = addData.find((curElem) => {
            return curElem.id === index;
        })
        setInValue(edited.name)
        setToggleBtn(true)
        setIsEditedItem(index)
    }

    // Delete the item from added item
    const deleteItem = (index) => {
        const delItem = addData.filter((curElem) => {
            return curElem.id !== index;
        })
        setAddData(delItem)
        setInValue("")
    }


    // Delete All Items
    const deleteAllItems = () => {
        // return addData === ""
        setAddData([])
        console.log("Delelte")
    }

    // store the data into the localStorage 

    useEffect(() => {

        localStorage.setItem("myItems", JSON.stringify(addData))

    }, [addData])


    return (
        <section id='section'>
            <Container>
                <Row className='card_todos'>
                    <Card className='inner_cards' id='img-icon'>
                    </Card>
                    <Card className='inner_cards'>
                        <Card.Img variant="top" src={img2} className='todo_img' />
                        <Card.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                                <FormControl
                                    placeholder="Add Your Note"
                                    value={inValue}
                                    onChange={onHandle}
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                {togglebtn ? (<InputGroup.Text id="basic-addon1" onClick={addingDataInput}><AiOutlineBank /></InputGroup.Text>) : (<InputGroup.Text id="basic-addon1" onClick={addingDataInput} ><AiOutlinePlus /></InputGroup.Text>)}

                            </InputGroup>
                            {addData.map((curElem) => {
                                return (
                                    <InputGroup className="mb-3  pb-2" key={curElem.id}>
                                        <InputGroup.Text id="basic-addon1" style={{ width: "24.2rem" }}>{curElem.name}</InputGroup.Text>

                                        <InputGroup.Text id="basic-addon1" onClick={() => editItem(curElem.id)}><AiOutlineBank /></InputGroup.Text>

                                        <InputGroup.Text id="basic-addon1" onClick={() => deleteItem(curElem.id)}><AiFillDelete /></InputGroup.Text>
                                    </InputGroup>
                                )
                            })}
                            <button className='btn btn-danger d-flex m-auto' onClick={() => deleteAllItems(addData.id)}>Delete All</button>

                        </Card.Body>
                    </Card>

                </Row>
            </Container>
        </section>
    )
}

export default Todo_Comp