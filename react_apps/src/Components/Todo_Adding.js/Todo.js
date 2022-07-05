import React, { useState, useEffect } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap'
import './todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const getlocalStorageList = () => {
    const saveList = localStorage.getItem("todoList");

    if (saveList) {
        return JSON.parse(saveList);
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [inValue, setInValue] = useState("");

    // use this when you do not save data into the localstorage
    // const [todo_items, setTodoItems] = useState([]);

    // use this when you add data into the localstorage
    const [todo_items, setTodoItems] = useState(getlocalStorageList())

    // Edit the items
    const [isEditItem, setIsEditItem] = useState("");

    // This is only used when click the edited button ,the button edited icon shows into the input field
    const [togglebtn, setToggleBtn] = useState(false);

    // Get the value from input field
    const inputValue = (e) => {
        setInValue(e.target.value)
        // console.log(e.target.value);
    }

    // Add the data into the add button
    const GettingInData = () => {
        if (!inValue) {
            alert("Add a note")
        }
        // This is only used when I edit the perticular item data then it will edit and change the value of prevous value at that place
        else if (inValue && togglebtn) {
            setTodoItems(
                todo_items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        // i am getting all the previous value and also edit value that i have edited currently and save the data value that all happen in the input field so i am getting the value name of the input field (name: inValue) 
                        return { ...curElem, name: inValue }
                    }
                    else {
                        return curElem;
                    }
                })
            )
            //once I edit the item the i want to remove the edit icon from input field so use this process
            setInValue("")

            setIsEditItem("")
            // or
            // setIsEditItem(null)

            setToggleBtn(false)
        }
        else {
            const updateValue = {
                id: new Date().getTime().toString(),
                name: inValue,
            }
            setTodoItems([...todo_items, updateValue]);
            // Empty the input field 
            setInValue("")
            // console.log(updateValue)
        }
    }

    // now delete the item when we click any item
    const deleteItem = (index) => {
        const deleteIt = todo_items.filter((curElem) => {
            return curElem.id !== index;
        })
        setTodoItems(deleteIt);
    }

    //There are two ways to Delete All Items at a Time
    // Method == 1
    const deleteAllItems = (index) => {
        const deletAll = todo_items.filter((curElem) => {
            return curElem.id === index;
        })
        setTodoItems(deletAll);
    }

    // Method == 2

    /*const deleteAllItems =()=>{
        setTodoItems([]);
    }*/

    // Now add the data into the local storage because when we refresh it, it will not be able to vanish, for this we will use useEffect hook
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todo_items))
    }, [todo_items])

    // Now edit the item  and use find method to find the id of the items
    const editItem = (index) => {
        const edit_item_list = todo_items.find((curElem) => {
            return curElem.id === index;
        })
        // setInValue method is used when we click edit button then it will show that data into the input field means where we add our data so we use this method and get the the name of edit item
        setInValue(edit_item_list.name);
        // set the id of edited button
        setIsEditItem(index);
        // if it is true means i want to edit the item
        setToggleBtn(true);
    }

    return (
        <Container className='todo_container'>
            <Card className='todo_card shadow'>
                <Card.Body>
                    <Form>
                        <div className="inputValue mb-4">
                            <Form.Control type="text" placeholder="Add a Note"
                                value={inValue} onChange={inputValue}
                            />

                            {togglebtn ? (< Button className="btn btn-success btn-sm" onClick={GettingInData}>Edit</Button>)
                                :
                                (<Button className="btn btn-success btn-sm" onClick={GettingInData}>+</Button>)}

                        </div>

                    </Form>

                    {todo_items.map((curElem) => {
                        return (
                            <div className="inputValue mt-2" key={curElem.id}>
                                <Card.Text className='text_data'>{curElem.name}</Card.Text>
                                <button className='btn btn-success btn-sm' onClick={() => {
                                    editItem(curElem.id)
                                }}>Edit</button>
                                <button className='btn btn-danger btn-sm' onClick={() => {
                                    deleteItem(curElem.id)
                                }}>-</button>
                            </div>
                        )
                    })}

                    {/* This is the first method where we delete All items at a time */}
                    <button className='deleteAll' onClick={() => deleteAllItems(todo_items.id)}>Delete All</button>

                    {/* This is the second method where we delete All items at a time */}
                    {/* <button className='deleteAll' onClick={() => deleteAllItems(todo_items.id)}>Delete All</button> */}
                </Card.Body>
            </Card>
        </Container >
    )
}

export default Todo