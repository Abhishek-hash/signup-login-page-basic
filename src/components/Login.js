import React, { useState } from 'react'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log("submitting the Login form data:", name, password)
        //Simple validation
        if(name === "" || password === "") alert('Please fill the credentials.')
        else {
            // Get the array of userdata from localStorage
            let userArrfromLS = JSON.parse(localStorage.getItem("user"))
            console.log("userArrfromLS:", userArrfromLS)
            console.log("userArrfromLS:", typeof (userArrfromLS))
            console.log("length of user:", JSON.parse(localStorage.getItem("user")), JSON.parse(localStorage.getItem("user")).length)

            // Iterate over the userArrfromLS to check if the user name already exists.
            for(let val in userArrfromLS) {
            
                console.log("user:", userArrfromLS[val].name)
                if(name !== userArrfromLS[val].name) {
                    alert("Username is not registered. Please enter valid username.")
                    break;
                }
                else if (name === userArrfromLS[val].name && password !== userArrfromLS[val].password) {
                    alert("Password is incorrect.")
                    break;
                }

                else {
                    alert("You are logged in.")
                    break;
                }
            }
        }
    }

    return (
        <div>
            <h3>Fill the credentials to Login</h3>
            <input
                type='text'
                className='input-box1'
                placeholder='enter name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <br />
            <input
                type='password'
                className='input-box2'
                placeholder='enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button
                onClick={handleSubmit}
                type='button'
                 >submit</button>
        </div>
    )
}

export default Login
