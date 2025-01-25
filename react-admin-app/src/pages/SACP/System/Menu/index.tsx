// @ts-nocheck
import React, {useState, useCallback, useRef, useEffect} from 'react';
import {
    Row,
    Col,
    Tag,
    Flex,
    Tree,
    Empty,
    Button,
    message,
    Tooltip,
    Popconfirm,
    Space
} from 'antd';

import {ProCard, ProTable} from '@ant-design/pro-components';

import {TreeDataNode, TreeProps} from 'antd';

import './index.scss';
import MenuData from './MenuData';
import {ProColumns} from "@ant-design/pro-table/es/typing";
import {EditTwoTone, FileOutlined, PlusOutlined, SmileOutlined} from "@ant-design/icons";

import * as AntDesignIcons from '@ant-design/icons';

export const IconMap = {
    smile: <SmileOutlined/>,
    file: <FileOutlined/>,
}

export const getIcon = (icon) => {
    if (IconMap[icon]) {
        return IconMap[icon];
    } else if (icon && typeof icon === 'string') {
        let fixIconName =
            icon.slice(0, 1).toLocaleUpperCase() + icon.slice(1) + 'Outlined';
        if (AntDesignIcons[fixIconName] || AntDesignIcons[icon]) {
            return React.createElement(AntDesignIcons[fixIconName] || AntDesignIcons[icon]);
        }
    }

    return null;
};

export const convertMenu = (menus: any) => {
    return menus?.map((item: any) => {
        const newItem: any = {
            // ...item,
            icon: getIcon(item.icon),
            title: item.name,
            key: item.id,
            disabled: item.status === 0
        };

        if (item.routes?.length) {
            let res = convertMenu(item.routes);
            if (res.length > 0) {
                newItem.children = res;
            }
        }

        return newItem;
    });
};

export default () => {
    const [treeData, setTreeData] = useState<TreeDataNode[]>([]);

    useEffect(() => {
        const data = [
            {
                title: '反作弊系统',
                key: 1,
                children: convertMenu(MenuData.data),
                disabled: true
            }
        ]
        setTreeData(data)
    }, []);


    const titleRender = useCallback((nodeData: any) => {
        return (
            <div className={'menu-tree-title'}>
                <Row align={'middle'}>
                    <Col flex='auto' style={{overflow: 'hidden'}}>
                        {nodeData.name || nodeData.title || ''}
                    </Col>
                    <Col flex='none'>
                        <Space>
                            {/* 新增子菜单 */}
                            <Tooltip
                                title='添加子菜单'
                            >
                                <PlusOutlined
                                    style={{fontSize: '18px', color: 'var(--primary)'}}
                                />
                            </Tooltip>

                            {/* 编辑 */}
                            <Tooltip
                                title='编辑菜单'
                            >
                                <EditTwoTone
                                    style={{fontSize: '18px'}}
                                />
                            </Tooltip>

                            {/* 授权 */}
                            <Tag
                                style={{
                                    fontSize: '12px',
                                    cursor: 'pointer'
                                }}
                                color="var(--primary)"
                            >
                                授权
                            </Tag>

                            {/* 启用|停用 */}
                            {nodeData.status === 1 ? (
                                <Tag
                                    color="var(--error)"
                                    style={{fontSize: '12px', cursor: 'pointer'}}
                                >
                                    停用
                                </Tag>
                            ) : (
                                <Tag
                                    color="var(--primary)"
                                    style={{fontSize: '12px', cursor: 'pointer'}}
                                >
                                    启用
                                </Tag>
                            )}
                        </Space>
                    </Col>
                </Row>
            </div>
        );
    }, []);

    const renderLeftTree = () => {
        return (
            <ProCard className={'menu-card'}>
                {treeData?.length > 0 ? (
                    <Tree
                        showIcon
                        showLine={false}
                        treeData={treeData}
                        defaultExpandedKeys={[1]}
                        titleRender={titleRender}
                    />
                ) : (
                    <Empty/>
                )}
            </ProCard>
        );
    };

    const request = async () => {
        return {}
    }
    const columns: ProColumns[] = []

    const headerTitle = () => {
        return (
            <Button
                type="primary"
                icon={<PlusOutlined/>}
            >
                增加功能
            </Button>
        );
    };

    const renderRightTable = () => {
        return (
            <ProTable<any>
                rowKey="id"
                cardBordered
                search={false}
                request={request}
                columns={columns}
                headerTitle={headerTitle()}
            />
        );
    };

    return (
        <>
            <Row gutter={16}>
                <Col flex='500px'>{renderLeftTree()}</Col>
                <Col flex='auto'>{renderRightTable()}</Col>
            </Row>
        </>
    );
};