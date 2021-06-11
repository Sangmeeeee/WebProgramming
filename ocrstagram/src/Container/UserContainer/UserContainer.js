import React from 'react'
import './UserContainer'
import cookie from 'react-cookies'
import axios from 'axios'
import { Posting, UserInfo,  } from '../../Components'
import { Button, Header, Image,Container, Divider, SearchResults } from 'semantic-ui-react'
import {GridList, GridListTile} from '@material-ui/core'

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
            // 사용자가 존재하는 사람인지 아닌지 판단
            this.setState({
                isok : result.data
            })
            if(this.state.isok){


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
                    
                   <p>posted area</p>

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