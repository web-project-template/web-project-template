import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
  Breadcrumb
} from 'antd';
import React, {useState, useEffect, useCallback} from 'react';
import {useHistory, useLocation,NavLink,} from 'react-router-dom';

export default (props) => {
  const history = useHistory();
  const location = useLocation();
  // console.log({props});
  // console.log({history});
  // console.log({location});

  const {menuData} = props;
  let breadcrumbItems = [
    {name: '首页', path: '/dashboard'},
  ];

  // console.log({menuData})

  function dfs(item, parent, depth, chain) {
    if (item.path === location.pathname) {
      breadcrumbItems = breadcrumbItems.concat([...chain, item]).map(({name, path}) => ({name, path}));
      return false;
    }


    if (item.children) {
      for (let i = 0; i < item.children.length; i++) {
        const child = item.children[i];
        const result = dfs(child, item, depth + 1, [...chain, item]);
        if (!result) {
          break;
        }
      }
    }

    return true
  }

  menuData.forEach(child => dfs(child, null, 1, []))

  // console.log({breadcrumbItems})

  // breadcrumbItems =[]

  var items = breadcrumbItems.map((item,index) => {
    return {
      title: index==0?<NavLink to={item.path}>{item.name}</NavLink>:<span>{item.name}</span>
    }
  })

  var menu_fold = JSON.parse(localStorage.getItem("menu_fold")) || false;

  var [menuFold, setMenuFold] = useState(menu_fold);

  const setMenuFoldState = (val) => {
    setMenuFold(val);
    localStorage.setItem('menu_fold', val);
    window.dispatchEvent(new CustomEvent('change_menu_fold', {detail: val}))
  }

  useEffect(() => {
    /*setTimeout(() => {
      var menu_fold = JSON.parse(localStorage.getItem("menu_fold")) || false;
      setMenuFoldState(menu_fold)
    })*/
  }, []);

  const onClickToggleBtn = () => {
    setMenuFoldState(!menuFold)
  }

  return (
    <div style={{padding: '0 8px'}}>
      {
        menuFold
          ? <MenuUnfoldOutlined onClick={onClickToggleBtn} style={{fontSize: '18px', color: 'red', cursor: 'pointer'}}/>
          : <MenuFoldOutlined onClick={onClickToggleBtn} style={{fontSize: '18px', color: 'red', cursor: 'pointer'}}/>
      }

      <Breadcrumb
        style={{display: 'inline-block', marginLeft: '8px'}}
        items={items}
      />
    </div>
  );
};