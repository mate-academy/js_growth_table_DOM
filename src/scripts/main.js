'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  appendRowButton.addEventListener('click', addRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', addColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  function addRow() {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
    }

    if (table.rows.length >= 10) {
      appendRowButton.disabled = true;
    }

    if (table.rows.length > 2) {
      removeRowButton.disabled = false;
    }
  }

  function removeRow() {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
    }

    if (table.rows.length <= 2) {
      removeRowButton.disabled = true;
    }

    if (table.rows.length < 10) {
      appendRowButton.disabled = false;
    }
  }

  function addColumn() {
    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
    }

    if (table.rows[0].cells.length >= 10) {
      appendColumnButton.disabled = true;
    }

    if (table.rows[0].cells.length > 2) {
      removeColumnButton.disabled = false;
    }
  }

  function removeColumn() {
    if (table.rows[0].cells.length > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
    }

    if (table.rows[0].cells.length <= 2) {
      removeColumnButton.disabled = true;
    }

    if (table.rows[0].cells.length < 10) {
      appendColumnButton.disabled = false;
    }
  }
});
