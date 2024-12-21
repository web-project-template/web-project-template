import {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

export default () => {
  const history = useHistory();
  const [countdown, setCountdown] = useState(3);
  let myCount = 3;

  useEffect(() => {
    var id = setInterval(() => {
      setCountdown(--myCount);
      if(myCount <= 0){
        window.clearInterval(id)
        history.push(`/Login`);
      }
    }, 1000)
  }, [])

  return (
    <>
      注销成功, {countdown}秒后自动跳转到登录。
    </>
  )
}