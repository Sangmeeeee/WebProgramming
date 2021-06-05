import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginContainer.css'
import axios from 'axios'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'

function LoginPage() {
  const [ID, setId] = useState("")
  const [Password, setPassword] = useState("")

  const onIDHandler = (event) => {
    setId(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    axios.post(`http://localhost:8080/${ID}`,{
      id: ID,
      pw : Password
    }).then((result) => {
      console.log(result.data)
      window.location.href=`/${ID}`
    }).catch((err) => {
      console.error(err)
    })

  }

  return (
    <Grid id="loginGrid" textAlign='center' style={{ height: '100vh'}} >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          {/* <Image id="logo" src='./images/ocrstagram.png' /> */}
        </Header>
        <Form size='large' method="POST" onSubmit={onSubmitHandler}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' required='true' value={ID} onChange={onIDHandler} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              required='true'
              value={Password}
              onChange={onPasswordHandler}
            />
            <div>
              <Button type='submit' animated='fade' color='black' fluid="large">
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden><Icon name='arrow right' /></Button.Content>
              </Button>
            </div>
            <div id="sign-up">
              <Link to="./a/register">
                <Button animated='fade' color='black' fluid size='large'>
                  <Button.Content visible>New to us?</Button.Content>
                  <Button.Content hidden>Sign Up!</Button.Content>
                </Button>
              </Link>
            </div>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )

}

export default LoginPage
