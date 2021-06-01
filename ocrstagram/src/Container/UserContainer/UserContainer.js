import React from 'react'
import './UserContainer'
import { UserInfo } from '../../Components'

class UserContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        /* 게시글 업로드 창 
            사진, 텍스트필드
        */
        return(
            <div className="UserContainer">
                <UserInfo></UserInfo>
                <p>Posts</p>
            </div>
        )
    }
}

export default UserContainer