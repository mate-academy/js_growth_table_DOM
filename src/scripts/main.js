'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const MAX_COUNT = 10;
const MIN_COUNT = 2;

const updateButtonState = () => {
  const rows = table.rows.length;
  const columns = table.rows[0].children.length;

  appendRow.disabled = rows >= MAX_COUNT;
  removeRow.disabled = rows <= MIN_COUNT;
  appendColumn.disabled = columns >= MAX_COUNT;
  removeColumn.disabled = columns <= MIN_COUNT;
};

const cloneAndClear = (element) => {
  const cloned = element.cloneNode(true);

  cloned.querySelectorAll('input').forEach((input) => (input.value = ''));

  return cloned;
};

appendRow.addEventListener('click', () => {
  table.tBodies[0].append(cloneAndClear(table.rows[0]));
  updateButtonState();
});

removeRow.addEventListener('click', () => {
  table.deleteRow(-1);
  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  Array.from(table.rows).forEach((row) => {
    row.append(cloneAndClear(row.firstElementChild));
  });
  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  Array.from(table.rows).forEach((row) => {
    row.deleteCell(-1);
  });
  updateButtonState();
});

updateButtonState();
