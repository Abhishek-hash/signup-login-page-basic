import React, { useState } from 'react'

function SignUp() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log("submitting the signup form data:", name, password)
        // Simple validation
        if(name === "" || password === "") alert('Please fill the credentials.')
        else {
            let userArrfromLS = []
            const userdetails = {
            name, password
        }

        if (JSON.parse(localStorage.getItem("user")) === null) {
            console.log("user is empty...")
            userArrfromLS.push(userdetails)
            localStorage.setItem("user", JSON.stringify(userArrfromLS))
        }
        else {
            userArrfromLS = JSON.parse(localStorage.getItem("user"))
            console.log("userArrfromLS:", userArrfromLS)
            console.log("userArrfromLS:", typeof (userArrfromLS))
            console.log("length of user:", JSON.parse(localStorage.getItem("user")), JSON.parse(localStorage.getItem("user")).length)
            userArrfromLS.push(userdetails)
            localStorage.setItem("user", JSON.stringify(userArrfromLS))
        }

        console.log("userArrfromLS after push:", userArrfromLS)
        console.log("type of userArrfromLS:", typeof (userArrfromLS))
        }
        
        
    }

    return (
        <div>
            <h3>Fill the credentials to signup</h3>
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
            <br />
            <button
                onClick={handleSubmit}
                type='button'
            >submit</button>
        </div>
    )
}

export default SignUp
