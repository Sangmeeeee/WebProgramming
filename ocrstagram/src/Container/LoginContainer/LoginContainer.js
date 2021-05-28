import React from 'react'
import './LoginContainer.css'

class LoginContainer extends React.Component{
    render(){
        return(
            <div className="LoginContainer">
                <form>
                    <p>ID</p>
                    {/* ID */}
                    <p>Password</p>
                    {/* PassWord */}
                </form>
                    <p><a href="/user">Sign in</a></p>
                    <p><a href="/signup">Sign up</a></p>
            </div>
        )
    }
}

export default LoginContainer