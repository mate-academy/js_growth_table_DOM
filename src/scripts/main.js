/* eslint-disable max-len */
'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const table = document.querySelector('tbody'); // auto-completion of the tbody tag by the browser on startup

function sizeCheck() {
  const columnCount = document.querySelector('tbody').firstChild.children.length;
  const rowCount = document.querySelectorAll('tr').length;

  appendColumn.disabled = columnCount >= 10;
  appendRow.disabled = rowCount >= 10;

  removeColumn.disabled = columnCount <= 2;
  removeRow.disabled = rowCount <= 2;
}

appendColumn.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(row => {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  });

  sizeCheck();
});

removeColumn.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(row => {
    row.lastElementChild.remove();
  });

  sizeCheck();
});

appendRow.addEventListener('click', () => {
  const newRow = table.lastElementChild.cloneNode(true);

  table.append(newRow);

  sizeCheck();
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  sizeCheck();
});
