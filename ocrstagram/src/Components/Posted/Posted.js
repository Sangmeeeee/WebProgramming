import axios from 'axios'
import React from 'react'
import cookie from 'react-cookies'
import './Posted.css'
import { Loader,Card, Button,Icon, Image, Container,Dimmer,Segment } from 'semantic-ui-react'

let style = {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
}

class Posted extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src : props.src,
            text : props.text
        }
    }

    render(){
        return(
            <div className='Posted'>
                <Container style={{height:'100%'}} textAlign='center'>
                    <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',height:'70%', width:'30%'}}  className="ui card">
                        <div style={{height:'50%', width:'100%'}} className="image">
                            <div style={style} onClick={this.handleOcr}>
                                <img className='PostedImg'/>
                            </div>
                        </div>

                        <div style={{height:'30%'}}className="content">
                            <div style={{overflowY: 'auto',height:'100%'}} className="description">
                                <strong className='PostedText'></strong>
                            </div>
                        </div>

                        <div class="extra content">
                            <Button.Group color='black'>
                                <Button onClick={() => {
                                    document.getElementsByClassName('PostedImg')[0].src = ''
                                    document.getElementsByClassName('PostedImg')[0].style.width = '0%'
                                    document.getElementsByClassName('PostedImg')[0].style.height = '0%'
                                    document.getElementsByClassName('Posted')[0].style.visibility = 'hidden'
                                    document.getElementsByClassName('PostedText')[0].innerHTML = ''
                                }}>X</Button>
                            </Button.Group>
                        </div>

                    </div>
                </Container>
            </div>
        )}
}

export default Posted