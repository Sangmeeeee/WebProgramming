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
        if(this.props.match.params.id === this.state.id)
            return(
                // 나중에 UserInfo로 따로 나누기
                <div className="UserContainer">
                    <Container textAlign='right'>
                        <Button color='black' onClick={
                            () => document.getElementsByClassName('Posting')[0].style.visibility='visible'
                            }  animated='fade'>
                            <Button.Content visible>+</Button.Content>
                            <Button.Content hidden> Posting </Button.Content>
                        </Button>
                    </Container>
                    <Container textAlign='left'>
                        <Header as='h2'>
                            <Image circular src='/images/avatar/large/patrick.png' /> {this.props.match.params.id}
                        </Header>
                    </Container>
                    <Divider />

                    <p>Posted img area</p>

                    <Posting props={this.props} id={this.state.id}/>
                </div>
            )
        else
            return(
                <div className="UserContainer">
                    <Container textAlign='right'>
                        <Button color='black' disabled='true' onClick={() => {
                            document.getElementsByClassName('Posting')[0].style.visibility= 'visible'
                            document.getElementsByClassName('description')[0].innerHTML = '' 
                            document.getElementsByClassName('uploadImg')[0].src = ''
                            document.getElementsByClassName('uploadImg')[0].style.width = '0%'
                            document.getElementsByClassName('uploadImg')[0].style.height = '0%'
                    }}  animated='fade'>
                            <Button.Content visible>+</Button.Content>
                            <Button.Content hidden> Posting </Button.Content>
                        </Button>
                    </Container>

                    <Container textAlign='left'>
                        <Header as='h2'>
                            <Image circular src='/images/avatar/large/patrick.png' /> {this.props.match.params.id}
                        </Header>
                    </Container>
                    
                    <Divider />

                    <p>Posted img area</p>

                    <Posting props={this.props} id={this.state.id}/>
                </div>
            )
    }
}

export default UserContainer