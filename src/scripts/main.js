'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field').children[0];

appendRow.addEventListener('click', () => {
  const row = document.querySelector('tr');
  const copiedRow = row.cloneNode(true);

  field.appendChild(copiedRow);

  const updatedRows = document.querySelectorAll('tr');

  appendRow.disabled = updatedRows.length >= 10;
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows[rows.length - 1].remove();

  const updatedRows = document.querySelectorAll('tr');

  removeRow.disabled = updatedRows.length <= 2;
  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });

  const rowFirst = document.querySelector('tr');

  appendColumn.disabled = rowFirst.children.length >= 10;

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach((row) => {
    const td = row.querySelector('td');

    row.removeChild(td);
  });

  const rowFirst = document.querySelector('tr');

  removeColumn.disabled = rowFirst.children.length <= 2;
  appendColumn.disabled = false;
});

// i need to add or remove column/row and then move the buttons
// to delete the row you need to remove tr, to remove the column
// you need to delete the firstChild of each tr
// then need to calculate the position of the elemensts
