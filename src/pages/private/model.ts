import {Effect, Reducer, history} from 'umi';
export interface AppUser {
_id: string;
name: string;
}
export interface AppState {
  isLogginIn: boolean;
  user: AppUser|null;
}

export interface AppModelType {
  namespace: string;
  state: AppState;
  effects:{
    init: Effect;
    logout:Effect;
  };
  reducers:{
    save: Reducer<AppState>;
  }
};

const AppModel : AppModelType={
  namespace: 'app',
  state:{
    isLogginIn: false,
    user:null
  },
  effects:{
    *init(_,{put}){
      const token = localStorage.getItem('accessToken')
      if(!token){
        return yield put(history.push('/login'))
      }
    },
    *logout(){
     localStorage.removeItem('accessToken')
     return (history.push('/login'))
  
    }

  },
  reducers:{
    save(state,{payload}){
      return {
        ...state,
        ...payload
      }
    }
  }
}
export default AppModel;