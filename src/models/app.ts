import service from './services';
 import {apiLogin} from '../services/api.js'
import { Effect, Reducer } from 'umi';
// import axios from 'axios';

export interface LoginState {
  email: string,
  password :string,
  isLogin: boolean
}


export interface LoginModelType {
  namespace: string,
  state: LoginState,
  effects:{
    login:Effect;
  }
  reducers:{
    save:Reducer<LoginState>;
  }
}
const LoginModel : LoginModelType= {
  namespace: 'login',
  state: {
    email:"",
    password:"",
    isLogin: false
  },
  
  effects: {
    *submitlogin( {payload},{call, put, select}){
      const response = yield call (apiLogin )
      if(!response){
        console.log('no data was fetch')
      }
      console.log('payload', payload)
      console.log('----------call effect -----');
      // const response = yield call(getUserInfo)
      // const { success, message, data } = response.data

      // if (!success) {
      //   return notification.error(message)
      // }     
       const { err } = yield call(service.create, { content: payload.content });
      yield put({
        type: 'save',
        payload,
      })
    },
  },

  reducers:{
    save(state, action){
      console.log('----------call reducer --save---');
      console.log(state);
      console.log(action)
      return {
        ...state,
        ...action.payload,
      }
    }
  }
}
export default LoginModel;