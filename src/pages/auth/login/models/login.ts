import service from './services';
import {
  Effect,
  Reducer, history
} from 'umi';
// import axios from 'axios';
export interface LoginState {
  email: string,
    password: string,
    isLogin: boolean,
}


export interface LoginModelType {
  namespace: string,
    state: LoginState,
    effects: {
      login: Effect;
    }
  reducers: {
    save: Reducer < LoginState > ;
  }
}
const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    email: "",
    password: "",
    isLogin: false,
  },

  effects: {
    * submitlogin({
      payload
    }, {call, put, select }:any) {
      console.log('----------call effect -----')
      const response = yield call(service.postLogin, payload);
      console.log(response, 'res nhé<>')

      const token = localStorage.getItem('accessToken')
      console.log(token)
      if(token){
        return yield put(history.push('/service-places'))
      }
    
      yield put({
        type: 'save',
        payload,
      })
    },

  },

  reducers: {
    save(response: any, action) { // hoặc là state 
      console.log('----------call reducer --save---');

      return {
        ...response.user, // ...state
        ...action.payload,
      }
    }
  }
}
export default LoginModel;
//khi nào link qua trang logout thì xóa đi
