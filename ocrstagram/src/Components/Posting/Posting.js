import axios from 'axios'
import React from 'react'
import cookie from 'react-cookies'
import './Posting.css'
import { Loader,Card, Button,Icon, Image, Container,Dimmer,Segment } from 'semantic-ui-react'

let style = {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
}

class Posting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : props.id,
            img : null,
        }
    }

    handleOcr = (e) => {
        e.preventDefault()
        let fd = new FormData()
        fd.append('img',this.state.img)
        document.getElementsByClassName('ocrLoading')[0].style.display = 'block'
        axios.post(`http://localhost:8080/${this.state.id}/ocr`,fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        },{withCreadentials: true}
        )
        .then((result) => {
            document.getElementsByClassName('ocrLoading')[0].style.display = 'none'
            document.getElementsByClassName('ocrResult')[0].innerHTML = result.data
            console.log(result.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    handleUpload = (e) => {
        e.preventDefault()
        let fd = new FormData()

        fd.append('img',this.state.img)
        fd.append('text',document.getElementsByClassName('ocrResult')[0].innerHTML)

        axios.post(`http://localhost:8080/${this.state.id}/post`,fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result)
            // console.log(this.props.props.match.params.id)
            window.location.href=`/${this.props.props.match.params.id}`
        })
        .catch((err) => {
            console.error(err)
        })
    }
    
    handleFile = (e) => {
        let fileReader = new FileReader()
        let file = e.target.files[0]

        document.getElementsByClassName('uploadImg')[0].style.width = '100%'
        document.getElementsByClassName('uploadImg')[0].style.height = '100%'

        fileReader.addEventListener('load', () => {
            this.setState({img:file})
            document.getElementsByClassName('uploadImg')[0].src = fileReader.result  
        })

        fileReader.readAsDataURL(file)
    }

    handleTest = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/papago/translate',{
            text : document.getElementsByClassName('ocrResult')[0].innerHTML
        })
        .then((result) => {
            document.getElementsByClassName('ocrResult')[0].innerHTML = result.data
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render(){
        return(
            <div className='Posting'>
                <Container style={{height:'100%'}} textAlign='center'>
                    <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',height:'70%', width:'30%'}}  className="ui card">
                        <div style={{height:'50%', width:'100%'}} className="image">
                            <div style={style} onClick={this.handleOcr}>
                                <img className='uploadImg'/>
                            </div>
                        </div>

                        <div style={{height:'30%'}}className="content">
                            <div style={{overflowY: 'auto',height:'100%'}}className="description">
                                <strong className='ocrResult'></strong>
                                <Loader className='ocrLoading' active inline='centered' style={{display:'none'}}/>
                            </div>
                        </div>

                        <div class="extra content">
                            <Button.Group color='black'>
                                <Button onClick={() => document.getElementById('img').click()} >사진선택</Button>
                                <Button onClick={this.handleUpload}>업로드</Button>
                                <Button onClick={() => {
                                    document.getElementsByClassName('uploadImg')[0].src = ''
                                    document.getElementsByClassName('uploadImg')[0].style.width = '0%'
                                    document.getElementsByClassName('uploadImg')[0].style.height = '0%'
                                    document.getElementsByClassName('Posting')[0].style.visibility = 'hidden'
                                    document.getElementsByClassName('ocrResult')[0].innerHTML = ''
                                }}>X</Button>
                                <Button onClick={this.handleTest}>번역</Button>
                            </Button.Group>
                        </div>

                    </div>
                </Container>
                <input name='img' id='img' type='file' onChange={this.handleFile.bind(this)}></input>
            </div>
        )}
}

export default Posting