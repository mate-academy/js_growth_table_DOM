'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const container = document.querySelector('.container');

  const MIN = 2;
  const MAX = 10;

  const addRow = document.querySelector('.append-row button');
  const delRow = document.querySelector('.remove-row button');
  const addCol = document.querySelector('.append-column button');
  const delCol = document.querySelector('.remove-column button');

  function appendRow() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;
    const newTr = document.createElement('tr');

    if (rowCount < MAX) {
      for (let i = 0; i < colCount; i++) {
        const td = document.createElement('td');

        newTr.appendChild(td);
      }

      table.appendChild(newTr);
    }

    if (rowCount === MAX) {
      addRow.disabled = true;
    } else {
      delRow.disabled = false;
    }
  }

  function removeRow() {
    const rowCount = table.rows.length;

    if (rowCount > MIN) {
      table.deleteRow(-1);
    }

    if (rowCount === MIN) {
      delRow.disabled = true;
    } else {
      addRow.disabled = false;
    }
  }

  function appendColumn() {
    const currentRows = [...table.querySelectorAll('tr')];
    const colCount = table.rows[0].cells.length;

    if (colCount >= MAX) {
      return;
    }

    currentRows.forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });

    if (colCount === MAX) {
      addCol.disabled = true;
    } else {
      delCol.disabled = false;
    }
  }

  function removeColumn() {
    const currentRows = [...table.querySelectorAll('tr')];
    const colCount = table.rows[0].cells.length;

    if (colCount <= MIN) {
      return;
    }

    currentRows.forEach((row) => {
      row.deleteCell(-1);
    });

    if (colCount === MIN) {
      delCol.disabled = true;
    } else {
      addCol.disabled = false;
    }
  }

  container.addEventListener('click', (e) => {
    if (e.target.closest('.append-row')) {
      appendRow();
    }

    if (e.target.closest('.remove-row')) {
      removeRow();
    }

    if (e.target.closest('.append-column')) {
      appendColumn();
    }

    if (e.target.closest('.remove-column')) {
      removeColumn();
    }
  });
});
