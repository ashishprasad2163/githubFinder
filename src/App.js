import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App =()=> {
  
 
  

  /*async componentDidMount() {
    this.setState({ laoding: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data, laoding: false });
  }*/


    return (
      <GithubState>
        <AlertState>
      <Router>
        <div className='App'>
          <Navbar title=' Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component ={NotFound}/>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );

};

export default App;
