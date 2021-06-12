import './SignupContainer.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import {URL} from '../../config'

class SignupContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id : null,
      pw : null
    }
  }

  onChangeId = (event) => {
    event.preventDefault()
    this.setState({id : event.target.value})
  }

  onChangePw = (event) => {
    event.preventDefault()
    this.setState({pw : event.target.value})
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    axios.post(`${URL}/user/register`,{
      id : this.state.id,
      pw : this.state.pw
    }).then((result) => {
      console.log(result.data)
      window.location.href='/'
    }).catch((err) => {
      console.error(err)
    })
  }

  

  render() {
    return (
      <Grid id="signUpGrid" textAlign='center' style={{ height: '80%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {/* <Image id="logo" src='./images/ocrstagram.png' /> */}
          </Header>
          <Form size='large' onSubmit={this.onSubmitHandler}>
            <Segment stacked>
              <Form.Input onChange={this.onChangeId.bind(this)}    className='id' fluid icon='user' iconPosition='left' placeholder='ID' required='true' />
              <Form.Input
              onChange={this.onChangePw.bind(this)}
                className='pw'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                required='true'
              />
              <div>
                <Button animated='fade' color='black' fluid="large" onClick={this.handleClick}>
                  <Button.Content visible>Register</Button.Content>
                  <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                </Button>
              </div>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>

    )
  }
}

export default SignupContainer