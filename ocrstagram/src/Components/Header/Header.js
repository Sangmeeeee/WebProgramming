import React from 'react'
import { Search,Input,Icon,Container, Grid, Segment  } from 'semantic-ui-react'
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

      // console.log(result.data)
      // results = new Array()
      var aaaaaa
      aaaaaa = result.data.map((obj) => {
        let results = []
        console.log(obj)
        for(let i = 0; i<result.data.length; i++){
          results[i] = obj.userid
        }
        return results
      })
      // console.log(aaaaaa)
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
            <img src="/images/ocrstagram.png" height="100%" style={{'maxHeight':'6vh'}}></img>
          </a>
        </span>
        <Container textAlign='center'>
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