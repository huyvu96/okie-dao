/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
import Command from "meta/command";

export var fetchCommand = new Command("FETCH_COMMAND", {
  async init(state) {},
  async execute({api, params}) {
    let res = await api.exec(params);
    return res;
  },

  success(state, name, params, result) {},
  error(state, name, params, error) {},
});

export default fetchCommand;
