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

class LoginForm extends React.Component<PageProps, any> {
  
  onFinish =(value: any)=> {
    // console.log(value, 'value')
    // console.log(this.props.login, 'login')
    // console.log(this.props.dispatch, '<= dispatch')
      this.props.dispatch({
        type:'login/submitlogin',
        payload:
        value
        
      })
    }
   render(){
    const {login:{email,password} } = this.props;

    return (
  <div>
      <Form name="normal_login" className={styles.loginform} onFinish={this.onFinish} >
    
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
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


