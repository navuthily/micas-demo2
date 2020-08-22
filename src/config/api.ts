const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
};

export default {
  methods,
  submitlogin: {
    postLogin: () => ({
      url: '/login',
      method: methods.post,
    }),
  },
};
