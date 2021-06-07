import Command from "meta/command";
import COMMANDS from "./index";

export var addWallet = new Command(COMMANDS.addWalletInfo, {
    async init(state) {
      state.wallet = {info: undefined};
    },
    
    async execute({ urlWallet }) {
        return urlWallet;
      },
  
    success(state, params, result) {
      state.wallet.info = result;
    },
  
    error(state, params, error) {
      console.error(error);
    },
  });

  export var setConnection = new Command(COMMANDS.setConnection, {
    async init(state) {
      state.wallet = {connected: false};
    },
    
    async execute(value) {
        return value;
      },
  
    success(state, params, result) {
      state.wallet.connected = result;
    },
  
    error(state, params, error) {
      console.error(error);
    },
  });
  

  export default [addWallet, setConnection];