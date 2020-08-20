import request from '@/utils/request';
import { APIConst } from '@/config';

//post  email, pá to login

const postLogin = async (payload: any) => {
  const api = APIConst.submitlogin.postLogin();
  const data = await request.call(api.url, {
    method: api.method,
    data: payload,
  });
  console.log(data,'data nè', api)
  return data;
  };
  const getLogin = async (payload: any) => {
    const api = APIConst.submitlogin.getLogin();
    const data = await request.call(api.url, {
      method: api.method,
      data: payload,
    });
    console.log(data,'data nè', api)
    return data;
    };

export default {
  postLogin,
  getLogin
};
