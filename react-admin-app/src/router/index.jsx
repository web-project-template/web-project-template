import React from 'react';
import {useRoutes, Navigate} from 'react-router-dom';
import ProLayout from '@/layout/ProLayout/index'

import components from './components'

const Router = (props) => {
    const {userInfo, userMenus} = props;

    const routes = [
        {
            path: '/Login',
            element: components['/Login'],
        },
        {
            path: '/Logout',
            element: components['/Logout'],
        },
        {
            path: '/',
            element: <ProLayout userInfo={userInfo} userMenus={userMenus}/>,
            children: [
                {
                    path: '',
                    element: <Navigate to="/Dashboard" replace/>,
                },
                {
                    path: '/Dashboard',
                    element: components['/Dashboard'],
                },
                {
                    path: '/UserCenter',
                    element: components['/UserCenter'],
                },
                // {
                //     path: '/SACP/Mark/MarkVideo',
                //     element: components['/SACP/Mark/MarkVideo'],
                // },
                // {
                //     path: '/SACP/Mark/MarkImage',
                //     element: components['/SACP/Mark/MarkImage'],
                // },
                // {
                //     path: '/SACP/Mark/MarkInference',
                //     element: components['/SACP/Mark/MarkInference'],
                // },
                // {
                //     path: '/SACP/Mark/QualityInspection',
                //     element: components['/SACP/Mark/QualityInspection'],
                // },
                // {
                //     path: '/SACP/Mark/MarkRecord',
                //     element: components['/SACP/Mark/MarkRecord'],
                // },
                {
                    path: '*',
                    element: components['/404'],
                }
            ]
        }
    ];

    const element = useRoutes(routes);
    return element;
};

export default Router;