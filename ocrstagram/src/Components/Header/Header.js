import React from 'react'
import { Search,Input,Icon,Container } from 'semantic-ui-react'
import './Header.css'
import axios from 'axios'

var results = []

class Header extends React.Component {

  handleSearch = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/user/search',{
      search : e.target.value
    })
    .then((result) => {
      // console.log(result.data)

      results = result.data
      console.log(results)
    })
    .catch((err) => {
      console.error(err)
    })
  }


  render() {
    const resRender = ({userid}) => (
      <span key="name">
        {userid}
      </span>
    );
    return (
      <div className="Header">
        <span>  
          <a href="/">
            <img src="/images/ocrstagram.png" height="100%"></img>
          </a>
        </span>
        <Container textAlign='center'>
          {/* <Input onChange={this.handleSearch.bind(this)} icon='search' placeholder='Search...'/> */}

          <Search
            fluid
            icon="search"
            placeholder="Search..."
            results={results}
            resultRenderer={resRender}
            onSearchChange={this.handleSearch.bind(this)}
          />
        </Container>
      </div>
    )
  }
}

export default Header