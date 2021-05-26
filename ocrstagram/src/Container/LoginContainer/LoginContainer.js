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
            </div>
        )
    }
}

export default LoginContainer