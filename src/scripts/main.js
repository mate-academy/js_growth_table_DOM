'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = table.getElementsByTagName('tr');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    if (rows.length >= 10) {
      return;
    }

    const newRow = table.insertRow();

    for (let i = 0; i < rows[0].cells.length; i++) {
      newRow.insertCell();
    }

    if (rows.length >= 10) {
      appendRow.disabled = true;
    }

    if (rows.length > 2) {
      removeRow.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-row')) {
    if (rows.length <= 2) {
      return;
    }
    table.deleteRow(-1);

    if (rows.length < 10) {
      appendRow.disabled = false;
    }

    if (rows.length <= 2) {
      removeRow.disabled = true;
    }
  }

  if (e.target.classList.contains('append-column')) {
    if (rows[0].cells.length >= 10) {
      return;
    }

    for (const row of rows) {
      row.insertCell();

      if (row.cells.length >= 10) {
        appendColumn.disabled = true;
      }

      if (row.cells.length > 2) {
        removeColumn.disabled = false;
      }
    }
  }

  if (e.target.classList.contains('remove-column')) {
    if (rows[0].cells.length <= 2) {
      return;
    }

    for (const row of rows) {
      row.deleteCell(-1);

      if (row.cells.length < 10) {
        appendColumn.disabled = false;
      }

      if (row.cells.length <= 2) {
        removeColumn.disabled = true;
      }
    }
  }
});
