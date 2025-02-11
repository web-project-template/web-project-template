import {
    Button,
    ConfigProvider,
    Divider,
    Dropdown,
    Input,
    Popover,
    theme,
} from 'antd';
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
    SmileOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';

import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import route from './route';
import Breadcrumb from '../Breadcrumb'
import {loopMenuItem} from "@/utils/menu";

let count = 1;

export default (props) => {
    const {children, userInfo, userMenus} = props
    const [pathname, setPathname] = useState('/');
    const history = useHistory();
    const location = useLocation();

    var menu_fold = JSON.parse(localStorage.getItem("menu_fold")) || false;
    const [collapsed, setCollapsed] = useState(menu_fold);
    const [openKeys, setOpenKeys] = useState(['AGI', 'SACP', 'AntDesign']);

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
            collapsed={collapsed}
            route={route}
            // prefixCls={'seasun'}  // 定义组件的类名前缀
            fixSiderbar={true}    // 是否固定导航
            layout={'mix'}  // layout 的菜单模式，side：右侧导航，top：顶部导航, mix 混合
            location={{
                pathname,
            }}
            openKeys={openKeys}
            onOpenChange={(val) => {
                // 这里应该是 ProLayout 的 Bug
                if (count++ === 1 && val.length === 0) {
                    val = ['AGI', 'SACP', 'AntDesign']
                }

                setOpenKeys(val)
            }}
            token={{
                header: {
                    colorBgMenuItemSelected: 'rgba(255,0,0,0.5)',
                },
            }}
            menu={{
                // 忽略收起时自动关闭菜单
                ignoreFlatMenu: true,
                // 菜单收起时，显示菜单名字
                collapsedShowGroupTitle: true,
                // 服务器加载 menu 并且使用 icon
                async request() {
                    const menus = loopMenuItem(userMenus);
                    return menus;
                }
            }}
            avatarProps={{
                src: userInfo?.avatar,
                size: 'small',
                title: userInfo?.name,
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
                return <>
                    <img src="/images/logo.png" alt=""/>
                    <span>headerTitleRender</span>
                </>;
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
            <div className="main-container">
                {children}
            </div>
        </ProLayout>
    );
};