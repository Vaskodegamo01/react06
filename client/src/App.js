import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Content from "./Container/Content/Content";
import Admin from "./Container/Admin/Admin";

class App extends Component {
    render() {
    return (

        <BrowserRouter>
            <Layout>
            <Switch>
              <Route  path='/:page'  exact component={Content} />
              <Route  path='/admin/admin' exact component={Admin} />
            </Switch>
            </Layout>
        </BrowserRouter>

    );
  }
}

export default App;
