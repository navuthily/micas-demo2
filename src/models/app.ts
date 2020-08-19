
// import {apiLogin} from '../services/api.js'
import { Effect, Reducer } from 'umi';
// import axios from 'axios';

export interface LoginState {
  email: string,
  password :string
}


export interface LoginModelType {
  namespace: string,
  state: LoginState,
  effects:{
    login:Effect;
  }
  reducer:{
    save:Reducer<LoginState>;
  }
}
const LoginModel : LoginModelType= {
  namespace: 'login',
  state: {
    email:"",
    password:""
  },
  
  effects: {
    *submitlogin( {payload},{call, put, select}){
      // const response = yield call (apiLogin )
      // if(!response){
      //   return
      // }
      console.log('payload', payload)
      console.log('----------call effect -----');
      yield put({
        type: 'save',
        payload,
      })
    },
  },

  reducer:{
    save (state, action){
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