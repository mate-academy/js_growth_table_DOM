'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const container = document.querySelector('.container');

  const MIN = 2;
  const MAX = 10;

  const appendRowBtn = document.querySelector('.append-row button');
  const removeRowBtn = document.querySelector('.remove-row button');
  const appendColBtn = document.querySelector('.append-column button');
  const removeColBtn = document.querySelector('.remove-column button');

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.row[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX;
    removeRowBtn.disabled = rowCount <= MIN;
    appendColBtn.disabled = colCount >= MAX;
    removeColBtn.disabled = colCount <= MIN;
  }

  function appendRow() {
    const rowCount = table.rows.length;
    const colCount = table.row[0].cells.length;
    const newTr = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      if (rowCount >= MAX) {
        return;
      }

      const td = document.createElement('td');

      newTr.appendChild(td);
    }

    table.appendChild(newTr);
    updateButtons();
  }

  function removeRow() {
    const rowCount = table.rows.length;

    if (rowCount <= MIN) {
      return;
    }

    table.removeChild(table.lastElementChild);
    updateButtons();
  }

  function appendColumn() {
    const currentRows = [...table.querySelectorAll('tr')];
    const colCount = table.row[0].cells.length;

    if (colCount >= MAX) {
      return;
    }

    currentRows.forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
    updateButtons();
  }

  function removeColumn() {
    const currentRows = [...table.querySelectorAll('tr')];
    const colCount = table.row[0].cells.length;

    if (colCount <= MIN) {
      return;
    }

    currentRows.forEach((row) => {
      row.deleteCell(-1);
    });

    updateButtons();
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

  updateButtons();
});
