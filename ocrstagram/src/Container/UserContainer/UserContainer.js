import React from 'react'
import './UserContainer'
import cookie from 'react-cookies'
import axios from 'axios'
import { Posting, UserInfo,  } from '../../Components'
import { Button, Header, Image,Container, Divider, SearchResults } from 'semantic-ui-react'

class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id : cookie.load('id'),
            isok : null
        }
    }

    componentDidMount = () => {
        axios.post('http://localhost:8080/user/isok',{ // 사용자가 있나 없나 찾아봄
            userid : this.state.id
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err)
        })
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