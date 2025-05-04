export default class CalculatorInvoker {
  constructor() {
    this.commands = [];
  }

  storeAndExecute(command) {
    this.commands.push(command);
    return command.execute();
  }
}
