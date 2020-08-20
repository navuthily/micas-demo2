
import service from './services';
import { Effect, Reducer } from 'umi';
// import axios from 'axios';
const loginUrl : string='http://localhost:4000/login';
const loginApi = (payload): any=> {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}
export interface LoginState {
  email: string,
  password :string,
  isLogin: boolean,
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
    isLogin: false,
  },
  
  effects: {
    *submitlogin( {payload},{call, put, select}){
      console.log('----------call effect -----')
//      const response = yield call(service.postLogin, payload);
//      console.log(response.data, 'respone login này')
// var dataLogin =response.data;
const response = yield call(service.postLogin, payload);
console.log(response, 'res nhé<>')
      yield put({
        type: 'save',
        payload ,
      })
    },

  },
  
  reducers:{
    save(state, action){
    //   console.log('----------call reducer --save---');
    //   console.log(state, 'state ở reducer này');
    //   console.log(action.dataLogin, 'action ở reducer này')
    // const a=action.dataLogin;
    // const b = a.user ;
    // const c= a.token
    // console.log(b)
    // localStorage.setItem("accessToken", c);
    // localStorage.setItem("user", JSON.stringify(b));
      return {
        ...state,//...b,
        ...action.payload,// hay là action.datalogin ?
      }
    }
  }
}
export default LoginModel;
//khi nào link qua trang logout thì xóa đi