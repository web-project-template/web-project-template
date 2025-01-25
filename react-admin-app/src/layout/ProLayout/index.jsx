import {
    CaretDownFilled,
    DoubleRightOutlined,
    GithubFilled,
    InfoCircleFilled,
    UserOutlined,
    LogoutOutlined,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import {css} from '@emotion/css';
import {
    Button,
    ConfigProvider,
    Divider,
    Dropdown,
    Input,
    Popover,
    theme,
} from 'antd';
import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import ProLayoutDefaultProps from './DefaultProps';
import Breadcrumb from '../Breadcrumb'

export default (props) => {
    const {children} = props
    const [pathname, setPathname] = useState('/');
    const history = useHistory();
    const location = useLocation();

    var menu_fold = JSON.parse(localStorage.getItem("menu_fold")) || false;
    const [collapsed, setCollapsed] = useState(menu_fold);

    useEffect(() => {
        var onChangeMenuFoldState = (event) => {
            // console.log(event.detail)
            setCollapsed(event.detail)
        }
        window.addEventListener('change_menu_fold', onChangeMenuFoldState)

        return () => {
            window.removeEventListener('change_menu_fold', onChangeMenuFoldState)
        }
    }, [])


    const items = [
        {
            key: 'UserCenter',
            icon: <UserOutlined/>,
            label: '个人中心',
        },
        {
            key: 'Logout',
            icon: <LogoutOutlined/>,
            label: '退出登录',
        },
    ]

    const onClick = ({key}) => {
        history.push(`/${key}`);
    };

    // console.log(location)
    const fullScreenPath = [
        '/Login',
        '/Logout'
    ]
    if (fullScreenPath.includes(location.pathname)) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <ProLayout
            {...ProLayoutDefaultProps}
            collapsed={collapsed}
            location={{
                pathname,
            }}
            token={{
                header: {
                    colorBgMenuItemSelected: 'rgba(255,0,0,0.5)',
                },
            }}
            // siderMenuType="group"
            menu={{
                // 菜单收起时，显示菜单名字
                collapsedShowGroupTitle: true,
                defaultOpenAll: true
            }}
            avatarProps={{
                src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                size: 'small',
                title: 'avatarProps',
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items,
                                onClick
                            }}

                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                return <span>actionsRender</span>;
            }}
            headerTitleRender={(logo, title, _) => {
                return <span>headerTitleRender</span>;
            }}
            headerContentRender={(props) => {
                return (<Breadcrumb {...props}></Breadcrumb>);
            }}
            menuFooterRender={(props) => {
                return (<span>menuFooterRender</span>);
            }}
            onMenuHeaderClick={(e) => console.log('onMenuHeaderClick:', e)}
            menuItemRender={(item, dom) => (
                <div
                    onClick={() => {
                        // console.log('click menu item', item)
                        setPathname(item.path);
                        history.push(item.path);
                    }}
                >
                    {dom}
                </div>
            )}
            collapsedButtonRender={() => null}
        >
            <div className="content-container">
                {children}
            </div>
        </ProLayout>
    );
};