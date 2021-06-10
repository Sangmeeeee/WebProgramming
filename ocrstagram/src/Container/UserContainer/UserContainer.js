import React from 'react'
import './UserContainer'
import cookie from 'react-cookies'
import { Posting, UserInfo,  } from '../../Components'
import { Button, Header, Image,Container, Divider } from 'semantic-ui-react'

class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id : cookie.load('id'),
        }
    }

    render(){
            return(
                // 나중에 UserInfo로 따로 나누기
                <div className="UserContainer">
                    <UserInfo props={this.props} id={this.state.id}/>
                    <p>Posted img area</p>
                    <Posting props={this.props} id={this.state.id}/>
                </div>
            )}
}

export default UserContainer