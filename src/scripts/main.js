'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const rows = document.querySelector('tr');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

container.addEventListener('click', (e) => {
  const rowsLenght = rows.children.length;
  const columnLenght = tbody.children.length;

  if (e.target.tagName !== 'BUTTON') {
    return;
  };

  switch (e.target) {
    case appendColumn:
      if (rowsLenght < 10) {
        const allRows = document.querySelectorAll('tr');

        for (let i = 0; i < allRows.length; i++) {
          allRows[i].insertAdjacentHTML('beforeend', '<td></td>');
        }
      }
      break;
    case removeColumn:
      if (rowsLenght > 2) {
        const allRows = document.querySelectorAll('tr');

        for (let i = 0; i < allRows.length; i++) {
          allRows[i].lastElementChild.remove();
        }
      }
      break;
    case appendRow:
      if (columnLenght < 10) {
        tbody.append(tbody.lastElementChild.cloneNode(true));
      }
      break;
    case removeRow:
      if (columnLenght > 2) {
        tbody.lastElementChild.remove();
      }
      break;
  };

  const newRowsLenght = rows.children.length;

  appendColumn.style.display = '';
  removeColumn.style.display = '';

  switch (newRowsLenght) {
    case 10:
      appendColumn.style.display = 'none';
      break;
    case 2:
      removeColumn.style.display = 'none';
      break;
  }

  const newColumnLenght = tbody.children.length;

  appendRow.style.display = '';
  removeRow.style.display = '';

  switch (newColumnLenght) {
    case 10:
      appendRow.style.display = 'none';
      break;
    case 2:
      removeRow.style.display = 'none';
      break;
  }
});
