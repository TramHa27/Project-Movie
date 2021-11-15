import React, { Fragment, useState } from "react"
import { Layout, Menu } from 'antd';
import {
    FileOutlined,
    UserOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import { NavLink, Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
    const [state, setState] = useState({
        collapsed: false,
    })


    const onCollapse = collapsed => {
        setState({ collapsed });
    };

    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
                    <NavLink to="/">
                        <img
                            src="https://i.imgur.com/lC22izJ.png"
                            alt="logo"
                            style={{ maxWidth: "50px",margin:"10px auto" }}
                        />
                    </NavLink>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                            <Menu.Item key="1">
                                <NavLink to="/admin/users">
                                    Users
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/admin/adduser">
                                    Add User
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<PlayCircleOutlined />} title="Films">
                            <Menu.Item key="3">
                                <NavLink to="/admin/films">
                                    Films
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to="/admin/addfilm">
                                    Add Film
                                </NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Show time
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '16px' }}>
                        
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                            <props.component {...propsRoute} />

                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        </Fragment>

    }} />

}