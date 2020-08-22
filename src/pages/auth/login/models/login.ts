import service from './services';
import {
  Effect,






  Reducer,
  history
} from 'umi';
export interface LoginState {
  phone: string,
    password: string,
    isLogin: boolean,
}
export interface LoginModelType {
  namespace: string,
    state: LoginState,
    effects: {
      submitlogin: Effect;
    }
  reducers: {
    save: Reducer < LoginState > ;
  }
}
const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    phone: "",
    password: "",
    isLogin: false,
  },

  effects: {
    * submitlogin({
      payload
    }: any, {
      call,
      put,
      select
    }: any) {
      yield call(service.postLogin, payload);

      const token = localStorage.getItem('accessToken')
      if (token) {
        return yield put(history.push('/service-places'))
      }

      yield put({
        type: 'save',
        payload,
      })
    },

  },

  reducers: {
    save(response: any, action) {

      return {
        ...response.user,
        ...action.payload,
      }
    }
  }
}
export default LoginModel;
