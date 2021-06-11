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
        userid : this.props.match.params.id
    })
    .then((result) => {
        this.setState({
            isok : result.data
        })
        if(this.state.isok){
            axios.post(`http://localhost:8080/${this.state.id}/getDB`,
            {userid : this.props.match.params.id})
            .then((result) => {
                console.log(result.data)
            })
            .catch((err) => {
                console.error(err)
            })
        }
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