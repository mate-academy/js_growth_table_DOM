'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;
const clickHandlers = new Map();

clickHandlers.set('append-row', () => {
  if (table.rows.length >= maxRows) {
    return;
  }

  const newRow = table.rows[0].cloneNode(true);

  table.tBodies[0].append(newRow);

  if (table.rows.length >= maxRows) {
    document.querySelector('.append-row').disabled = true;
  }

  document.querySelector('.remove-row').disabled = false;
});

clickHandlers.set('remove-row', () => {
  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= minRows) {
    document.querySelector('.remove-row').disabled = true;
  }

  document.querySelector('.append-row').disabled = false;
});

clickHandlers.set('append-column', () => {
  if (table.rows[0].cells.length >= maxColumns) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  if (table.rows[0].cells.length >= maxColumns) {
    document.querySelector('.append-column').disabled = true;
  }

  document.querySelector('.remove-column').disabled = false;
});

clickHandlers.set('remove-column', () => {
  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  if (table.rows[0].cells.length <= minColumns) {
    document.querySelector('.remove-column').disabled = true;
  }

  document.querySelector('.append-column').disabled = false;
});

container.onclick = function(e) {
  if (!e.target.classList.contains('button')) {
    return;
  }

  clickHandlers.get(e.target.classList[0])();
};
