'use strict';

// write code here
document.querySelector('.append-row').addEventListener('click', (e) => {
  const table = document.querySelector('table');

  if (table.rows.length < 10) {
    const n = table.rows[0].cells.length;
    const row = table.insertRow();

    for (let i = 0; i < n; i++) {
      row.insertCell();
    }
    document.querySelector('.remove-row').disabled = false;
  }

  if (table.rows.length === 10) {
    e.target.disabled = true;
  }
});

document.querySelector('.remove-row').addEventListener('click', (e) => {
  const table = document.querySelector('table');

  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
    document.querySelector('.append-row').disabled = false;
  }

  if (table.rows.length === 2) {
    e.target.disabled = true;
  }
});

document.querySelector('.append-column').addEventListener('click', (e) => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length < 10) {
    const n = table.rows.length;

    for (let i = 0; i < n; i++) {
      table.rows[i].insertCell();
    }
    document.querySelector('.remove-column').disabled = false;
  }

  if (table.rows[0].cells.length === 10) {
    e.target.disabled = true;
  }
});

document.querySelector('.remove-column').addEventListener('click', (e) => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length > 2) {
    const n = table.rows.length;

    for (let i = 0; i < n; i++) {
      table.rows[i].deleteCell(table.rows[i].cells.length - 1);
    }
    document.querySelector('.append-column').disabled = false;
  }

  if (table.rows[0].cells.length === 2) {
    e.target.disabled = true;
  }
});
