const ErrorValidation = (inputValues) => {
    let error = {};

    if (inputValues.fname) {
        error.fname = "Your name is required"
    }
    // Email
    if (!inputValues.email) {
        error.email = "Email is required"
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValues.email)) {
        error.email = "Email address is invalid"
    }

    // password
    if (!inputValues.password) {
        error.password = "Password is required";
    }
    else if (inputValues.password.length < 6) {
        error.password = 'Password needs to be 6 Characters or more'
    }

    // confirm password
    if (!inputValues.cpassword) {
        error.cpassword = "Password is required"
    }
    else if (inputValues.cpassword !== inputValues.password) {
        error.cpassword = "Password does not match"
    }

    return error
}
export default ErrorValidation