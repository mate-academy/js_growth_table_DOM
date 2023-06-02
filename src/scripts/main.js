'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  appendRowBtn.addEventListener('click', function() {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();
      const columnsCount = table.rows[0].cells.length;

      for (let i = 0; i < columnsCount; i++) {
        newRow.insertCell();
      }

      if (table.rows.length === 10) {
        appendRowBtn.disabled = true;
      }

      removeRowBtn.disabled = false;
    }
  });

  removeRowBtn.addEventListener('click', function() {
    if (table.rows.length > 2) {
      table.deleteRow(-1);

      if (table.rows.length === 2) {
        removeRowBtn.disabled = true;
      }

      appendRowBtn.disabled = false;
    }
  });

  appendColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length < 10) {
      const rows = table.rows;
      const columnsCount = rows[0].cells.length;

      for (let i = 0; i < rows.length; i++) {
        rows[i].insertCell();
      }

      if (columnsCount + 1 === 10) {
        appendColumnBtn.disabled = true;
      }

      removeColumnBtn.disabled = false;
    }
  });

  removeColumnBtn.addEventListener('click', function() {
    if (table.rows[0].cells.length > 2) {
      const rows = table.rows;

      for (let i = 0; i < rows.length; i++) {
        rows[i].deleteCell(-1);
      }

      if (table.rows[0].cells.length === 2) {
        removeColumnBtn.disabled = true;
      }

      appendColumnBtn.disabled = false;
    }
  });
});
