import {useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  const [isLoggedIn, setIsLoaggedIn] = useState(true);

  const changeStatus = (event: MouseEvent<HTMLElement>):void => {
    setIsLoaggedIn((prev:boolean):boolean => !prev); 
  }

  return (
    <Router>
      <Navbar isLoggedIn = {isLoggedIn} changeStatus = {changeStatus} />
      {isLoggedIn?
        <Switch>
            <Route exact path = '/' >
                <></>
            </Route>
            <Route exact path = '/create'>
                <></>
            </Route>
            <Route exact path = '/show' >
                <></>
            </Route>
            <Redirect to ='/' />
        </Switch>
        :
        <Switch>
            <Route exact path = '/' >
              <></>
            </Route>
            <Redirect to = '/' />
        </Switch>
      }
</Router>
  );
}

export default App;