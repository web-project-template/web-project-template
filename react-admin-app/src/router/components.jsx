import {lazy,} from 'react';

const Login = lazy(() => import('@/pages/Login/index'));
const Logout = lazy(() => import('@/pages/Logout/index'));
const Dashboard = lazy(() => import('@/pages/Dashboard/index'));
const UserCenter = lazy(() => import('@/pages/UserCenter/index'));
const NotFound = lazy(() => import('@/pages/404/index'));

const MarkVideo = lazy(() => import('@/pages/SACP/Mark/MarkVideo/index'));
const MarkImage = lazy(() => import('@/pages/SACP/Mark/MarkImage/index'));
const MarkInference = lazy(() => import('@/pages/SACP/Mark/MarkInference/index'));
const QualityInspection = lazy(() => import('@/pages/SACP/Mark/QualityInspection/index'));
const MarkRecord = lazy(() => import('@/pages/SACP/Mark/MarkRecord/index'));
const User = lazy(() => import('@/pages/SACP/System/User/index'));
const Rule = lazy(() => import('@/pages/SACP/System/Rule/index'));
const Menu = lazy(() => import('@/pages/SACP/System/Menu/index'));

const Form = lazy(() => import('@/pages/AntDesign/Form/Form/index'));
const Select = lazy(() => import('@/pages/AntDesign/Form/Select/index'));
const Input = lazy(() => import('@/pages/AntDesign/Form/Input/index'));
const Upload = lazy(() => import('@/pages/AntDesign/Form/Upload/index'));
const Loading = lazy(() => import('@/pages/AntDesign/Loading/index'));
const Button = lazy(() => import('@/pages/AntDesign/Button/index'));
const Icons = lazy(() => import('@/pages/AntDesign/Icons/index'));
const Table = lazy(() => import('@/pages/AntDesign/Table/index'));
const PageContainer = lazy(() => import('@/pages/AntDesign/PageContainer/index'));
const Modal = lazy(() => import('@/pages/AntDesign/Modal/index'));
const RefreshPage = lazy(() => import('@/pages/AntDesign/RefreshPage/index'));
const UpdateSearchParams = lazy(() => import('@/pages/AntDesign/UpdateSearchParams/index'));
const RichTextEditor = lazy(() => import('@/pages/AntDesign/RichTextEditor/index'));

export default {
    '/Login': <Login/>,
    '/Logout': <Logout/>,
    '/Dashboard': <Dashboard/>,
    '/UserCenter': <UserCenter/>,
    '/404': <NotFound/>,

    '/SACP/Mark/MarkVideo': <MarkVideo/>,
    '/SACP/Mark/MarkImage': <MarkImage/>,
    '/SACP/Mark/MarkInference': <MarkInference/>,
    '/SACP/Mark/QualityInspection': <QualityInspection/>,
    '/SACP/Mark/MarkRecord': <MarkRecord/>,
    '/SACP/System/User': <User/>,
    '/SACP/System/Rule': <Rule/>,
    '/SACP/System/Menu': <Menu/>,

    '/AntDesign/Form/Form': <Form/>,
    '/AntDesign/Form/Select': <Select/>,
    '/AntDesign/Form/Input': <Input/>,
    '/AntDesign/Form/Upload': <Upload/>,
    '/AntDesign/Loading': <Loading/>,
    '/AntDesign/Button': <Button/>,
    '/AntDesign/Icons': <Icons/>,
    '/AntDesign/Table': <Table/>,
    '/AntDesign/PageContainer': <PageContainer/>,
    '/AntDesign/Modal': <Modal/>,
    '/AntDesign/RefreshPage': <RefreshPage/>,
    '/AntDesign/UpdateSearchParams': <UpdateSearchParams/>,
    '/AntDesign/RichTextEditor': <RichTextEditor/>,
}