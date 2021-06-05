import React from 'react'
import { Icon } from 'semantic-ui-react'
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
      </div>
    )
  }
}

export default Header