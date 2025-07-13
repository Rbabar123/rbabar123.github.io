// ui.js
export class UI {
  constructor() {
    this.expressionDisplay = document.getElementById('expression');
    this.resultDisplay = document.getElementById('result');
  }

  update(expression, result) {
    this.expressionDisplay.textContent = expression;
    this.resultDisplay.textContent = result;
  }
}
