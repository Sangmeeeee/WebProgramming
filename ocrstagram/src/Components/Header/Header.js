import React from 'react'
import { Input,Icon,Container } from 'semantic-ui-react'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <span>  
          <a href="/">
            <img src="/images/ocrstagram.png" height="100%"></img>
          </a>
        </span>
        <Container textAlign='center'>
          <Input icon='search' placeholder='Search...'/>
        </Container>
      </div>
    )
  }
}

export default Header