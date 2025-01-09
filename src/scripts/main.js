'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const div = document.querySelector('div');

div.addEventListener('click', (e) => {
  if (e.target.closest('.append-row')) {
    if (table.rows.length < 10 && table.rows.length >= 2) {
      const row = table.rows[table.rows.length - 1].cloneNode(true);

      table.appendChild(row);

      removeRow.disabled = false;

      if (table.rows.length >= 10) {
        appendRow.disabled = true;
      }
    }
  } else if (e.target.closest('.remove-row')) {
    if (table.rows.length > 2 && table.rows.length <= 10) {
      table.rows[table.rows.length - 1].remove(true);

      appendRow.disabled = false;

      if (table.rows.length <= 2) {
        removeRow.disabled = true;
      }
    }
  } else if (e.target.closest('.append-column')) {
    if (table.rows[0].cells.length < 10 && table.rows[0].cells.length >= 2) {
      removeColumn.disabled = false;

      for (let i = 0; i < table.rows.length; i++) {
        const column = table.rows[i].cells[0].cloneNode(true);

        table.rows[i].append(column);
      }

      if (table.rows[0].cells.length >= 10) {
        appendColumn.disabled = true;
      }
    }
  } else if (e.target.closest('.remove-column')) {
    if (table.rows[0].cells.length > 2 && table.rows[0].cells.length <= 10) {
      appendColumn.disabled = false;

      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[table.rows[i].cells.length - 1].remove(true);
      }

      if (table.rows[0].cells.length <= 2) {
        removeColumn.disabled = true;
      }
    }
  }
});
