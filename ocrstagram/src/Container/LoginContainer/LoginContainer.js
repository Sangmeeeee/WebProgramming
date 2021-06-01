import axios from 'axios'
import React from 'react'
import { Router } from 'react-router'
import './LoginContainer.css'
const url = 'http://localhost:8080/'

class LoginContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ID : null,
            PW : null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        window.location.href="/user" // 임시 저장

        axios.post(url,{
            id : this.state.ID,
            pw : this.state.PW
        }).then(() => {
            window.location.href="/user"
        }).catch(() => {
            console.error('error')
        })
    }

    handleID = (e) => {
        this.setState({ ID : e.target.value });
        e.preventDefault()
    }

    handlePW = (e) => {
        this.setState({ PW : e.target.value });
        e.preventDefault()
    }

    render(){
        return(
            <div className="LoginContainer">
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" name="ID" placeholder="ID" onChange={this.handleID} required></input>
                    </p>
                    <p>
                        <input type="password" name="PW" placeholder="PW" onChange={this.handlePW} required></input>
                    </p>
                    <p>
                        <input type="submit" value="Sign in"/>
                    </p>
                </form>
                    <p><button onClick={() => window.location.href="/signup"}>Sign up</button></p>
            </div>
        )
    }
}

export default LoginContainer