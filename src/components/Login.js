import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form className="box" action="/" method="POST" >
                <h1>Login</h1> 
                <input type="text" placeholder="Username" name="" />
                <input type="password" placeholder="Password" name="" />
                <input type="submit" value="Login" name="" />
            </form >
        )
    }
}