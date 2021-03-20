import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState('');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode='horizontal'
      className='container-fluid'>
      <Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Item>
      <Item key='login' icon={<UserAddOutlined />} className='float-right'>
        <Link to='/login'>Log In</Link>
      </Item>
      <Item key='register' icon={<UserAddOutlined />} className='float-right'>
        <Link to='/register'>Register</Link>
      </Item>
      <SubMenu key='user' icon={<UserOutlined />} title='User Name'>
        <Menu.ItemGroup>
          <Item key='setting:1' icon={<LogoutOutlined />}>
            Log out
          </Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default NavBar;
