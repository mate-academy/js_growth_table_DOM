'use strict';

const table = document.querySelector('table');

document.querySelector('.remove-row').addEventListener('click', () => {
  table.deleteRow(2);
});

document.querySelector('.append-row').addEventListener('click', () => {
  if (table.rows.length > 9) {
    return;
  }

  const cloneRow = table.rows[0].cloneNode(true);

  table.append(cloneRow);
});

document.querySelector('.remove-column').addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(2);
  }
});

document.querySelector('.append-column').addEventListener('click', (e) => {
  if (table.rows[0].cells.length > 9) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const cloneColum = table.rows[i].cells[0].cloneNode(true);

    table.rows[i].cells[0].insertAdjacentElement('afterend', cloneColum);
  }
});
