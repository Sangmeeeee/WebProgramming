import React from 'react'
import { Button, Header, Image,Container, Divider } from 'semantic-ui-react'
import axios from 'axios'
import cookie from 'react-cookies'

class UserInfo extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            id : props.id
        }
    }

    render(){
        if(this.props.props.match.params.id === this.state.id)
            return(
            <div className='userInfo'>
                <Container textAlign='right'>
                    <Button color='black' onClick={() => document.getElementsByClassName('Posting')[0].style.visibility='visible'} animated='fade'>
                        <Button.Content visible >+</Button.Content>
                        <Button.Content hidden > Posting </Button.Content>
                    </Button>

                    <Button color='black' onClick={() => {
                            cookie.remove('id')
                            window.location.href=`/`
                            }} animated='fade'>
                        <Button.Content visible >x</Button.Content>
                        <Button.Content hidden> Logout </Button.Content>
                    </Button>

                </Container>
                <Container textAlign='left'>
                    <Header as='h2'>
                        {/* <Image circular src='/images/Info.png' /> {this.state.id} */}
                        <Image circular src={`http://localhost:8080/t/${this.state.id}`} /> {this.state.id}
                    </Header>
                </Container>
                <Divider />
            </div>
            )
        else
            return(
                <div className='userInfo'>
                    <Container textAlign='right'>
                        <Button disabled='true' color='black' onClick={() => document.getElementsByClassName('Posting')[0].style.visibility='visible'} animated='fade'>
                            <Button.Content visible >+</Button.Content>
                            <Button.Content hidden > Posting </Button.Content>
                        </Button>

                        <Button disabled='true' color='black' onClick={() => {
                            cookie.remove('id')
                            window.location.href=`/`
                            }} animated='fade'>
                            <Button.Content visible >x</Button.Content>
                            <Button.Content hidden> Logout </Button.Content>
                        </Button>
                    </Container>
                    <Container textAlign='left'>
                        <Header as='h2'>
                            <Image circular src='/images/Info.png' /> {this.props.props.match.params.id}
                        </Header>
                    </Container>
                    <Divider />
                </div>
            )        
    }
}

export default UserInfo