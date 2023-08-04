import React from 'react';

import {
    AppstoreOutlined,
    BarChartOutlined,
    BorderlessTableOutlined,
    CloudOutlined,
    DashboardOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    UserSwitchOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


type Props = {}

const Manage = (props: Props) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>

            <Layout hasSider>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <Menu className='nav-manage' theme="dark" mode="inline" defaultSelectedKeys={['account']}>
                        <Menu.Item key="account">
                            <Link to={"/admin"}>
                                <UserSwitchOutlined />
                                Account
                            </Link>
                        </Menu.Item>
                    </Menu>

                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 , minHeight: "100vh"}}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                            <Outlet></Outlet>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by Còm</Footer>
                </Layout>
            </Layout>

        </div>
    )
}

export default Manage