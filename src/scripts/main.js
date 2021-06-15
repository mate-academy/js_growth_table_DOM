'use strict';

const table = document.querySelector('body');
const field = document.querySelector('.field');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

table.addEventListener('click', (e) => {
  const lastRow = field.lastElementChild.lastElementChild;

  switch (true) {
    case e.target === addRow:
      if (field.lastElementChild.rows.length >= 9) {
        addRow.disabled = true;
      }

      field.lastElementChild.appendChild(lastRow.cloneNode(true));
      removeRow.disabled = false;
      break;

    case e.target === removeRow:
      if (field.lastElementChild.rows.length <= 3) {
        removeRow.disabled = true;
      } else {
        addRow.disabled = false;
      }
      lastRow.remove();
      break;

    case e.target === addColumn:

      if (lastRow.cells.length >= 9) {
        addColumn.disabled = true;
      }

      for (const row of [...document.querySelectorAll('tr')]) {
        row.appendChild(document.createElement('td'));
      }

      removeColumn.disabled = false;
      break;

    case e.target === removeColumn:

      if (field.lastElementChild.lastElementChild.cells.length <= 3) {
        removeColumn.disabled = true;
      } else {
        addColumn.disabled = false;
      }

      for (const row of [...document.querySelectorAll('tr')]) {
        const lastCell = row.lastElementChild;

        lastCell.remove();
      }
  }
});
