import axios from 'axios'
import React from 'react'
import './LoginContainer.css'
import cookie from 'react-cookies'
const url = 'http://localhost:8080/'

class LoginContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            ID : null,
            PW : null,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/${this.state.ID}`,{
            id : this.state.ID,
            pw : this.state.PW
        },{withCreadentials: true}).then((result) => {
            console.log(result.data)
            const expires = new Date()
            expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    
            cookie.save('id',result.data,{
                path:'/',
                expires,
            })

            window.location.href=`/${this.state.ID}`

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