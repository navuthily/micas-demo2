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
  const token= data.Data;
  console.log('data => ', data)
  localStorage.setItem("accessToken", token);

  return data;
})
.catch(function(error) {
  return error
})
  return data
  // để chộ này đc vì đã gọi xong api rồi 

  };

export default {
  postLogin,

};
