
import {apiLogin} from '../services/api.js'
import axios from 'axios'
export interface IApp {
  user: any
  isLoggedIn: boolean
  appFilters: any
  locationPathname: string
  location: any
}

const initState: IApp = {
  user: null,
  isLoggedIn: true,
  locationPathname: '',
  appFilters: {},
  location: {},
}

export default {
  namespace: 'app',
  state: initState,
  reducers: {
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *login({ email, password}: any, {call, put, select}: any){
     // payload ={email, password}
      const response = yield call (apiLogin ,    {
        email,
        password,})
      if(!response){
        return
      }
      const { token, user } = response.data;
      console.log(response.data);
      console.log(token);
      axios.defaults.headers.common['x-access-token'] = token;
      localStorage.setItem('authKey', token);
      localStorage.setItem('user', JSON.stringify(user));
    //  setRedirect(true);
    },
   

  },
  subscriptions: {
    setupHistory({ dispatch, history }:any) {
      history.listen(() => {
        const token = localStorage.getItem('authKey')
        dispatch({
          type: 'updateState',
          payload: {
            isLoggedIn: !!token,
            locationPathname: location.pathname,
            location: location,
          },
        })
      })
    },
    setup({ dispatch }:any) {
      dispatch({ type: 'init' })
    },
  },
}
