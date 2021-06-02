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
        let fd = new FormData()
        fd.append('img',this.state.img)
        axios.post(`http://localhost:8080/user/y2kwoo/ocr`,fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            document.getElementsByClassName('result')[0].value = result.data
        })
        .catch((err) => {
            console.error(err)
        })
    }

    handleUpload = (e) => {
        let fd = new FormData()

        fd.append('img',this.state.img)
        fd.append('text',document.getElementsByClassName('result')[0].value)

        axios.post(`http://localhost:8080/user/y2kwoo/upload`,fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    
    handleFile = (e) => {
        let fileReader = new FileReader()
        let file = e.target.files[0]

        fileReader.addEventListener('load', () => {
            this.setState({img:file})
            document.getElementsByClassName('uploadImg')[0].src = fileReader.result  
        })

        fileReader.readAsDataURL(file)
    }

    render(){
        return(
            <div className='Posting'>

                <button onClick={() => document.getElementsByClassName('Posting')[0].style.visibility = 'hidden'}>X</button>

                <div onClick={this.handleOcr}>
                    <img className='uploadImg'></img>
                </div>

                <p>
                    <input name='img' id='img' type='file' onChange={this.handleFile.bind(this)}></input>
                </p>

                <p>
                    <textarea  rows='10' cols='10'  className='result'></textarea>
                </p>
                
                <p>
                <button onClick={() => document.getElementById('img').click()}>사진선택</button>
                </p>
                <p>
                    <button onClick={this.handleUpload}>업로드</button>
                </p>
            </div>
        )}
}

export default Posting