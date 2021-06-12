import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Container, Divider, Image } from 'semantic-ui-react';
import { render } from 'react-dom';
import axios from 'axios'
import {Posted} from '../index'
import {URL} from '../../config'

let dataList = []

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
      dbLength : 0,
    }
  }


  
  componentDidMount = () => {
    axios.post(`${URL}/${this.state.id}/getDB`,
    {userid : this.props.props.match.params.id})
    .then((result) => {
        console.log(result.data)
        let rs = result.data
        result.data.map((value) => {
          dataList.push([value.image, value.text])
        })
        console.log(dataList)
        console.log(this.props.props.match.params.id)
        this.setState({
          dbLength : result.data.length
        })
        
    })
    .catch((err) => {
        console.error(err)
    })
  }

  renderText = (src,text) => {
    console.log(src)
    console.log(text)
    document.getElementsByClassName('Posted')[0].style.visibility='visible'
    document.getElementsByClassName('PostedImg')[0].style.width = '100%'
    document.getElementsByClassName('PostedImg')[0].style.height = '100%'
    document.getElementsByClassName('PostedImg')[0].src = src
    document.getElementsByClassName('PostedText')[0].innerHTML = text
    console.log(document.getElementsByClassName('PostedImg')[0])
  }

  render() {
    if(this.state.dbLength.length === 0)
      return(
        <div>loading</div>
      )
    else
    return (
      <div className="GridView" style={divStyle}>
        <div style={divStyle2}>
          <GridList cellHeight='auto' cols={3} style={{ 'width': '90vw' }}>
            {dataList.map((data) => (
              <GridListTile style={tileStyle}>
                {/* <a href={data.image}>
                </a> */}
                    <Image
                    style={{ 'width': '100%', 'height': '100%'}} 
                    src={`${URL}/${this.props.props.match.params.id}/getImg?image=${data[0]}`}
                    onClick={this.renderText.bind(this, `${URL}/${this.props.props.match.params.id}/getImg?image=${data[0]}`,data[1])}
                    ></Image>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default PostedImage