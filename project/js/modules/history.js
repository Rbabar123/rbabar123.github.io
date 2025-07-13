// history.js
export class History {
  constructor() {
    this.entries = [];
    this.container = document.getElementById('history-list');
  }

  add(expression, result) {
    const item = { expression, result };
    this.entries.unshift(item); // Newest at top
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = '';
    this.entries.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'history-entry';
      div.textContent = `${entry.expression} = ${entry.result}`;
      this.container.appendChild(div);
    });
  }

  clear() {
    this.entries = [];
    this.render();
  }
}
