// main.js
import { Calculator } from './modules/calculator.js';
import { UI } from './modules/ui.js';
import { History } from './modules/history.js';


const calc = new Calculator();
const ui = new UI();
const history = new History();


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const operator = button.dataset.operator;
    const func = button.dataset.function;
    const action = button.dataset.action;

    if (value !== undefined) {
      calc.append(value);
    } else if (operator) {
      calc.append(operator);
    } else if (func) {
      calc.appendFunction(func);
    } else if (action === 'clear') {
      calc.clear();
    } else if (action === 'backspace') {
      calc.backspace();
   } else if (action === 'calculate') {
  calc.calculate();
  history.add(calc.getExpression(), calc.getResult());
}

    ui.update(calc.getExpression(), calc.getResult());
  });
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%', '^', '(', ')'].includes(key)) {
    calc.append(key);
  } else if (key === 'Backspace') {
    calc.backspace();
  } else if (key === 'Enter' || key === '=') {
    calc.calculate();
  } else if (key === 'Escape') {
    calc.clear();
  }

  ui.update(calc.getExpression(), calc.getResult());
});

// Toggle history panel visibility
const toggleBtn = document.getElementById('toggle-history');
const historyWrapper = document.getElementById('history-wrapper');

toggleBtn.addEventListener('click', () => {
  historyWrapper.classList.toggle('hidden');
});


