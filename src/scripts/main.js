'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const countOfRows = field.rows;

function updateButtonStates() {
  const rows = field.rows.length;
  const countOFCells = field.rows[0].cells.length;

  removeRow.disabled = rows <= 2;
  appendRow.disabled = rows >= 10;
  appendColumn.disabled = countOFCells >= 10;
  removeColumn.disabled = countOFCells <= 2;
}

appendRow.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    const newString = document.createElement('tr');
    const countOfCell = document.querySelector('tr').children.length;

    for (let i = 0; i < countOfCell; i++) {
      const newCell = document.createElement('td');

      newString.appendChild(newCell);
    }

    field.appendChild(newString);

    updateButtonStates();
  }
});

removeRow.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-row')) {
    field.deleteRow(field.rows.length - 1);
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-column')) {
    for (let i = 0; i < countOfRows.length; i++) {
      const newCell = document.createElement('td');

      field.rows[i].appendChild(newCell);
    }

    updateButtonStates();
  }
});

removeColumn.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-column')) {
    for (let i = 0; i < countOfRows.length; i++) {
      countOfRows[i].deleteCell(countOfRows[i].cells.length - 1);
    }

    updateButtonStates();
  }
});

updateButtonStates();
