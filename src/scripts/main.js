'use strict';

const table = document.querySelector('tbody');
const buttons = document.querySelectorAll('.button');
const rows = document.querySelector('tr');
const columns = document.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target) {
      case appendRow:
        table.append(rows.cloneNode(true));
        break;
      case removeRow:
        document.querySelector('tr:last-child').remove();
        break;
      case appendCol:
        columns.forEach(tr => tr.append(document.createElement('td')));
        break;
      case removeCol:
        document.querySelectorAll('td:last-child')
          .forEach(td => td.remove());
        break;
    };

    appendRow.disabled = document.querySelectorAll('tr').length === maxLength;
    removeRow.disabled = document.querySelectorAll('tr').length === minLength;

    appendCol.disabled = document.querySelector('tr')
      .children.length === maxLength;

    removeCol.disabled = document.querySelector('tr')
      .children.length === minLength;
  });
});
