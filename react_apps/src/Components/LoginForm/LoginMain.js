import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './validationForm.css'
// import Form from 'react-bootstrap/Form';

const localStorageValues = () => {
    const localData = localStorage.getItem("fieldsData")
    if (localData) {
        return JSON.parse(localData);
    }
    else {
        return [];
    }
}

const LoginMain = () => {
    const initailValue = { fname: "", lname: "", email: "", password: "", cpassword: "" }
    const [iValues, setiValues] = useState(initailValue);
    const [getIValues, setGetIValues] = useState(localStorageValues());
    const [error, setError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const handler = (e) => {
        const { name, value } = e.target;
        setiValues({ ...iValues, [name]: value })
        // console.log(iValues)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newRecord = { ...iValues, id: new Date().getTime().toString() }
        // console.log(getIValues)

        setGetIValues([...getIValues, newRecord]);
        setError(validationFun(iValues))
        setIsSubmit(true);

        console.log(getIValues)
    }

    const validationFun = (validateValues) => {
        let errors = {};

        if (!validateValues.fname) {
            errors.fname = "First name is required"
        }
        if (!validateValues.email) {
            errors.email = "Email is requird"
        }
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(validateValues.email)) {
            errors.email = "Your email is not valid"
        }
        if (!validateValues.password) {
            errors.password = "Password is required"
        }
        if (!validateValues.cpassword) {
            errors.cpassword = "Password is required"
        }
        else if (validateValues.cpassword !== validateValues.password) {
            errors.cpassword = "Your password does not correct"
        }
        return errors;
    }

    useEffect(() => {
        localStorage.setItem("fieldsData", JSON.stringify(getIValues))
    }, [getIValues])

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit) {
            console.log(error)
        }
    }, [error])


    return (
        <Container style={{ height: "100vh" }}>
            {Object.keys(error).length === 0 && isSubmit ? (<div>Sign up successfully</div>) : (<pre>{JSON.stringify(error, undefined, 2)}</pre>)}
            <Form className='m-auto' style={{ width: "25rem" }}>
                <Form.Group className="mb-3" controlId="formBasicFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your First Name"
                        value={iValues.fname} onChange={handler} name='fname' />
                    {error.fname && <p>{error.fname}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Last Name" value={iValues.lname} onChange={handler} name='lname' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={iValues.email} onChange={handler} name='email' />
                    {error.email && <p>{error.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={iValues.password} onChange={handler} name='password' />
                    {error.password && <p>{error.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={iValues.cpassword} onChange={handler} name='cpassword' />
                    {error.cpassword && <p>{error.cpassword}</p>}
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitHandler}>
                    SignUp
                </Button>
            </Form>

            {
                getIValues.map((curElem) => {
                    return (
                        <div key={curElem.id}>
                            <p>{curElem.fname}</p>
                            <p>{curElem.lname}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                            <p>{curElem.cpassword}</p>
                        </div>
                    )
                })
            }

        </Container>
    )

}

export default LoginMain