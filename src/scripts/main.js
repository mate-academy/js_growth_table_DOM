'use strict';

const table = document.querySelector('table');
const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');

appRow.addEventListener('click', (e) => {
  if (table.tBodies[0].rows.length < 10) {
    const rowLength = table.tBodies[0].rows[0].cells.length;
    const tr = document.createElement('tr');

    for (let i = 0; i < rowLength; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    table.tBodies[0].append(tr);
    remRow.disabled = false;

    if (table.tBodies[0].rows.length === 10) {
      appRow.disabled = true;
    }
  }
});

remRow.addEventListener('click', (e) => {
  if (table.tBodies[0].rows.length > 2) {
    table.tBodies[0].rows[table.tBodies[0].rows.length - 1].remove();
    appRow.disabled = false;

    if (table.tBodies[0].rows.length === 2) {
      remRow.disabled = true;
    }
  }
});

appColumn.addEventListener('click', (e) => {
  if (table.tBodies[0].rows[0].cells.length < 10) {
    remColumn.disabled = false;

    const allRows = document.querySelectorAll('tr');

    for (const row of allRows) {
      const td = document.createElement('td');

      row.append(td);

      if (table.tBodies[0].rows[0].cells.length === 10) {
        appColumn.disabled = true;
      }
    }
  }
});

remColumn.addEventListener('click', () => {
  if (table.tBodies[0].rows[0].cells.length > 2) {
    const allRows = document.querySelectorAll('tr');

    appColumn.disabled = false;

    for (const row of allRows) {
      row.cells[row.cells.length - 1].remove();
    }

    if (table.tBodies[0].rows[0].cells.length === 2) {
      remColumn.disabled = true;
    }
  }
});
