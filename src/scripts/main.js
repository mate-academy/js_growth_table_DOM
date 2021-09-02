'use strict';

const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColummn = document.querySelector('.append-column');
const btnRemoveColummn = document.querySelector('.remove-column');

btnAppendRow.addEventListener('click', () => {
  if (tableBody.rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < tableBody.rows[0].cells.length; i++) {
      const newCell = document.createElement('td');

      newRow.insertAdjacentElement('beforeend', newCell);
    }

    tableBody.insertAdjacentElement('beforeend', newRow);
  }

  if (tableBody.rows.length === 10) {
    btnAppendRow.setAttribute('disabled', 'disabled');
  }

  if (tableBody.rows.length > 2) {
    btnRemoveRow.removeAttribute('disabled');
  }
});

btnRemoveRow.addEventListener('click', () => {
  if (tableBody.rows.length > 2) {
    tableBody.lastElementChild.remove();
  }

  if (tableBody.rows.length === 2) {
    btnRemoveRow.setAttribute('disabled', 'disabled');
  }

  if (tableBody.rows.length < 10) {
    btnAppendRow.removeAttribute('disabled');
  }
});

btnAppendColummn.addEventListener('click', () => {
  if (tableBody.rows[0].cells.length < 10) {
    [...tableBody.rows].forEach(row => {
      row.insertAdjacentHTML('beforeend', `<td></td>`);
    });
  }

  if (tableBody.rows[0].cells.length === 10) {
    btnAppendColummn.setAttribute('disabled', 'disabled');
  }

  if (tableBody.rows[0].cells.length > 2) {
    btnRemoveColummn.removeAttribute('disabled');
  }
});

btnRemoveColummn.addEventListener('click', () => {
  if (tableBody.rows[0].cells.length > 2) {
    [...tableBody.rows].forEach(row => {
      row.lastElementChild.remove();
    });
  }

  if (tableBody.rows[0].cells.length === 2) {
    btnRemoveColummn.setAttribute('disabled', 'disabled');
  }

  if (tableBody.rows[0].cells.length < 10) {
    btnAppendColummn.removeAttribute('disabled');
  }
});
