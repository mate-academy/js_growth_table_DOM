'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
let appendColumnCount = 0;
let removeColumnCount = 0;
const min = 2;
const max = 10;

appendRow.addEventListener('click', (el) => {
  if (table.rows.length < max) {
    const newRow = table.rows[0].cloneNode(true);

    table.append(newRow);
  }
});

removeRow.addEventListener('click', (el) => {
  if (table.rows.length > 2) {
    table.deleteRow(0);
  }
});

appendColumn.addEventListener('click', (el) => {
  for (const row of table.rows) {
    appendColumnCount = row.cells.length;
  }

  if (appendColumnCount < max) {
    for (const row of table.rows) {
      row.insertBefore(
        row.children[0].cloneNode(true),
        row.children[table.rows[0].cells.length - 1]);
    }
  }

  appendColumnCount++;
});

removeColumn.addEventListener('click', (el) => {
  for (const row of table.rows) {
    removeColumnCount = row.cells.length;
  }

  if (removeColumnCount > min) {
    for (const row of table.rows) {
      row.deleteCell(0);
    }
  }

  removeColumnCount--;
});

document.addEventListener('click', (ev) => {
  switch (ev.target) {
    case appendRow:
      appendRow.disabled = table.rows.length === max;
      removeRow.disabled = false;
      break;

    case removeRow:
      removeRow.disabled = table.rows.length === min;
      appendRow.disabled = false;
      break;

    case appendColumn:
      appendColumn.disabled = appendColumnCount === max;
      removeColumn.disabled = false;
      break;

    case removeColumn:
      removeColumn.disabled = removeColumnCount === min;
      appendColumn.disabled = false;
      break;
  }
});
