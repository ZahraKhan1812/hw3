

import "../style/SignUp.css"
import {useState} from 'react'
//using props to connect one data to another
//when you sign up successfully, you can see the welcome page. This is happening because of states and props.
const SignUp = (props) => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //this tied to a dunction like changePassword function
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    
    const validatePasswords = () => {
       //event.preventDefault()
        if(password === confirmPassword){
            props.userAuthChanged()
            //alert("It worked!")
        }else{
            alert("Your passwords are not the same. Try again")
        }
    }


    return(
    <div>
            <h1>Sign Up!</h1>
     
        <form onSubmit={validatePasswords} className="sign-up">

            <label htmlFor="name">Name:</label>
            <input type = "text" name = "name" />
            <label htmlFor="password">Password:</label>
            <input type = "password" onChange={changePassword} value={password} 
            Password = "password"/>
            <label htmlFor="confirmPassword">ConfirmPassword:</label>
            <input type = "password" onChange={changeConfirmPassword} value={confirmPassword}
            ConfirmPassword="confirmPassword"/>
            <input type = "submit" />
        </form>
    </div>
    )

}
export default SignUp