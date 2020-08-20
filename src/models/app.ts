// // import service from './services';
// // import {apiLogin} from '../services/api.js'
// import service from './services';
// import { Effect, Reducer } from 'umi';
// // import axios from 'axios';

// export interface LoginState {
//   name: string,
//   phone: string,
//   password :string,
//   isLogin: boolean
// }


// export interface LoginModelType {
//   namespace: string,
//   state: LoginState,
//   effects:{
//     login:Effect;
//     fetch:Effect;
//   }
//   reducers:{
//     save:Reducer<LoginState>;
//   }
// }
// const LoginModel : LoginModelType= {
//   namespace: 'login',
//   state: {
//     name:"",
//     phone:"",
//     password:"",
//     isLogin: false
//   },
  
//   effects: {
//     *submitlogin( {payload},{call, put, select}){
//       console.log('----------call effect -----')
//      const {response} = yield call(service.postLogin, payload);
//      console.log(response)
//     // --------

//       yield put({
//         type: 'fetch',
//         payload ,//với lại cai token chộ này nữa
//       })
//     },
//     *fetch({ payload }, { call, put }) {
//       const { data } = yield call(service.getLogin);
//       yield put({
//         type: 'save',
//         payload: {
//           list: data,// chặp là email,pass
//         },
//       });
//     }
//   },

//   reducers:{
//     save(state, action){
//       console.log('----------call reducer --save---');
//       console.log(state);
//       console.log(action)
//       return {
//         ...state,
//         ...action.payload,
//       }
//     }
//   }
// }
// export default LoginModel;
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
  token:any
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
    token:null
  },
  
  effects: {
    *submitlogin( {payload},{call, put, select}){
      console.log('----------call effect -----')
     const response = yield call(service.postLogin, payload);
     console.log(response.data, 'respone login này')
var dataLogin =response.data;
//     const token = yield call(loginApi, payload)
// console.log('token nè: =>', token)
    // --------

//=--------------
      yield put({
        type: 'save',
        dataLogin ,//với lại cai token chộ này nữa
      })
    },

  },
  
  reducers:{
    save(state, action, token){
      console.log('----------call reducer --save---');
      console.log(state, 'state ở reducer này');
      console.log(action.dataLogin, 'action ở reducer này')
    const a=action.dataLogin;
    const b = a.user ;
    const c= a.token
    console.log('token, ',c)
      return {
        ...b,
        ...action.payload,// hay là action.datalogin ?
        ...c
      }
    }
  }
}
export default LoginModel;