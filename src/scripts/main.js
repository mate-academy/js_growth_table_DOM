'use strict';

const table = document.body.querySelector('.field');
const appendRow = document.body.querySelector('.append-row');
const removeRow = document.body.querySelector('.remove-row');
const appendColumn = document.body.querySelector('.append-column');
const removeColumn = document.body.querySelector('.remove-column');

quantityVerification();

appendRow.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const countColumns = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < countColumns; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  table.appendChild(newRow);
  quantityVerification();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
  quantityVerification();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }
  quantityVerification();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }
  quantityVerification();
});

function quantityVerification() {
  const countRows = table.rows.length;
  const countColumns = table.rows[0].cells.length;

  appendRow.disabled = countRows >= 10;
  removeRow.disabled = countRows <= 2;

  appendColumn.disabled = countColumns >= 10;
  removeColumn.disabled = countColumns <= 2;
}
