import logo from './logo.svg'
import {Route} from 'react-router-dom'
import {Header} from './Components'
import {LoginContainer, UserContainer} from './Container'
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        {/* LoginContainer */}
        <Route exact path ="/" component={LoginContainer}/>
        {/* UserContainer */}
        <Route path ="/user" component={UserContainer}/>
    </div>
  );
}

export default App;