import React, {Fragment, Suspense, lazy,} from 'react';
import {Route, NavLink, Switch, Redirect, HashRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import "./App.css"

import ProLayout from './layout/ProLayout/index'
import Login from './pages/Login/index'
import Logout from './pages/Logout/index'
import Dashboard from './pages/Dashboard/index'
import User from './pages/User/index'
import Button from './pages/Button/index'
import Icons from './pages/Icons/index'
import Input from './pages/Input/index'
import Table from './pages/Table/index'
import PageContainer from './pages/PageContainer/index'

export default function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#00b96b'}}}>
      <HashRouter>
        <ProLayout>
          <Switch>
            <Redirect from="/" to="/Dashboard" exact/>
            <Route path='/Login' exact component={Login}/>
            <Route path='/Logout' exact component={Logout}/>

            <Route path='/Dashboard' exact component={Dashboard}/>
            <Route path='/User' exact component={User}/>

            <Route path='/Button' exact component={Button}/>
            <Route path='/Icons' exact component={Icons}/>
            <Route path='/Input' exact component={Input}/>
            <Route path='/Table' exact component={Table}/>
            <Route path='/PageContainer' exact component={PageContainer}/>
          </Switch>
        </ProLayout>
      </HashRouter>
    </ConfigProvider>
  );
}