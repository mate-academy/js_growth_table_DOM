'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const tbody = table.querySelector('tbody');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');
  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLS = 10;
  const MIN_COLS = 2;

  checkTable();

  appendRowBtn.addEventListener('click', () => {
    addRow();
    checkTable();
  });

  removeRowBtn.addEventListener('click', () => {
    removeRow();
    checkTable();
  });

  appendColumnBtn.addEventListener('click', () => {
    addColumn();
    checkTable();
  });

  removeColumnBtn.addEventListener('click', () => {
    removeColumn();
    checkTable();
  });

  function addColumn() {
    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    });
  }

  function removeColumn() {
    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      if (row.cells.length > 0) {
        row.deleteCell(-1);
      }
    });
  }

  function addRow() {
    const rowsInBody = tbody.querySelectorAll('tr');

    if (rowsInBody.length > 0) {
      const newRow = rowsInBody[0].cloneNode(true);

      tbody.appendChild(newRow);
    }
  }

  function removeRow() {
    const rows = tbody.querySelectorAll('tr');

    if (rows.length > 0) {
      tbody.removeChild(rows[rows.length - 1]);
    }
  }

  function checkTable() {
    const rows =
      tbody.querySelectorAll('tr').length < MIN_ROWS
        ? MIN_ROWS
        : tbody.querySelectorAll('tr').length;
    const cols =
      tbody.querySelector('tr').cells.length < MIN_COLS
        ? MIN_COLS
        : tbody.querySelector('tr').cells.length;

    appendRowBtn.disabled = rows >= MAX_ROWS;
    removeRowBtn.disabled = rows <= MIN_ROWS;
    appendColumnBtn.disabled = cols >= MAX_COLS;
    removeColumnBtn.disabled = cols <= MIN_COLS;
  }
});
