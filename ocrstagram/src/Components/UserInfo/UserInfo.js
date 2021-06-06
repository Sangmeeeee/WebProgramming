// import React from 'react'
// import {Posting} from '../index'
// import cookie from 'react-cookies'
// import './UserInfo.css'

// class UserInfo extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     handlePosting = (e) => {
//         e.preventDefault()
//         // document.getElementsByClassName('description')[0].innerHTML = '' 
//         document.getElementsByClassName('uploadImg')[0].src = ''
//         document.getElementsByClassName('uploadImg')[0].style.width = '0%'
//         document.getElementsByClassName('uploadImg')[0].style.height = '0%'
//         document.getElementsByClassName('Posting')[0].style.visibility = 'visible'
//     }

//     render(){
//         return(
//             <div className='UserInfo'>
//                 <img className='userProfile'></img>
//                 <p>{this.props.id}</p>
//                 <button onClick={this.handlePosting}>+</button>
//             </div>
//         )
//     }
// }

// export default UserInfo