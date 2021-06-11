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
            db : []
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
                    
                   <PostedImg props={this.props}/>

                    <Posting props={this.props} id={this.state.id}/>
                </div>
            )
        else if(this.state.isok === false) 
            return(
                <div>404 not found</div>
            )
        else
            return(
                <div></div>
            )
    }
}

export default UserContainer