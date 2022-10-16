'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const removeColumnButton = document.querySelector('.remove-column');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const appendRowButton = document.querySelector('.append-row');

container.onclick = function(ev) {
  const target = ev.target;

  if (!target.classList.contains('button')) {
    return;
  }

  if (target.classList.contains('remove-row')) {
    appendRowButton.disabled = false;

    if (table.rows.length > 2) {
      table.deleteRow(table.rows.length - 1);
    }

    if (table.rows.length < 3) {
      removeRowButton.disabled = true;
    }
  }

  if (target.classList.contains('append-row')) {
    removeRowButton.disabled = false;

    if (table.rows.length < 10) {
      const row = table.insertRow(table.rows.length);

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        row.insertCell(i);
      }
    }

    if (table.rows.length === 10) {
      appendRowButton.disabled = true;
    }
  }

  if (target.classList.contains('append-column')) {
    removeColumnButton.disabled = false;

    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell(table.rows[i].cells.length);
      }
    }

    if (table.rows[0].cells.length === 10) {
      appendColumnButton.disabled = true;
    }
  }

  if (target.classList.contains('remove-column')) {
    appendColumnButton.disabled = false;

    const lastCol = table.rows[0].cells.length;

    if (lastCol > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(lastCol - 1);
      }
    }

    if (lastCol < 4) {
      removeColumnButton.disabled = true;
    }
  }
};
