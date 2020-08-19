'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target === appendColumn) {
      document.querySelectorAll('tr').forEach((tr) => {
        tr.append(document.createElement('td'));
      });
    };

    if (event.target === removeColumn) {
      document.querySelectorAll('td:last-child').forEach((td) => {
        td.remove();
      });
    };

    if (event.target === appendRow) {
      document.querySelector('.field')
        .append(document.querySelector('tr').cloneNode(true));
    };

    if (event.target === removeRow) {
      document.querySelector('tr:last-child').remove();
    };

    appendColumn.disabled = document.querySelector('tr').children.length > 9;
    removeColumn.disabled = document.querySelector('tr').children.length === 2;
    appendRow.disabled = document.querySelectorAll('tr').length > 9;
    removeRow.disabled = document.querySelectorAll('tr').length === 2;
  });
});
