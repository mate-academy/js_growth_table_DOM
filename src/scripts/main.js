'use strict';

const buttons = document.querySelectorAll('.button');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');
let totalRows = table.querySelectorAll('tr').length;
let totalColumns = table.querySelectorAll('tr')[0].children.length;
const max = 10;
const min = 2;

function updateButtonState() {
  appendRow.disabled = totalRows >= max;
  removeRow.disabled = totalRows <= min;
  appendColumn.disabled = totalColumns >= max;
  removeColumn.disabled = totalColumns <= min;
}

[...buttons].forEach(button => {
  button.addEventListener('click', e => {
    switch (e.target) {
      case appendRow:
        if (totalRows < max) {
          table.append(table.lastElementChild.cloneNode(true));
          totalRows++;
        }
        break;

      case removeRow:
        if (totalRows > min) {
          table.lastElementChild.remove();
          totalRows--;
        }
        break;

      case appendColumn:
        if (totalColumns < max) {
          [...table.children].forEach(row => {
            row.append(row.lastElementChild.cloneNode(true));
          });
          totalColumns++;
        }
        break;

      case removeColumn:
        if (totalColumns > min) {
          [...table.children].forEach(row => row.lastElementChild.remove());
          totalColumns--;
        }
        break;

      default:
        break;
    }

    updateButtonState();
  });
});
