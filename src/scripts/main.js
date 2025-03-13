'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('div');
  const appendRowBtn = div.querySelector('.append-row');
  const removeRowBtn = div.querySelector('.remove-row');
  const appendColumnBtn = div.querySelector('.append-column');
  const removeColumnBtn = div.querySelector('.remove-column');
  const table = div.querySelector('table');

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  function appendRow() {
    const newRow = document.createElement('tr');

    for (let i = 0; i < getColumnsCount(); i++) {
      newRow.appendChild(document.createElement('td'));
    }
    table.appendChild(newRow);
    updateButtons();
  }

  function removeRow() {
    table.lastElementChild?.remove();
    updateButtons();
  }

  function appendColumn() {
    table.querySelectorAll('tr').forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
    updateButtons();
  }

  function removeColumn() {
    table.querySelectorAll('tr').forEach((row) => {
      row.lastElementChild?.remove();
    });
    updateButtons();
  }

  function getRowsCount() {
    return table.querySelectorAll('tr').length;
  }

  function getColumnsCount() {
    return table.querySelector('tr')?.children.length || 0;
  }

  function updateButtons() {
    const rowsCount = getRowsCount();
    const columnsCount = getColumnsCount();

    appendRowBtn.disabled = rowsCount >= 10;
    removeRowBtn.disabled = rowsCount <= 2;
    appendColumnBtn.disabled = columnsCount >= 10;
    removeColumnBtn.disabled = columnsCount <= 2;
  }
});
