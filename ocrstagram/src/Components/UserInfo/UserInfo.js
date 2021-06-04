import React from 'react'
import {Posting} from '../index'
import cookie from 'react-cookies'
import './UserInfo.css'

class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }

    handlePosting = (e) => {
        e.preventDefault()
        document.getElementsByClassName('Posting')[0].style.visibility = 'visible'
    }

    render(){
        return(
            <div className='UserInfo'>
                <p>{this.props.id}</p>
                <p>this is UserInfo</p>
                <button onClick={this.handlePosting}>+</button>
            </div>
        )
    }
}

export default UserInfo