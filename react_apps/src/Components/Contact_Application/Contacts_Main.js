import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdAccountCircle } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const Contacts_Main = () => {
  const [iValues, setIvalues] = useState("")
  const [getValues, setGetValues] = useState([])

  const handler = (e) => {
    const { name, value } = e.target;

    setIvalues({ ...iValues, [name]: value })
    // console.log(iValues)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setGetValues([...getValues, { id: uuidv4(), ...iValues }])
    console.log(getValues)
  }


  const deleteItem = (ind) => {
    const deleteIt = getValues.filter((curElem) => {
      return curElem.id !== ind;
    })
    setGetValues(deleteIt)
    console.log(deleteIt)
  }

  return (

    <Container>
      <h1 style={{ textAlign: "center" }}>Contact Manager</h1>
      <hr className="mb-4" />
      <Form style={{ width: "33rem", margin: "auto" }}>
        <h2 >Add Contacts</h2>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name='fname' value={iValues.fname} onChange={handler} />
        </Form.Group >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='mt-2'>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name='email' value={iValues.email} onChange={handler} />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-1' onClick={submitHandler}>
          Add
        </Button>
      </Form>
      <div className='mt-4' style={{ width: "33rem", margin: "auto" }}>
        {getValues.map((curElem, index) => {
          return (
            <div key={curElem.id}>
              <div className='d-flex'>
                <MdAccountCircle
                  color="blue"
                  size="4rem"
                  style={{
                    color: "black",
                    marginRight: "1rem",
                    marginTop: "0.6rem"
                  }}
                  className="black-color"
                />
                <div style={{ marginTop: "0.3rem" }}>
                  <p style={{ marginTop: "0.5rem", marginBottom: "0px", fontSize: "1.4rem" }}>{curElem.fname}</p>
                  <p >{curElem.email}</p>
                  <BsFillTrashFill
                    onClick={() => deleteItem(curElem.id)}
                    size='2rem'
                    style={{ float: "right", marginRight: "-16rem", marginTop: "-3.2rem", color: "green" }}
                  />
                </div>
              </div>
              <div
                style={{
                  background: 'lime',
                  height: '3px',
                }}
              />
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Contacts_Main