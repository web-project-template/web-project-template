import {ActionType, createActionFun} from '@/utils/action'
import {useState} from "react";
import MarkListItem from "./MarkListItem";

export type MarkItem = {
    url: string;
    time: string;
}

export default () => {
    const [markList, setMarkList] = useState<Array<MarkItem>>([
        {
            url: '/images/test/logo.png',
            time: '2024-04-19 08:20:00'
        }
    ])

    const onAction = createActionFun({
        [ActionType.COPY](data: MarkItem) {
        },
        [ActionType.CANCEL](data: MarkItem) {
        },
    }, null)

    return (
        <div className={'mark-list'}>
            <ul>
                {markList.map((item: any) => {
                    return <MarkListItem item={item} key={item}></MarkListItem>
                })}
            </ul>
        </div>
    )
}
