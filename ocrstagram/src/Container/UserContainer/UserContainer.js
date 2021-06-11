import React from 'react'
import './UserContainer'
import cookie from 'react-cookies'
import axios from 'axios'
import { Posting, UserInfo, PostedImg } from '../../Components'
import { Button, Header, Image,Container, Divider, SearchResults } from 'semantic-ui-react'
import {GridList, GridListTile} from '@material-ui/core'

class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id : cookie.load('id'),
            isok : true,
            db : null
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
                    this.setState({
                        db : result.data
                    })
                })
                .catch((err) => {
                    console.error(err)
                })
            }
        })
        .catch((err) => {
            console.error(err)
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
        if(this.state.isok)
            return(
                // 나중에 UserInfo로 따로 나누기
                <div className="UserContainer">
                    <UserInfo props={this.props} id={this.state.id}/>
                    
                   <PostedImg props={this.props} db={this.state.db}/>

                    <Posting props={this.props} id={this.state.id}/>
                </div>
            )
        else
            return(
                <div>404 not found</div>
            )
        }
}

export default UserContainer