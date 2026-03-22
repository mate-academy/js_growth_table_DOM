'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  if (table.tBodies[0].rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.tBodies[0].appendChild(newRow);
  }

  if (table.tBodies[0].rows.length === 10) {
    e.target.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  if (table.tBodies[0].rows.length > 2) {
    table.tBodies[0].deleteRow(-1);
  }

  if (table.tBodies[0].rows.length <= 2) {
    e.target.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length < 10) {
    const rows = Array.from(table.rows);

    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }

  if (table.rows[0].cells.length === 10) {
    e.target.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length > 2) {
    const rows = Array.from(table.rows);

    rows.forEach((row) => {
      row.deleteCell(-1);
    });
  }

  if (table.rows[0].cells.length === 2) {
    e.target.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
});
