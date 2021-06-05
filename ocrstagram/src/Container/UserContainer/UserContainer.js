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
        return(
            <div className="UserContainer">
                {/* <UserInfo props={this.props} id={this.state.id}></UserInfo> */}
                    <Container textAlign='right'>
                        <Button color='black' onClick={() => document.getElementsByClassName('Posting')[0].style.visibility= 'visible'}  animated='fade'>
                            <Button.Content visible>+</Button.Content>
                            <Button.Content hidden> Posting </Button.Content>
                        </Button>
                    </Container>
                    <Container textAlign='left'>
                        <Header as='h2'>
                            <Image circular src='/images/avatar/large/patrick.png' /> {this.state.id}
                        </Header>
                    </Container>
                    {/* <Container textAlign='center'>Center Aligned</Container> */}
                    {/* <Container textAlign='justified'> */}
                    {/* <b>Justified</b>
                    <Divider /> */}
                    {/* </Container> */}
                    <Divider />

                <p>Posted img area</p>

                <Posting props={this.props} id={this.state.id}/>
            </div>
        )
    }
}

export default UserContainer