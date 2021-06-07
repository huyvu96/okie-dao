// /* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
// import Command from 'meta/command';
// import COMMANDS from './index';
//
// export var addCounter = new Command(COMMANDS.addCounter, {
//   async init(state) {
//     state.counter = 0;
//   },
//   async execute({ counter, localCounter }) {
//     return counter + localCounter;
//   },
//
//   success(state, params, result) {
//     state.counter = result;
//   },
//
//   error(state, params, error) {
//     console.error(error);
//     state.counter = 0;
//   },
// });
//
// export var getUsers = new Command(COMMANDS.getUsers, {
//   async init(state) {
//     state.users = [];
//   },
//   async execute({ results }) {
//     let users = await sampleApis.getUsers.exec({ results });
//     return users;
//   },
//
//   success(state, params, result) {
//     state.users = result.results;
//   },
//
//   error(state, params, error) {
//     console.error(error);
//   },
// });
//
// export default [addCounter, getUsers];
