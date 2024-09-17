'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');

const observer = new MutationObserver(() => {
  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;

  for (const row of table.rows) {
    appendColumn.disabled = row.cells.length >= 10;
    removeColumn.disabled = row.cells.length <= 2;
  }
});

observer.observe(table, {
  childList: true,
  subtree: true,
});

appendRow.addEventListener('click', () => {
  const row = table.rows[0].cloneNode(true);

  if (table.rows.length < 10) {
    table.lastChild.appendChild(row);
  }
});

removeRow.addEventListener('click', () => {
  table.lastChild.lastElementChild.remove();
});

appendColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    const cell = row.cells[0].cloneNode();

    if (row.cells.length < 10) {
      row.append(cell);
    }
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.lastElementChild.remove();
  }
});
