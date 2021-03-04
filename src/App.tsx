import {useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeStatus = (event: MouseEvent<HTMLElement>):void => {
    setIsLoggedIn((prev:boolean):boolean => !prev); 
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
              <SignIn changeStatus = {changeStatus} ></SignIn>
            </Route>
            <Route exact path = '/signup' >
              <SignUp changeStatus = {changeStatus} ></SignUp>
            </Route>
            <Redirect to = '/' />
        </Switch>
      }
</Router>
  );
}

export default App;