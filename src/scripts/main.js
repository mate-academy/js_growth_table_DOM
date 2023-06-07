'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const mainRow = Array.from(table.rows);
  const tds = mainRow[0].children;

  const item = e.target;

  if (item.classList.contains('append-row')) {
    if (mainRow.length <= 10) {
      const tr = document.createElement('tr');

      table.children[0].append(tr);

      for (let i = 0; i < tds.length; i++) {
        const td = document.createElement('td');

        tr.append(td);
      }

      if (mainRow.length >= 9) {
        item.setAttribute('disabled', 'disabled');
      }

      if (removeRow.hasAttribute('disabled')) {
        removeRow.removeAttribute('disabled');
      }
    }
  }

  if (item.classList.contains('remove-row')) {
    if (mainRow.length > 2) {
      table.deleteRow(mainRow.length - 1);

      if (appendRow.hasAttribute('disabled')) {
        appendRow.removeAttribute('disabled');
      }

      const countRows = Array.from(table.rows);

      if (countRows.length <= 2) {
        item.setAttribute('disabled', 'disabled');
      }
    }
  };

  if (item.classList.contains('append-column')) {
    if (tds.length <= 10) {
      const rows = document.querySelectorAll('tr');

      for (const row of rows) {
        const td = document.createElement('td');

        row.append(td);
      }

      if (tds.length > 9) {
        item.setAttribute('disabled', 'disabled');
      }

      if (removeColumn.hasAttribute('disabled')) {
        removeColumn.removeAttribute('disabled');
      }
    }
  }

  if (item.classList.contains('remove-column')) {
    if (tds.length > 2) {
      const rows = document.querySelectorAll('tr');

      for (const row of rows) {
        row.deleteCell(tds.length - 1);
      }

      if (tds.length <= 2) {
        item.setAttribute('disabled', 'disabled');
      }

      if (appendColumn.hasAttribute('disabled')) {
        appendColumn.removeAttribute('disabled');
      }
    }
  }
});
