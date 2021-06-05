import './SignupContainer.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'

class SignupContainer extends React.Component {
  render() {
    return (
      <Grid id="signUpGrid" textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {/* <Image id="logo" src='./images/ocrstagram.png' /> */}
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='circle' iconPosition='left' placeholder='Name' required='true' />
              <Form.Input fluid icon='phone' iconPosition='left' placeholder='Phone' required='true' />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' required='true' />
              <Form.Input
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