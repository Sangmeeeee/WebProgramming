import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Container, Divider, Image } from 'semantic-ui-react';
import { render } from 'react-dom';

let dataList = [
  {
    "title": "asd1",
    "image": "https://images.unsplash.com/photo-1623302641746-8505ecfd1619?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd2",
    "image": "https://images.unsplash.com/photo-1623329372597-c069f78154be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd3",
    "image": "https://images.unsplash.com/photo-1623328714694-cf4f56769077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd6",
    "image": "https://images.unsplash.com/photo-1623328714694-cf4f56769077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd4",
    "image": "https://images.unsplash.com/photo-1623302641746-8505ecfd1619?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd5",
    "image": "https://images.unsplash.com/photo-1623329372597-c069f78154be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    "title": "asd5",
    "image": "https://item.kakaocdn.net/do/5dcb1654f9fe73ffb62e88fcf31505337154249a3890514a43687a85e6b6cc82"
  }
]

var tileStyle = {
  width: '30vw',
  height: '60vh'
}

var divStyle = {
  width: '100%',
  textAlign: 'center',
  marginTop: '5vh'
}

var divStyle2 = {
  display: 'inline-block'
}

class PostedImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      db : this.props.db
    }
  }

  render() {
    return (
      <div className="GridView" style={divStyle}>
        <div style={divStyle2}>
          <GridList cellHeight='auto' cols={3} style={{ 'width': '90vw' }}>
            {dataList.map((data) => (
              <GridListTile style={tileStyle}>
                <a href={data.image}>
                  <Image style={{ 'width': '100%', 'height': '100%'}} src={data.image} alt={data.title} ></Image>
                </a>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default PostedImage