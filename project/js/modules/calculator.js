// calculator.js
export class Calculator {
  constructor() {
    this.expression = '';
    this.result = '0';
  }

  append(value) {
    this.expression += value;
  }

  appendFunction(func) {
    const fnMap = {
      sin: 'Math.sin',
      cos: 'Math.cos',
      tan: 'Math.tan',
      log: 'Math.log10',
      ln: 'Math.log',
      sqrt: 'Math.sqrt'
    };
    this.expression += `${fnMap[func]}(`;
  }

  backspace() {
    this.expression = this.expression.slice(0, -1);
  }

  clear() {
    this.expression = '';
    this.result = '0';
  }

  calculate() {
    try {
      // Replace ^ with Math.pow
      const sanitized = this.expression.replace(/(\d+|\))\^(\d+|\()/g, 'Math.pow($1,$2)');
      this.result = eval(sanitized).toString();
    } catch (err) {
      this.result = 'Error';
    }
  }

  getExpression() {
    return this.expression;
  }

  getResult() {
    return this.result;
  }
}
