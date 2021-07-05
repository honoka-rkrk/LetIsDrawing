import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Chat from './Chat/Component/main';
import Upload from './Upload/Component/main';
import Home from './Home/Component/main';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={['/', '/home']} exact component={Home} />
          <Route path={'/chat'} exact component={Chat} />
          <Route path={'/upload'} exact component={Upload} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  );
};
export default App;
