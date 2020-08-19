import request from '@/utils/request';
import { APIConst } from '@/config';
const create = async (payload: any) => {
  const api = APIConst.todo.create();
  const data = await request.call(api.url, {
    method: api.method,
    data: payload,
  });
  return data;
};

export default {
  create,
};
