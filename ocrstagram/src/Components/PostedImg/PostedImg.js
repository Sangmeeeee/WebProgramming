import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Container, Divider, Image } from 'semantic-ui-react';
import { render } from 'react-dom';
import axios from 'axios'


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
      dbLength : 0
    }
  }

  componentDidMount = () => {
    // console.log(this.props.pr)
    axios.post(`http://localhost:8080/${this.state.id}/getDB`,
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
                    <Image style={{ 'width': '100%', 'height': '100%'}} src={`http://localhost:8080/${this.props.props.match.params.id}/getImg?image=${data[0]}`}></Image>
                    {/* <Image style={{ 'width': '100%', 'height': '100%'}} src={`http://localhost:8080/${this.props.props.match.params.id}/getImg?image=hi`}></Image> */}
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default PostedImage