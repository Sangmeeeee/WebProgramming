import React from 'react'
import './UserContainer'
import cookie from 'react-cookies'
import { Posting, UserInfo,  } from '../../Components'

class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id : cookie.load('id') || 'testing',
        }
    }

    render(){
        return(
            <div className="UserContainer">
                <UserInfo props={this.props} id={this.state.id}></UserInfo>
                <Posting props={this.props} id={this.state.id}/>
                <p>Posts</p>
            </div>
        )
    }
}

export default UserContainer