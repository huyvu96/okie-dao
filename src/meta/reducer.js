//
// This core reducer is targeted to reduce the code lines while using Redux.
// We keep the core concept of Redux, but make it simpler to use.
// So that we don't have to repeat the same code while follow the Redux standard.
//
// Usage:
//
// 1. add reducer to redux
// 2. write standalone Command using command.js
// 3. use addCommand to bootstrap
// 4. use runCommand as your only action
// 5. use connectCommand as connect
//
// Have fun.
//
import update from 'immutability-helper';
import { camelCase } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var initState = {};
var commands = {};

export function addCommands(...args) {
  return args.map((command) => {
    commands[command.name] = command;
    console.log('Add command: ', command?.name ?? null);
    return command.init(initState);
  });
}

export function reducer(
  state = initState,
  { type, name, params, result, error },
) {
  let command = commands[name];
  if (!command) return state;

  // Here we use one-level assign to keep the prototype of object.
  // We can also use this:
  //
  // let newState = JSON.parse(JSON.stringify(state));
  //
  // But we don't do it here because it's not critical in most apps.
  let newState = { ...state };

  switch (type) {
    case `${name}_SUCCESS`:
      command.success(newState, params, result);
      // console.log('Command success:', name);
      break;
    case `${name}_ERROR`:
      command.error(newState, params, error);
      // console.log('Command error:', name, error);
      break;
    default:
      return state;
  }

  return newState;
}

const getCommandName = (type = '') => {
  if (!type.includes('FC_')) return type;
  return camelCase(type.split('_').slice(1, -1).join('_'));
};

export function fetchReducer(state = {}, { type, params, result, error }) {
  let command = commands['FETCH_COMMAND'];
  if (!command || !type.includes('FC_')) return state;
  const name = getCommandName(type);

  if (type.includes('_LOADING')) {
    return update(state, {
      [name]: (v) =>
        update(v || {}, {
          loading: { $set: true },
          error: { $set: error },
          message: {$set: ''}
          // data: { $set: [] },
        }),
    });
  }

  if (type.includes('_SUCCESS')) {
    return update(state, {
      [name]: (v) =>
        update(v || {}, {
          loading: { $set: false },
          data: { $set: result.data },
          error: { $set: error },
          message: {$set: result.message}
        }),
    });
  }

  if (type.includes('_ERROR')) {
    return update(state, {
      [name]: (v) =>
        update(v || {}, {
          loading: { $set: false },
          error: { $set: error },
          message: {$set: result.message}
          // data: { $set: [] },
        }),
    });
  }

  return state;
}

export function runCommand(name, params) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let command = commands[name];
      command
        .execute(params)
        .then((result) => {
          dispatch({
            type: `${name}_SUCCESS`,
            name,
            params,
            result,
          });
          resolve(result);
        })
        .catch((error) => {
          dispatch({
            type: `${name}_ERROR`,
            name,
            params,
            error,
          });
          reject(error);
        });
    });
  };
}

export function fetchCommand({ api, params }) {
  const { name } = api;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      let command = commands['FETCH_COMMAND'];
      dispatch({
        type: `FC_${name}_LOADING`,
        params,
      });
      command
        .execute({ api, params })
        .then((result) => {
          dispatch({
            type: `FC_${name}_SUCCESS`,
            params,
            result,
          });
          resolve(result);
        })
        .catch((error) => {
          dispatch({
            type: `FC_${name}_ERROR`,
            params,
            error,
          });
          reject(error);
        });
    });
  };
}

export function connectCommand(Cls, stateMapper) {
  const mapper = (state) => ({
    // core: state.core,
    // fetch: state.fetch,
    ...(stateMapper ? stateMapper(state) : undefined),
  });

  return connect(mapper, (dispatch) => ({
    runCommand: bindActionCreators(runCommand, dispatch),
    fetchCommand: bindActionCreators(fetchCommand, dispatch),
  }))(Cls);
}
