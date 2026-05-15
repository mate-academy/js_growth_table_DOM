'use strict';

const MAX = 10;
const MIN = 2;

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', (e) => {
  if (table.rows.length < MAX) {
    const newRow = document.createElement('tr');
    const lengthRow = table.rows[0].cells.length;

    const container = table.tBodies[0] || table;

    container.append(newRow);

    for (let i = 0; i < lengthRow; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }
  }

  if (table.rows.length === MAX) {
    appendRow.disabled = true;
  }

  if (table.rows.length > MIN) {
    removeRow.disabled = false;
  }
});

appendCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length < MAX) {
    const rows = Array.from(table.rows);

    rows.forEach((el) => {
      const newCell = document.createElement('td');

      el.append(newCell);
    });
  }

  if (table.rows[0].cells.length === MAX) {
    appendCol.disabled = true;
  }

  if (table.rows[0].cells.length > MIN) {
    removeCol.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  if (table.rows.length > MIN) {
    table.deleteRow(-1);
  }

  if (table.rows.length === MIN) {
    removeRow.disabled = true;
  }

  if (table.rows.length < MAX) {
    appendRow.disabled = false;
  }
});

removeCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length > MIN) {
    const rows = Array.from(table.rows);

    rows.forEach((el) => {
      el.deleteCell(-1);
    });
  }

  if (table.rows[0].cells.length === MIN) {
    removeCol.disabled = true;
  }

  if (table.rows[0].cells.length < MAX) {
    appendCol.disabled = false;
  }
});
