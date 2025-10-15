'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  if (!table || !appendRow || !removeRow || !appendColumn || !removeColumn) {
    return;
  }

  const tBody = table.tBodies[0] || table.createTBody();

  if (!tBody.rows.length) {
    initTableStructure();
  }

  updateButtons();

  function initTableStructure() {
    if (tBody.rows.length === 0) {
      for (let i = 0; i < 2; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 2; j++) {
          const cell = document.createElement('td');

          row.append(cell);
        }

        tBody.append(row);
      }
    }
  }

  function updateButtons() {
    const rows = tBody.rows.length;
    const cols = tBody.rows[0]?.cells.length || 0;

    appendRow.disabled = rows >= 10;
    removeRow.disabled = rows <= 2;
    appendColumn.disabled = cols >= 10;
    removeColumn.disabled = cols <= 2;
  }

  appendRow.addEventListener('click', () => {
    if (tBody.rows.length >= 10) {
      return;
    }

    const cols = tBody.rows[0]?.cells.length || 0;
    const newRow = document.createElement('tr');

    for (let i = 0; i < cols; i++) {
      newRow.append(document.createElement('td'));
    }

    tBody.append(newRow);
    updateButtons();
  });

  removeRow.addEventListener('click', () => {
    if (tBody.rows.length <= 2) {
      return;
    }

    tBody.lastElementChild.remove();
    updateButtons();
  });

  appendColumn.addEventListener('click', () => {
    const firstRow = tBody.rows[0];

    if (firstRow.cells.length >= 10) {
      return;
    }

    for (const row of tBody.rows) {
      row.append(document.createElement('td'));
    }

    updateButtons();
  });

  removeColumn.addEventListener('click', () => {
    const firstRow = tBody.rows[0];

    if (firstRow.cells.length <= 2) {
      return;
    }

    for (const row of tBody.rows) {
      row.lastElementChild.remove();
    }

    updateButtons();
  });
});
