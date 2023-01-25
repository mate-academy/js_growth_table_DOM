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
  const newColumnLenght = tbody.children.length;
  const disabled = 'disabled';

  appendColumn.removeAttribute(disabled);
  removeColumn.removeAttribute(disabled);
  appendRow.removeAttribute(disabled);
  removeRow.removeAttribute(disabled);

  function addRow(a) {
    if (newRowsLenght === 10 || newRowsLenght === 2) {
      a.setAttribute(disabled, disabled);
    }

    if (newColumnLenght === 10 || newColumnLenght === 2) {
      a.setAttribute(disabled, disabled);
    }
  }
  addRow(e.target);
});
