export default class CalculatorInvoker {
  constructor() {
    this.commands = [];
  }

  storeAndExecute(command) {
    this.commands.push(command);
    return command.execute();
  }
  undo() {
    const command = this.commands.pop();
    if (command) {
      return command.undo();
    } else {
      console.log("Nothing to undo");
    }
  }
}
