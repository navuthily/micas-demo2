import axios from 'axios';
const API_URL = "http://localhost:4000";
// const API_URL = "http://micasvn.ddns.net:9999";
const callApi= function (enpoint, method, body){
  return axios({
    method,
    url:`${Config.API_URL}/${enpoint}`,
    data: body
  })
    .catch(err =>{
      console.log(err);
  });
}
export const apiLogin = function (data) {
  return callApi("login", "post", data)
}