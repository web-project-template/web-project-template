import {MarkItem} from "./index";

type Props = {
    item: MarkItem;
}

export default ({item}: Props) => {
    return (
        <li>
            <div>
                <img src={item.url} alt="" width={100}/>
                <p>更新时间：{item.time}</p>
                <p>图片地址：{item.url}</p>
            </div>
        </li>
    );
};
