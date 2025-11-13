'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector(`.remove-row`);
const appendColumnButton = document.querySelector(`.append-column`);
const removeColumnButton = document.querySelector(`.remove-column`);
const elements = [
  appendRowButton,
  removeRowButton,
  appendColumnButton,
  removeColumnButton,
  table,
];

if (elements.some((el) => !el)) {
  window.alert('Some buttons or whole table are not in DOM!');
}

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;
  appendColumnButton.disabled = colCount >= 10;
  removeColumnButton.disabled = colCount <= 2;
}

appendRowButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount >= 10) {
    return;
  }

  const newRow = table.rows[0].cloneNode(true);

  table.appendChild(newRow);
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount <= 2) {
    return;
  }
  table.deleteRow(-1);
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }
  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});

updateButtons();
