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
      url: '/employee-login',
      method: methods.post,
    }),
  },
};
