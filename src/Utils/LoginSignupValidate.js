/* eslint-disable no-useless-escape */

export const LoginSignupValidate = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid){
        return "Please enter a valid email"
    }else if (!isPasswordValid){
        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
    }else{
        return null
    }
 
}

