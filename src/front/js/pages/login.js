import React, { useState } from "react";




export default function Login() {
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")

    const handleClick = async(e) =>{
        e.preventDefault()
        
        const response= await fetch(process.env.BACKEND_URL + "login",{
            method: "POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:email, password:password})
            
        })
        const data= await response.json()
	    return (
            <div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" onChange={(e)=> setEmail(e.target.value)} class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-primary" onClick={(e)=> handleClick(e)}>Login</button>
            </div>
        )
    }
}