
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AuthProvider from './components/store/AuthProvider';

import { Login, MainChat } from './components'

import './App.css';

const App = () => {
  return (
    <div className='app__wrapper'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={MainChat}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
