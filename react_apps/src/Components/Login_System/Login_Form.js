import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import validate from './ErrorValidation'
import LoginValidation from './LoginValidation'

const Login_Form = () => {
    const { inputValue, submitHandler, handler, getInputData, errors } = LoginValidation(validate)

    console.log(getInputData)

    return (
        <>
            <Container style={{ height: "100vh" }}>
                <Form className='m-auto' style={{ width: "25rem" }} onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First_Name" name='fname' value={inputValue.fname} onChange={handler} />
                        {errors.fname && <p>{errors.fname}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last_Name" name='lname' value={inputValue.lname} onChange={handler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name='email' value={inputValue.email} onChange={handler} />
                    </Form.Group>
                    {errors.email && <p>{errors.email}</p>}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" value={inputValue.password} name='password' onChange={handler} />
                    </Form.Group>
                    {errors.password && <p>{errors.password}</p>}

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Confirm Password" value={inputValue.cpassword} name='cpassword' onChange={handler} />
                    </Form.Group>
                    {errors.cpassword && <p>{errors.cpassword}</p>}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login_Form