import React, {Fragment, Suspense, lazy,} from 'react';
import {Route, NavLink, Switch, Redirect, HashRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import "./App.scss"

import ProLayout from './layout/ProLayout/index'
import Login from './pages/Login/index'
import Logout from './pages/Logout/index'
import Dashboard from './pages/Dashboard/index'
import User from './pages/User/index'

import Form from './pages/AntDesign/Form/Form/index'
import Select from '@/pages/AntDesign/Form/Select/index'
import Input from '@/pages/AntDesign/Form/Input/index'
import Upload from '@/pages/AntDesign/Form/Upload/index'

import Loading from './pages/AntDesign/Loading/index'
import Button from './pages/AntDesign/Button/index'
import Icons from './pages/AntDesign/Icons/index'
import Table from './pages/AntDesign/Table/index'
import PageContainer from './pages/AntDesign/PageContainer/index'
import Modal from './pages/AntDesign/Modal/index'
import RefreshPage from './pages/AntDesign/RefreshPage/index'
import UpdateSearchParams from './pages/AntDesign/UpdateSearchParams/index'
import RichTextEditor from './pages/AntDesign/RichTextEditor/index'

import MarkVideo from './pages/SACP/Mark/MarkVideo/index'
import MarkImage from './pages/SACP/Mark/MarkImage/index'
import MarkInference from './pages/SACP/Mark/MarkInference/index'
import QualityInspection from './pages/SACP/Mark/QualityInspection/index'
import MarkList from '@/pages/SACP/Mark/MarkRecord/index'

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

                        <Route path='/SACP/Mark/MarkImage' exact component={MarkImage}/>
                        <Route path='/SACP/Mark/MarkVideo' exact component={MarkVideo}/>
                        <Route path='/SACP/Mark/MarkInference' exact component={MarkInference}/>
                        <Route path='/SACP/Mark/QualityInspection' exact component={QualityInspection}/>
                        <Route path='/SACP/Mark/MarkList' exact component={MarkList}/>

                        <Route path='/AntDesign/Form/Form' exact component={Form}/>
                        <Route path='/AntDesign/Form/Select' exact component={Select}/>
                        <Route path='/AntDesign/Form/Input' exact component={Input}/>
                        <Route path='/AntDesign/Form/Upload' exact component={Upload}/>

                        <Route path='/AntDesign/RichTextEditor' exact component={RichTextEditor}/>
                        <Route path='/AntDesign/UpdateSearchParams' exact component={UpdateSearchParams}/>
                        <Route path='/AntDesign/RefreshPage' exact component={RefreshPage}/>
                        <Route path='/AntDesign/Modal' exact component={Modal}/>
                        <Route path='/AntDesign/Loading' exact component={Loading}/>
                        <Route path='/AntDesign/Button' exact component={Button}/>
                        <Route path='/AntDesign/Icons' exact component={Icons}/>
                        <Route path='/AntDesign/Table' exact component={Table}/>
                        <Route path='/AntDesign/PageContainer' exact component={PageContainer}/>
                    </Switch>
                </ProLayout>
            </HashRouter>
        </ConfigProvider>
    );
}