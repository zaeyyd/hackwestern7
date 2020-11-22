import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DriveCarMain } from './DriveCarMain';
import { DriveTest } from './DriveTest';
import { Leaderboard } from './Leaderboard';
import { PersonalStats } from './PersonalStats';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={DriveCarMain} />
              <Route path="/drive-test" component={DriveTest} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/personal-stats" component={PersonalStats} />
              <Route compenent={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
