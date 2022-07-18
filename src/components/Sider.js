import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { DRAWER_ITEMS } from './drawer/constants';
import {  useHistory } from "react-router-dom";
import { useState } from 'react';

import Profile from './profile/Profile';
import Login from './login/Login';
import Register from './login/Register';

  import AllGossips from './Gossips/AllGossips';
import EditGossip from './Gossips/EditGossip';
import MyGossips from './Gossips/MyGossips';
import PostGossip from './Gossips/PostGossip';
import UpdateUser from './login/UpdateUser';

const { Header, Sider, Content } = Layout;

function SiderDemo () {

const [collapsed, setCollapsed] = useState(false)



  const toggle = ()=>{
    setCollapsed(!collapsed)
  }

 

    const history  = useHistory()
    const location = useLocation()


    const onPressItem = (item)=>{
      console.log(item)
      history.push(item.to)
    }
    

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>

          {DRAWER_ITEMS.map((item)=>{

           return  <Menu.Item key={item.key} onClick={()=>onPressItem(item)} >
            {item.name}
          </Menu.Item>

          })}
           
          
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 ,background:"white"}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

        {location.pathname === "/profile"?<Profile/> :location.pathname === "/login" ? <Login/> :location.pathname === "/register" ?<Register/> :location.pathname==="/allGossip" ? <AllGossips/> :location.pathname === "/editGossip" ? <EditGossip/> : location.pathname === "/yourGossip" ?<MyGossips/> : location.pathname === "/postGossip"?<PostGossip/> : location.pathname === "/updateUser"?<UpdateUser/>:"Loading..."}
          </Content>
        </Layout>
      </Layout>
    );
  }


export default SiderDemo