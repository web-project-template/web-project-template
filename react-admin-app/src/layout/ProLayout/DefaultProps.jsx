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

const route = {
    path: '/',
    routes: [
        {
            name: 'SACP',
            icon: <TabletFilled/>,
            path: 'SACP',
            routes: [
                {
                    name: "违规业务",
                    path: "Illegal"
                },
                {
                    name: "标注",
                    path: "Mark",
                    routes: [
                        {
                            name: "视频列表",
                            path: "MarkVideo"
                        },
                        {
                            name: "图片列表",
                            path: "MarkImage"
                        },
                        {
                            name: "推理信息",
                            path: "MarkInference"
                        },
                        {
                            name: "标注质检",
                            path: "QualityInspection"
                        },
                        /*{
                            name: "标注图片列表",
                            path: "MarkList",
                            hideInMenu: true,
                        },*/
                    ]
                }
            ]
        },
        {
            name: "AntDesign",
            icon: <CrownFilled/>,
            path: "AntDesign",
            routes: [
                {
                    name: "数据录入",
                    path: 'Form',
                    routes: [
                        {
                            name: "表单(Form)",
                            path: 'Form'
                        },
                        {
                            path: 'Input',
                            name: '输入框(Input)',
                            icon: <CaretDownFilled/>,
                        },
                        {
                            path: 'Select',
                            name: '选择器(Select)',
                            icon: <ChromeFilled/>,
                        },
                        {
                            path: 'Upload',
                            name: '上传(Upload)',
                            icon: <ChromeFilled/>,
                        },
                    ]
                },
                {
                    path: 'RichTextEditor',
                    name: '富文本编辑器(RichTextEditor)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'RefreshPage',
                    name: '刷新页面(RefreshPage)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'UpdateSearchParams',
                    name: '动态更新参数(UpdateSearchParams)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'Modal',
                    name: '对话框(Modal)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'Loading',
                    name: '加载中(Loading)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'Button',
                    name: '按钮(Button)',
                    icon: <ChromeFilled/>,
                },
                {
                    path: 'Icons',
                    name: '图标(Icons)',
                    icon: <SmileFilled/>,
                },
                {
                    path: 'Table',
                    name: '表格(Table)',
                    icon: <DoubleRightOutlined/>,
                },
                {
                    path: 'PageContainer',
                    name: '页面容器(PageContainer)',
                    icon: <CrownFilled/>,
                },
            ]
        }
    ],
}

export default {
    prefixCls: "seasun", // 定义组件的类名前缀
    fixSiderbar: true,   // 是否固定导航
    layout: 'mix', // layout 的菜单模式，side：右侧导航，top：顶部导航, mix 混合
    route,
};