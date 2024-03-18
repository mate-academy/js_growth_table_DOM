'use strict';

// write code here
const buttons = document.querySelectorAll('.button');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');
let rows = table.querySelectorAll('tr').length;
let cols = table.querySelectorAll('tr')[0].children.length;

const max = 10;
const min = 2;

const updateButtonState = () => {
  addRow.disabled = rows >= max;
  removeRow.disabled = rows <= min;
  addColumn.disabled = cols >= max;
  removeColumn.disabled = cols <= min;
};

[...buttons].forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target) {
      case addRow:
        if (rows < max) {
          table.append(table.lastElementChild.cloneNode(true));
          rows++;
        }
        break;

      case removeRow:
        if (rows > min) {
          table.lastElementChild.remove();
          rows--;
        }
        break;

      case addColumn:
        if (cols < max) {
          [...table.children].forEach((row) => {
            row.append(row.lastElementChild.cloneNode(true));
          });
          cols++;
        }
        break;

      case removeColumn:
        if (cols > min) {
          [...table.children].forEach((row) => row.lastElementChild.remove());
          cols--;
        }
        break;

      default:
        break;
    }
    updateButtonState();
  });
});
