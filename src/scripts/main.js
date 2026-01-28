'use strict';

const field = document.querySelector('.field');

const action = {
  'append-column': addColumn,
  'remove-column': removeColumn,
  'append-row': addRow, // Виправив назву (один рядок - row)
  'remove-row': removeRow,
};

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    const a = Object.keys(action).find((key) => button.classList.contains(key));

    if (a) {
      action[a]();
      updateButtons();
    }
  });
});

updateButtons();

function addColumn() {
  const rows = field.querySelectorAll('tr');

  if (rows.length === 0) {
    addRow();
  } else {
    rows.forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
  }
}

function removeColumn() {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length > 0) {
      row.lastElementChild.remove();
    }
  });
}

function addRow() {
  const newRow = document.createElement('tr');
  const columnCount = field.rows.length > 0 ? field.rows[0].cells.length : 1;

  for (let i = 0; i < columnCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  field.appendChild(newRow);
}

function removeRow() {
  if (field.children.length > 0) {
    field.lastElementChild.remove();
  }
}

function updateButtons() {
  const rows = field.querySelectorAll('tr');
  const rowsCount = rows.length;
  const columnCount = rowsCount > 0 ? rows[0].cells.length : 0;

  const btnAppCol = document.querySelector('.append-column');
  const btnRemCol = document.querySelector('.remove-column');
  const btnAppRow = document.querySelector('.append-row');
  const btnRemRow = document.querySelector('.remove-row');

  if (btnAppCol) {
    btnAppCol.disabled = columnCount >= 10;
  }

  if (btnRemCol) {
    btnRemCol.disabled = columnCount <= 2;
  }

  if (btnAppRow) {
    btnAppRow.disabled = rowsCount >= 10;
  }

  if (btnRemRow) {
    btnRemRow.disabled = rowsCount <= 2;
  }
}
