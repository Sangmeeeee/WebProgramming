import logo from './logo.svg'
import {Route} from 'react-router-dom'
import {Header} from './Components'
import {LoginContainer, UserContainer, SignupContainer} from './Container'
import './App.css'


function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={LoginContainer}/>
        <Route path="/user" component={UserContainer}/>
        <Route path="/signup" component={SignupContainer}/>
    </div>
  );
}

export default App;