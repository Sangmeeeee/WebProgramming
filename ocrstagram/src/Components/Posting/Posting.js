import axios from 'axios'
import React from 'react'
import './Posting.css'
const url = ''

let style = {
    width:'40%',
    height:'60%',
    backgroundColor:'black',
    display:'inline-block'
}

class Posting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.id,
            img : null,
        }
    }

    handleOcr = (e) => {
        let fd = new FormData()
        fd.append('img',this.state.img)
        axios.post(`http://localhost:8080/${this.props.id}/ocr`,fd,{
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

        axios.post(`http://localhost:8080/${this.state.id}/post`,fd,{
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

        document.getElementsByClassName('uploadImg')[0].style.width = '100%'
        document.getElementsByClassName('uploadImg')[0].style.heigt = '100%'


        fileReader.addEventListener('load', () => {
            this.setState({img:file})
            document.getElementsByClassName('uploadImg')[0].src = fileReader.result  
        })

        fileReader.readAsDataURL(file)
    }

    render(){
        return(
            <div className='Posting'>
                <p>
                    <button onClick={() => document.getElementsByClassName('Posting')[0].style.visibility = 'hidden'}>X</button>
                </p>
                <div style={style} onClick={this.handleOcr}>
                    <img className='uploadImg'></img>
                </div>

                <p>
                    <input name='img' id='img' type='file' onChange={this.handleFile.bind(this)}></input>
                </p>

                <p>
                    <textarea  rows='10' cols='70' className='result'></textarea>
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