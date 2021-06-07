import { createDriver } from '@redux-requests/axios';
import { handleRequests } from '@redux-requests/core';
import axios from 'axios';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { isLocalDev, logReduxAction } from 'utils/devConfig';
import { fetchReducer, reducer as core } from 'meta/reducer';

const onRequest = (request, requestAction, store) => {
  const { headers } = request;
  const token = localStorage.getItem('token');

  return {
    ...request,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...headers,
    },
  };
};

const onSuccess = (response, requestAction, store) => {
  return response;
};

const onError = async (error, requestAction, store) => {
  const { response, message, errors } = error;

  try {
    if (response) {
      const { status, data } = response;

      if (data) {
        console.log('data ne', data);
        const { error, message } = data;
        if (error?.message) throw error?.message;
        if (message) throw message;
      }

      if (status >= 400) throw 'Có lỗi không mong muốn xảy ra';
    }

    if (message) throw message;

    if (error.toString().includes('Network Error')) throw 'Lỗi kết nối, vui lòng thử lại';

    throw error;
  } catch (e) {
    throw e;
  }
};

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(axios),
  onRequest,
  onError,
  onSuccess,
});

const reducer = combineReducers({
  // common,
  core,
  fetch: fetchReducer,
  requests: requestsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
  predicate: (getState, action) => logReduxAction && isLocalDev,
});

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger, ...requestsMiddleware)),
);
