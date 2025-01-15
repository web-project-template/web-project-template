import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
    CaretDownFilled,
    DoubleRightOutlined,
    GithubFilled,
    InfoCircleFilled,
    LogoutOutlined,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';

var route = {
    path: '/',
    routes: [
        {
            path: '/RefreshPage',
            name: '刷新页面(RefreshPage)',
            icon: <ChromeFilled/>,
        },
        {
            path: '/UpdateSearchParams',
            name: '动态更新参数(UpdateSearchParams)',
            icon: <ChromeFilled/>,
        },
        {
            path: '/Modal',
            name: '对话框(Modal)',
            icon: <ChromeFilled/>,
        },
        {
            path: '/Loading',
            name: '加载中(Loading)',
            icon: <ChromeFilled/>,
        },
        {
            path: '/Button',
            name: '按钮(Button)',
            icon: <ChromeFilled/>,
        },
        {
            path: '/Icons',
            name: '图标(Icons)',
            icon: <SmileFilled/>,
        },
        {
            path: '/Input',
            name: '输入框(Input)',
            icon: <CaretDownFilled/>,
        },
        {
            path: '/Table',
            name: '表格(Table)',
            icon: <DoubleRightOutlined/>,
        },
        {
            path: '/PageContainer',
            name: '页面容器(PageContainer)',
            icon: <CrownFilled/>,
        },
        {
            name: '列表页',
            icon: <TabletFilled/>,
            path: '/list',
            component: './ListTableList',
            routes: [
                {
                    path: '/list/sub-page',
                    name: '一级列表页面',
                    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                    routes: [
                        {
                            path: 'sub-sub-page1',
                            name: '一一级列表页面',
                            icon: <CrownFilled/>,
                            component: './Welcome',
                        },
                        {
                            path: 'sub-sub-page2',
                            name: '一二级列表页面',
                            icon: <CrownFilled/>,
                            component: './Welcome',
                        },
                        {
                            path: 'sub-sub-page3',
                            name: '一三级列表页面',
                            icon: <CrownFilled/>,
                            component: './Welcome',
                        },
                    ],
                },
                {
                    path: '/list/sub-page2',
                    name: '二级列表页面',
                    icon: <CrownFilled/>,
                    component: './Welcome',
                },
                {
                    path: '/list/sub-page3',
                    name: '三级列表页面',
                    icon: <CrownFilled/>,
                    component: './Welcome',
                },
            ],
        },
    ],
}

export default {
    prefixCls: "seasun", // 定义组件的类名前缀
    fixSiderbar: true,   // 是否固定导航
    layout: 'mix', // layout 的菜单模式，side：右侧导航，top：顶部导航, mix 混合
    route,
};