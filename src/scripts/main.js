'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

function checkState() {
  const currentRows = document.querySelectorAll('.field tr').length;
  const currentColumns = document.querySelector('.field tr').children.length;

  appendRow.disabled = currentRows >= 10;
  appendColumn.disabled = currentColumns >= 10;

  removeRow.disabled = currentRows <= 2;
  removeColumn.disabled = currentColumns <= 2;
}

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const allRows = document.querySelectorAll('.field tr').length;
  const currentColumns = document.querySelector('.field tr').children.length;

  if (allRows < 10) {
    for (let i = 0; i < currentColumns; i++) {
      const newRowCell = document.createElement('td');

      newRow.append(newRowCell);
    }

    table.append(newRow);
    checkState();
  }
});

removeRow.addEventListener('click', () => {
  const allRows = document.querySelectorAll('.field tr');

  if (allRows.length > 2) {
    allRows[allRows.length - 1].remove();

    checkState();
  }
});

appendColumn.addEventListener('click', () => {
  const allRows = document.querySelectorAll('.field tr');
  const allColumns = document.querySelector('.field tr').children.length;

  if (allColumns < 10) {
    allRows.forEach((row) => {
      const newCell = document.createElement('td');

      row.append(newCell);
    });

    checkState();
  }
});

removeColumn.addEventListener('click', () => {
  const allRows = document.querySelectorAll('.field tr');
  const allColumns = document.querySelector('.field tr').children.length;

  if (allColumns > 2) {
    allRows.forEach((row) => row.lastElementChild.remove());

    checkState();
  }
});

checkState();
