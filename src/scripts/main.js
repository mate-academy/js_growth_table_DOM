'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const maxSize = 10;
  const minSize = 2;

  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  function getRowCount() {
    return table.rows.length;
  }

  function getColCount() {
    return table.rows[0].cells.length;
  }

  function updateButtons() {
    appendRowBtn.disabled = getRowCount() >= maxSize;
    removeRowBtn.disabled = getRowCount() <= minSize;
    appendColBtn.disabled = getColCount() >= maxSize;
    removeColBtn.disabled = getColCount() <= minSize;
  }

  appendRowBtn.addEventListener('click', function () {
    if (getRowCount() < maxSize) {
      const newRow = table.insertRow();

      for (let i = 0; i < getColCount(); i++) {
        newRow.insertCell();
      }
    }
    updateButtons();
  });

  removeRowBtn.addEventListener('click', function () {
    if (getRowCount() > minSize) {
      table.deleteRow(-1);
    }
    updateButtons();
  });

  appendColBtn.addEventListener('click', function () {
    if (getColCount() < maxSize) {
      for (const row of table.rows) {
        row.insertCell();
      }
    }
    updateButtons();
  });

  removeColBtn.addEventListener('click', function () {
    if (getColCount() > minSize) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }
    updateButtons();
  });

  updateButtons();
});
