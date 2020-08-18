import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import styles from './index.less';
import { Redirect } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 
const baseURL = 'http://localhost:4000/';
const LoginForm = () => { 

  const [redirect, setRedirect] = useState(false);

  const onFinish =values =>{
   console.log(values)
    dispatch({
      type: 'app/login',
      payload: {
        ...value,
      }
    })
    // làm sao để set redirect sang true chuyển trang chộ này
  }
  console.log(redirect);
  
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Form name="normal_login" className={styles.loginform} onFinish={onFinish}>
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
  );
};
export default LoginForm;
