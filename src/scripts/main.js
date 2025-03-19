'use strict';
// write code here

const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  const newRow = document.createElement('tr');
  let numColumns = 2;

  if (rows.length > 0) {
    numColumns = rows[0].cells.length;
  }

  for (let i = 1; i <= numColumns; i++) {
    const cell = document.createElement('td');

    newRow.appendChild(cell);
  }

  if (rows.length < 10) {
    tbody.appendChild(newRow);
  }

  updateButtonStates();
});

removeRowButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  updateButtonStates();
});

appendColumnButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  let numColumns = 0;

  if (rows.length > 0) {
    numColumns = rows[0].cells.length;
  }

  if (numColumns < 10) {
    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }

  updateButtonStates();
});

removeColumnButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  let numColumns = 0;

  if (rows.length > 0) {
    numColumns = rows[0].cells.length;
  }

  if (numColumns > 2) {
    rows.forEach((row) => {
      row.deleteCell(row.cells.length - 1);
    });
  }

  updateButtonStates();
});

function updateButtonStates() {
  const rows = tbody.querySelectorAll('tr');
  let numColumns = 0;

  if (rows.length > 0) {
    numColumns = rows[0].cells.length;
  }

  appendRowButton.disabled = rows.length >= 10;
  removeRowButton.disabled = rows.length <= 2;
  appendColumnButton.disabled = numColumns >= 10;
  removeColumnButton.disabled = numColumns <= 2;
}
