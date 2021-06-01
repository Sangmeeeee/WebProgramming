import axios from 'axios'
import React from 'react'
import './Posting.css'
const url = ''
class Posting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img : null
        }
    }

    handleOcr = (e) => {
        console.log('call OCR')
        const fd = new FormData()
        fd.append('img',this.state.img)
        axios.post('http://localhost:8080/user/ocr',fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {

        })
    }

    handleUpload = (e) => {
        const fd = new FormData()
        fd.append('img',this.state.img)
        // console.log(document.getElementsByClassName('Result')[0].value)
        fd.append('text',document.getElementsByClassName('Result')[0].value)
        axios.post('http://localhost:8080/user/upload',fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {

        })
    }
    
    handleFile = (e) => {
        let fileReader = new FileReader()
        let file = e.target.files[0]
        fileReader.onload = () => {
            this.setState({img:file})
                document.getElementsByClassName('uploadImg')[0].src = fileReader.result  
        }
        fileReader.readAsDataURL(file)
    }

    render(){
        return(
            <div className='Posting'>

                <button onClick={/*() => document.getElementsByClassName('Posting')[0].style.visibility='hidden'*/ () => window.location.href='/user'}>X</button>

                <div onClick={this.handleOcr}>
                    <img className='uploadImg'></img>
                </div>

                <p>
                    <input name='img' id='img' type='file' onChange={this.handleFile.bind(this)}></input>
                </p>

                <p>
                    <textarea className='Result'></textarea>
                </p>
                
                <p>
                    <button onClick={this.handleUpload}>업로드</button>
                </p>
            </div>
        )}
}

export default Posting