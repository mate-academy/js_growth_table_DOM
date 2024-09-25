'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  let rows = table.rows.length;
  let cols = table.rows[0].cells.length;

  checkButtons();

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  function appendRow() {
    const newRow = table.insertRow();

    for (let i = 0; i < cols; i++) {
      newRow.insertCell().style.background = '#0093eb';
    }
    rows++;
    checkButtons();
  }

  function removeRow() {
    if (rows > 1) {
      table.deleteRow(-1);
      rows--;
    }
    checkButtons();
  }

  function appendColumn() {
    for (let i = 0; i < rows; i++) {
      table.rows[i].insertCell().style.background = '#0093eb';
    }
    cols++;
    checkButtons();
  }

  function removeColumn() {
    if (cols > 1) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].deleteCell(-1);
      }
      cols--;
    }
    checkButtons();
  }

  function checkButtons() {
    appendRowButton.disabled = rows >= 10;
    removeRowButton.disabled = rows <= 2;
    appendColumnButton.disabled = cols >= 10;
    removeColumnButton.disabled = cols <= 2;
  }
});
