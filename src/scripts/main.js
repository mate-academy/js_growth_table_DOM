'use strict';

const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const countOfRows = table.rows.length;
  const countOfColumns = table.rows[0].cells.length;

  appendRowButton.disabled = countOfRows >= 10;
  removeRowButton.disabled = countOfRows <= 2;

  appendColumnButton.disabled = countOfColumns >= 10;
  removeColumnButton.disabled = countOfColumns <= 2;
}

appendRowButton.addEventListener('click', () => {
  const countOfRows = table.rows.length;

  if (countOfRows >= 10) {
    return;
  }

  const countOfColumns = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < countOfColumns; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const countOfColumns = table.rows[0].cells.length;

  if (countOfColumns >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});
