'use strict';

const camelize = string => string.replace(/-./g, w => w[1].toUpperCase());
const buttons = document.querySelectorAll('.button');
const table = document.querySelector('table');

document.addEventListener('click', {
  handleEvent(e) {
    this.action = e.target.closest('.button');

    if (this.action) {
      this[camelize(this.action.classList[0])]();
      this.checkButtonsState();
    }
  },

  appendRow() {
    const row = table.insertRow();

    [...table.rows[0].cells].forEach(() => {
      row.insertCell();
    });
  },

  removeRow() {
    table.deleteRow(-1);
  },

  appendColumn() {
    [...table.rows].forEach(row => {
      row.insertCell();
    });
  },

  removeColumn() {
    [...table.rows].forEach(row => {
      row.deleteCell(-1);
    });
  },

  checkButtonsState() {
    const { length: columns } = table.rows[0].cells;
    const { length: rows } = table.rows;
    const isDisabled = {
      'append-row': () => rows >= 10,
      'remove-row': () => rows <= 2,
      'append-column': () => columns >= 10,
      'remove-column': () => columns <= 2,
    };

    [...buttons].forEach(({ classList: [ type ] }, i, thisButtons) => {
      if (isDisabled[type]) {
        thisButtons[i].disabled = isDisabled[type]();
      }
    });
  },
});
