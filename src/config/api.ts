const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
};

export default {
  apiHost: 'http://localhost:4000',
  methods,

  // submitlogin
  submitlogin: {
    postLogin: () => ({
      url: '/login',
      method: methods.post,
    }),
    getLogin: () => ({
      url: '/login',
      method: methods.post,
    }),
  },
};
