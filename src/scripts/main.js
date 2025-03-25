'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const deleteCol = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

document.addEventListener('click', (ev) => {
  const targetButton = ev.target.closest('button');
  const arrayRow = [...tbody.rows];

  if (!targetButton) {
    return;
  }

  const rows = document.querySelectorAll('tr');
  const lastRow = tbody.rows[tbody.rows.length - 1];

  switch (true) {
    case targetButton.matches('.append-row'):
      const newRow = lastRow.cloneNode(true);

      if (tbody.rows.length < 10) {
        tbody.appendChild(newRow);
      }

      break;
    case targetButton.matches('.remove-row'):
      if (tbody.rows.length > 2) {
        tbody.deleteRow(-1);
      }
      break;
    case targetButton.matches('.append-column'):
      rows.forEach((row) => {
        if (row.cells.length < 10) {
          row.insertAdjacentHTML('beforeend', `<td></td>`);
        }
      });
      break;
    case targetButton.matches('.remove-column'):
      rows.forEach((row) => {
        if (row.cells.length > 2) {
          row.deleteCell(-1);
        }
      });
      break;
  }

  addRow.disabled = tbody.rows.length >= 10;
  deleteRow.disabled = tbody.rows.length <= 2;

  addCol.disabled = arrayRow.every((row) => row.cells.length >= 10);
  deleteCol.disabled = arrayRow.every((row) => row.cells.length <= 2);
});
// write code here
