import React from 'react';
import 'antd/dist/antd.css';
import { AppState } from './model';
import styles from './index.less';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { Redirect, Link, connect } from 'umi';
const { Header, Sider, Content } = Layout;

class AuthLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'app/init',
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onLogout = () => {
    this.props.dispatch({
      type: 'app/logout',
    });
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout}>
          <Header
            className={styles.siteLayoutBackground}
            style={{ padding: 0 }}
          >
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                {' '}
                <Link to="/service-places">Service-places</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/booking">Booking</Link>
              </Menu.Item>
              <Button onClick={this.onLogout}>Logout</Button>
            </Menu>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                onClick: this.toggle,
              },
            )}
          </Header>
          <Content
            className={styles.siteLayoutBackground}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ app }: { app: AppState }) => ({ app }))(AuthLayout);
