import request from '@/utils/request';
import { APIConst } from '@/config';

const postLogin = async (payload: any) => {
const api = APIConst.submitlogin.postLogin();
 
 const data =  await request.call(api.url, {
  method: api.method,
  data: payload,
})
.then(function(res) {
  const data= res.data;
  console.log('dât đâu rứa ----------', data)
  const token= data.token;
  localStorage.setItem("accessToken", token);
  return data;
})
.catch(function(error) {
  return error
})
return data
  // để chộ này đc vì đã gọi xong api rồi 

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
