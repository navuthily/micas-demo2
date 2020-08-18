import React from 'react';
import LoginForm from '../../../components/login-form/index.js';
import { Link } from 'umi';
export default class index extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Link to="/home">Go to home page</Link>
      </div>
    );
  }
}
