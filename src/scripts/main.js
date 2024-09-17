'use strict';

const table = document.querySelector('table');

document.querySelector('.remove-row').addEventListener('click', () => {
  if (table.rows.length <= 10) {
    document.querySelector('.append-row').removeAttribute('disabled');
  }

  if (table.rows.length === 3) {
    document.querySelector('.remove-row').setAttribute('disabled', '');
  }
  table.deleteRow(2);
});

document.querySelector('.append-row').addEventListener('click', () => {
  if (table.rows.length >= 9) {
    document.querySelector('.append-row').setAttribute('disabled', '');
  }

  if (table.rows.length === 2) {
    document.querySelector('.remove-row').removeAttribute('disabled');
  }

  const cloneRow = table.rows[0].cloneNode(true);

  table.append(cloneRow);
});

document.querySelector('.remove-column').addEventListener('click', () => {
  if (table.rows[0].cells.length === 10) {
    document.querySelector('.append-column').removeAttribute('disabled');
  }

  if (table.rows[0].cells.length === 3) {
    document.querySelector('.remove-column').setAttribute('disabled', '');
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(2);
  }
});

document.querySelector('.append-column').addEventListener('click', (e) => {
  if (table.rows[0].cells.length >= 9) {
    document.querySelector('.append-column').setAttribute('disabled', '');
  }

  if (table.rows[0].cells.length >= 2) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }

  for (let i = 0; i < table.rows.length; i++) {
    const cloneColum = table.rows[i].cells[0].cloneNode(true);

    table.rows[i].cells[0].insertAdjacentElement('afterend', cloneColum);
  }
});
