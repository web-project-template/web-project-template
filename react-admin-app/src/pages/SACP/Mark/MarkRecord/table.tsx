import {ProColumns} from '@ant-design/pro-table/es/typing';
import {Popconfirm, Space, Tag} from 'antd';
import {ActionType} from '../../../../utils/action';
import {TABLE_COLUMN_OPTIONS} from "@/constants";

export function getColumns(params: any): ProColumns[] {
    const {onAction} = params;

    return [
        {
            title: '处理人',
            dataIndex: 'name',
            key: 'name',
            width: 260,
            align: 'center',
            valueType: 'input',
        },
        {
            title: '关键帧标注',
            dataIndex: 'type',
            key: 'type',
            valueType: 'select',
            hideInSearch: true,
        },
        {
            title: '优秀/未打分',
            dataIndex: 'type',
            key: 'type',
            valueType: 'select',
            hideInSearch: true,
        },
        {
            ...TABLE_COLUMN_OPTIONS,
            width: 100,
            render: (value: any, record: any) => {
                return (
                    <Space>
                        <a onClick={() => onAction(ActionType.DETAIL, record)}>查看</a>
                    </Space>
                );
            },
        },
    ] as ProColumns[];
}
