import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Appointments from './components/appointment';


class App extends React.Component {
  render () {
    return <BrowserRouter>
    <div className="App">
      <Route path="/" component={Appointments} />
    </div>
  </BrowserRouter>
  }
}

export default App;
