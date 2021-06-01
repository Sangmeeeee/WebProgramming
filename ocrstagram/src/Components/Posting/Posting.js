import React from 'react'
import './Posting.css'
class Posting extends React.Component{
    handleSubmit = (e) => {

    }
    render(){
        return(
            <div className='Posting'>
                <button onClick={() => document.getElementsByClassName('posting')[0].style.visibility='hidden'}>X</button>
                <form name='posting' method='post' onSubmit={this.handleSubmit}>
                    <p>
                        <input type='file'></input>
                    </p>
                    <p>
                        <textarea></textarea>
                    </p>
                </form>
            </div>
            )
        }
}

export default Posting