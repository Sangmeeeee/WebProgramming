import React from 'react'
import {Posting} from '../index'
import './UserInfo.css'

class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ID : null,
            PW : null
        }
    }

    handlePosting = (e) => {
        e.preventDefault()
        // document.getElementsByClassName('posting')[0].style.visibility='visible'
        console.log(document.getElementsByClassName('UserInfo')[0].appendChild(<div>aaa</div>))
    }

    render(){
        return(
            <div className='UserInfo'>
                <p>{this.state.ID}</p>
                <p>this is UserInfo</p>
                <button onClick={this.handlePosting}>+</button>
            </div>
        )
    }
}

export default UserInfo