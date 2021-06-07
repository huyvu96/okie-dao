const doNothing = () => {};

export default class Command {
  constructor(name, { init, execute, success, error }) {
    this.name = name;

    this.init = init || doNothing;
    this.execute = execute || doNothing;
    this.success = success || doNothing;
    this.error = error || doNothing;
  }
}
