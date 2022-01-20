'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const rows = tbody.rows;

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const max = 9;
const min = 2;

container.addEventListener('click', (eventObj) => {
  const target = eventObj.target;

  let numberOfRows = rows.length;
  let numberOfColums = rows[0].children.length;

  switch (target) {
    /* -----appendRow----- */
    case appendRow:
      const newEl = document.createElement('tr');

      tbody.append(newEl);

      for (let i = 0; i < rows[0].children.length; i++) {
        newEl.insertAdjacentHTML('beforeend', '<td></td>');
      }

      numberOfRows++;
      break;

      /* -----appendColumn----- */
    case appendColumn:
      for (const cell of rows) {
        cell.insertAdjacentHTML('beforeend', '<td></td>');
      }

      numberOfColums++;
      break;

      /* -----removeRow----- */
    case removeRow:
      tbody.deleteRow(tbody.lastElementChild);

      numberOfRows--;
      break;

      /* -----removeColumn----- */
    case removeColumn:
      for (let i = 0; i < rows.length; i++) {
        rows[i].deleteCell(rows[i].children[0]);
      }

      numberOfColums--;
      break;
  }

  appendRow.disabled = numberOfRows > max;
  appendColumn.disabled = numberOfColums > max;
  removeRow.disabled = numberOfRows <= min;
  removeColumn.disabled = numberOfColums <= min;
});
