'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColummn = document.querySelector('.append-column');
const btnRemoveColummn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const btn = e.target;

  switch (btn) {
    case btnAppendRow:
      if (tableBody.rows.length < 10) {
        const newRow = document.createElement('tr');

        for (let i = 0; i < tableBody.rows[0].cells.length; i++) {
          const newCell = document.createElement('td');

          newRow.insertAdjacentElement('beforeend', newCell);
        }

        tableBody.insertAdjacentElement('beforeend', newRow);
      }
      break;

    case btnRemoveRow:
      if (tableBody.rows.length > 2) {
        tableBody.lastElementChild.remove();
      }
      break;

    case btnAppendColummn:
      if (tableBody.rows[0].cells.length < 10) {
        [...tableBody.rows].forEach(row => {
          row.insertAdjacentHTML('beforeend', `<td></td>`);
        });
      }
      break;

    case btnRemoveColummn:
      if (tableBody.rows[0].cells.length > 2) {
        [...tableBody.rows].forEach(row => {
          row.lastElementChild.remove();
        });
      }
      break;
  }

  btnAppendRow.disabled = tableBody.rows.length >= 10;
  btnRemoveRow.disabled = tableBody.rows.length <= 2;
  btnAppendColummn.disabled = tableBody.rows[0].cells.length >= 10;
  btnRemoveColummn.disabled = tableBody.rows[0].cells.length <= 2;
});
