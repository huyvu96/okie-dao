import { createSmartAction } from 'redux-smart-actions';

export const API_URL = 'http://api.okiedao.tk/api/v1/';
export const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

export const loginByAddress = createSmartAction((data) => {
  return {
    request: {
      url: `${API_URL}/user/login-by-address`,
      method: 'post',
      data,
    },
    meta: {
      asMutation: false,
    },
  };
});

export const getUsers = createSmartAction(() => {
  return {
    request: {
      url: 'https://60b32c291bec230017bf3454.mockapi.io/users',
    },
    meta: {
      asMutation: false,
    },
  };
});
