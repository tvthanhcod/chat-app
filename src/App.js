
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Login, MainChat } from './components'

import './App.css';

const App = () => {
  return (
    <div className='app__wrapper'>
      <Router>
        <Routes>
          <Route path='/' exact element={ <MainChat />}/>
          <Route path='/login' element={ <Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
