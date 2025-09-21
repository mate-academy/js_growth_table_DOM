'use strict';

const field = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const appendRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');

const checkForRows = () => {
  const numberOfCurrentRows = field.rows.length;

  if (numberOfCurrentRows === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (numberOfCurrentRows === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
};

const checkForColumns = () => {
  const numberOfCurrentColumns = field.rows[0].cells.length;

  if (numberOfCurrentColumns === 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (numberOfCurrentColumns === 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
};

appendRow.addEventListener('click', () => {
  const rowCount = field.rows.length;

  if (rowCount < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < field.rows[0].cells.length; i++) {
      const cell = document.createElement('td');

      newRow.appendChild(cell);
    }

    field.appendChild(newRow);
    checkForRows();
  }
});

removeRow.addEventListener('click', () => {
  const rowCount = field.rows.length;

  if (rowCount > 2) {
    field.deleteRow(field.rows.length - 1);
  }
  checkForRows();
});

appendColumn.addEventListener('click', () => {
  const columnCount = field.rows[0].cells.length;

  if (columnCount < 10) {
    for (const row of field.rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }
    checkForColumns();
  }
});

removeColumn.addEventListener('click', () => {
  const columnCount = field.rows[0].cells.length;

  if (columnCount > 2) {
    for (const row of field.rows) {
      row.deleteCell(row.cells.length - 1);
    }
    checkForColumns();
  }
});

checkForRows();
checkForColumns();
