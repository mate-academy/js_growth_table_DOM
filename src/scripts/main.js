'use strict';

(() => {
  const table = document.querySelector('.field');

  if (!table) {
    return;
  }

  const container = table.tBodies[0] || table;

  const btnAddRow = document.querySelector('.append-row');
  const btnRemRow = document.querySelector('.remove-row');
  const btnAddCol = document.querySelector('.append-column');
  const btnRemCol = document.querySelector('.remove-column');

  const MIN = 2;
  const MAX = 10;

  const getRowCount = () => container.rows.length;
  const getColCount = () =>
    container.rows[0] ? container.rows[0].cells.length : 0;

  const updateControls = () => {
    const rows = getRowCount();
    const cols = getColCount();

    if (btnAddRow) {
      btnAddRow.disabled = rows >= MAX;
    }

    if (btnRemRow) {
      btnRemRow.disabled = rows <= MIN;
    }

    if (btnAddCol) {
      btnAddCol.disabled = cols >= MAX;
    }

    if (btnRemCol) {
      btnRemCol.disabled = cols <= MIN;
    }
  };

  const createRow = (cols) => {
    const tr = document.createElement('tr');

    for (let i = 0; i < cols; i += 1) {
      tr.appendChild(document.createElement('td'));
    }

    return tr;
  };

  const appendRow = () => {
    const rows = getRowCount();

    if (rows >= MAX) {
      return;
    }

    const cols = getColCount();

    container.appendChild(createRow(cols));
    updateControls();
  };

  const removeRow = () => {
    const rows = getRowCount();

    if (rows <= MIN) {
      return;
    }

    const lastIndex = rows - 1;

    container.deleteRow(lastIndex);
    updateControls();
  };

  const appendColumn = () => {
    const cols = getColCount();

    if (cols >= MAX) {
      return;
    }

    Array.from(container.rows).forEach((row) => {
      row.appendChild(document.createElement('td'));
    });

    updateControls();
  };

  const removeColumn = () => {
    const cols = getColCount();

    if (cols <= MIN) {
      return;
    }

    Array.from(container.rows).forEach((row) => {
      const lastCellIndex = row.cells.length - 1;

      row.deleteCell(lastCellIndex);
    });

    updateControls();
  };

  if (btnAddRow) {
    btnAddRow.addEventListener('click', appendRow);
  }

  if (btnRemRow) {
    btnRemRow.addEventListener('click', removeRow);
  }

  if (btnAddCol) {
    btnAddCol.addEventListener('click', appendColumn);
  }

  if (btnRemCol) {
    btnRemCol.addEventListener('click', removeColumn);
  }

  updateControls();
})();
