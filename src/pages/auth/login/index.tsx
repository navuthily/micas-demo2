import React, { useState } from 'react';
import { connect, Loading, ConnectProps, Dispatch, } from 'umi';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import styles from './index.less';
import { Redirect } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 import { LoginState } from '../../../models/app.ts'
const baseURL = 'http://localhost:4000/';

export interface PageProps extends ConnectProps {
  login: LoginState;
  dispatch: Dispatch;
  loading: boolean;
}
export interface StateValue {
  newValue: string
}
class LoginForm extends React.Component<PageProps, any> {
    onFinish =()=>{//phải có 1 param value chộ ni
   console.log(this.props.login, 'login')
   console.log(this.props.dispatch, '<= dispatch')
      this.props.dispatch({
        type:'login/submitlogin',
        payload:{
          email: 'nana',
          password:'123456'
        }
      })
    }
    onChange(event) {
      this.setState({
        newItem: event.target.value,
      });
    }
   render(){
    const {login:{email,password} } = this.props;
 
    return (
  <div>
      <Form name="normal_login" className={styles.loginform} >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className={styles.siteformitemicon} />}
          placeholder="Email"
          onChange={(e)=>this.onChange(e)}
          value={newItem}
          ref={(input) => (this.newItem = input)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className={styles.siteformitemicon} />}
          type="password"
          placeholder="Password"
          onChange={(e)=>this.onChange(e)}
          value={newItem}
          ref={(input) => (this.newItem = input)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className={styles.loginformforgot} href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.loginformbutton}
          onClick={this.onFinish}
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
      <p>Nè: {email}-{password}</p>
  </div>
  );
  }
};


export default connect(
  ({ login, loading , dispatch}: { login: LoginState; loading: Loading, dispatch: Dispatch }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginForm);


