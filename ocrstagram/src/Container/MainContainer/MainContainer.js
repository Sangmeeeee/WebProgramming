import React from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import './MainContainer.css'

class MainContainer extends React.Component{
    componentDidMount = () => {
        setTimeout(()=> {
            document.getElementsByClassName('textImg')[0].style.visibility = 'visible'
        },1001)
    }
    render(){
        return(
            <div className='MainContainer'>
                <div className='linear'></div>
                <img src="/images/mainImg.jpg" className='mainImg'></img>
                <div className='textMain'>
                    <a href='/user/login'>
                        <img  className='textImg' src='/images/ocrstagram.png'></img>
                    </a>
                    <div>
                        <p>
                            <strong>이미지를 자유롭게 변환해 보세요</strong>
                        </p>
                        <a href='/user/login'><h1>시작하기</h1></a>
                    </div>
                </div>
            </div>
        )}
}

export default MainContainer