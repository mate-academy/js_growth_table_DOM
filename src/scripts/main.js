'use strict';

// write code here

function growthTable() {
  const container = document.querySelector('.container');
  const table = document.querySelector('.field');

  if (!table || !container) {
    return;
  }

  const appendRowBtn = container.querySelector('.append-row');

  if (!appendRowBtn) {
    return;
  }

  const removeRowBtn = container.querySelector('.remove-row');

  if (!removeRowBtn) {
    return;
  }

  const appendColBtn = container.querySelector('.append-column');

  if (!appendColBtn) {
    return;
  }

  const removeColBtn = container.querySelector('.remove-column');

  if (!removeColBtn) {
    return;
  }

  const MIN = 2;
  const MAX = 10;

  function getRowsCount() {
    return table.rows.length;
  }

  function getColumnsCount() {
    const firstRow = table.rows[0];

    return firstRow ? firstRow.cells.length : 0;
  }

  function updateButtonsState() {
    const rows = getRowsCount();
    const cols = getColumnsCount();

    appendRowBtn.disabled = rows >= MAX;
    removeRowBtn.disabled = rows <= MIN;

    appendColBtn.disabled = cols >= MAX;
    removeColBtn.disabled = cols <= MIN;
  }

  function appendRow() {
    const rows = getRowsCount();
    const cols = getColumnsCount();

    if (rows >= MAX) {
      return;
    }

    const safeCols = cols > 0 ? cols : MIN;
    const tr = document.createElement('tr');

    for (let i = 0; i < safeCols; i++) {
      tr.append(document.createElement('td'));
    }

    table.append(tr);
    updateButtonsState();
  }

  function removeRow() {
    const rows = getRowsCount();

    if (rows <= MIN) {
      return;
    }

    table.deleteRow(rows - 1);
    updateButtonsState();
  }

  function appendColumn() {
    const cols = getColumnsCount();

    if (cols >= MAX) {
      return;
    }

    const rows = Array.from(table.rows);

    if (rows.length === 0) {
      return;
    }

    for (const row of rows) {
      row.append(document.createElement('td'));
    }

    updateButtonsState();
  }

  function removeColumn() {
    const cols = getColumnsCount();

    if (cols <= MIN) {
      return;
    }

    const rows = Array.from(table.rows);

    if (rows.length === 0) {
      return;
    }

    for (const row of rows) {
      if (row.cells.length > 0) {
        row.deleteCell(row.cells.length - 1);
      }
    }

    updateButtonsState();
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColBtn.addEventListener('click', appendColumn);
  removeColBtn.addEventListener('click', removeColumn);

  updateButtonsState();
}

growthTable();
