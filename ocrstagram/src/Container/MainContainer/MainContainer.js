import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import './MainContainer.css'

class MainContainer extends React.Component{
    render(){
        return(
            <div className='MainContainer'>
                <img src="/images/mainImg.jpg" style={{'height':'100%', 'width':'50%', float:'left'}}></img>
                <a href='/user/login'><h1>시작하기</h1></a>
            </div>
        )}
}

export default MainContainer