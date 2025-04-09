'use strict';

const table = document.querySelector('table');
const addRowButton = document.querySelector('.button.append-row');
const removeRowButton = document.querySelector('.button.remove-row');
const addColumnButton = document.querySelector('.button.append-column');
const removeColumnButton = document.querySelector('.button.remove-column');

addColumnButton.addEventListener('click', (e) => {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell();
  }

  const numberOfColumns = table.rows[0].cells.length;

  if (numberOfColumns === 10) {
    addColumnButton.disabled = true;
  }

  if (numberOfColumns === 3) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(rows.length - 1);
  }

  const numberOfColumns = table.rows[0].cells.length;

  if (numberOfColumns === 2) {
    removeColumnButton.disabled = true;
  }

  if (numberOfColumns === 9) {
    addColumnButton.disabled = false;
  }
});

addRowButton.addEventListener('click', (e) => {
  const numberOfColumns = table.rows[0].cells.length;

  let html = '<tr>';

  for (let i = 0; i < numberOfColumns; i++) {
    html += '<td></td>';
  }
  html += '</tr>';
  table.insertAdjacentHTML('beforeend', html);

  if (table.rows.length === 10) {
    addRowButton.disabled = true;
  }

  if (table.rows.length === 3) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  table.deleteRow(table.rows.length - 1);

  if (table.rows.length === 2) {
    removeRowButton.disabled = true;
  }

  if (table.rows.length === 9) {
    addRowButton.disabled = false;
  }
});
