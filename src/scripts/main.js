'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function isDisabledButton() {
  appendRowButton.disabled = false;
  removeColumnButton.disabled = false;
  appendColumnButton.disabled = false;
  removeRowButton.disabled = false;

  if (table.getElementsByTagName('tr').length >= 10) {
    appendRowButton.disabled = true;
  }

  if (table.getElementsByTagName('tr').length <= 2) {
    removeRowButton.disabled = true;
  }

  if (table.rows[0].cells.length >= 10) {
    appendColumnButton.disabled = true;
  }

  if (table.rows[0].cells.length <= 2) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', () => {
  const newTr = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newTr.insertCell(i);
  }

  isDisabledButton();
});

appendColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.insertCell(row.cells.length);
  }

  isDisabledButton();
});

removeRowButton.addEventListener('click', () => {
  table.deleteRow(table.rows.length - 1);

  isDisabledButton();
});

removeColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  isDisabledButton();
});
