import {Button} from 'antd';
import {useHistory} from 'react-router-dom';

export default () => {
    const history = useHistory();
    const searchParams = new URLSearchParams(history.location.search);
    const paramsObject = Object.fromEntries(searchParams.entries());
    console.log(paramsObject);

    const handleUpdateParams = () => {
        // 获取当前URL的查询参数
        const queryParams = new URLSearchParams(history.location.search);
        // 更新参数
        queryParams.set('value', Math.random());
        // 构建新的查询字符串
        const newSearch = queryParams.toString();
        // 使用history.push更新URL
        history.push({pathname: history.location.pathname, search: newSearch});
    };

    return (
        <>
            <Button onClick={handleUpdateParams} type="primary">更新参数</Button>
        </>
    )
}