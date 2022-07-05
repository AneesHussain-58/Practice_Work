import { useState } from 'react'

const LoginValidation = (validate) => {
    const [inputValue, setInputValue] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const [getInputData, setGetInputData] = useState("")
    const [errors, setErrors] = useState({})

    const handler = (e) => {
        /* const name = e.target.name
         const value = e.target.value
         setInputValue({ ...inputValue, [name]: value })*/

        // we can use above usage for this way
        const { name, value } = e.target;

        setInputValue({ ...inputValue, ... { [name]: value } })

    }

    const submitHandler = (e) => {
        e.preventDefault();

        const newRecord = { ...inputValue, id: new Date().getTime().toString() }

        setGetInputData([...getInputData, newRecord])

        // For the errors 
        setErrors(validate(inputValue))
        setInputValue("")
    }


    return { inputValue, submitHandler, handler, getInputData, errors }
}

export default LoginValidation