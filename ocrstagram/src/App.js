import logo from './logo.svg'
import {Route} from 'react-router-dom'
import {Header} from './Components'
import {LoginContainer, UserContainer, SignupContainer} from './Container'
import './App.css'


function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={LoginContainer}/> {/* 로그인 창 -> 맨 처음화면*/}
        <Route exact path="/:id" component={UserContainer}/> {/* 사용자 정보 -> 로그인 성공시 나오는 화면*/}
        <Route exact path="/signup" component={SignupContainer}/> {/*  회원가입 라우팅이 겹치기때문에 바꿔줘야함 */}
    </div>
  )
}

export default App;