'use strict';

document.addEventListener('click', (e) => {
  const field = document.querySelector('.field');
  const addColumn = e.target.closest('.append-column');
  const removeColumn = e.target.closest('.remove-column');
  const addRow = e.target.closest('.append-row');
  const removeRow = e.target.closest('.remove-row');
  const rows = Array.from(field.rows);

  if (addColumn) {
    rows.forEach((row) => {
      const copyColumn = row.cells[0];
      const newColumn = row.insertCell();

      newColumn.innerHTML = copyColumn.innerHTML;
    });

    updateColumn();
  }

  if (removeColumn) {
    rows.forEach((row) => {
      row.deleteCell(-1);
    });

    updateColumn();
  }

  if (addRow) {
    const newRow = field.rows[0].cloneNode(true);

    field.appendChild(newRow);

    updateRow();
  }

  if (removeRow) {
    field.deleteRow(field.rows.length - 1);

    updateRow();
  }

  function updateColumn() {
    const addColBtn = document.querySelector('.append-column');
    const removeColBtn = document.querySelector('.remove-column');
    const columnCounter = field.rows[0].cells.length;

    if (columnCounter < 10) {
      addColBtn.disabled = false;
    } else {
      addColBtn.disabled = true;
    }

    if (columnCounter > 2) {
      removeColBtn.disabled = false;
    } else {
      removeColBtn.disabled = true;
    }
  }

  function updateRow() {
    const addRowBtn = document.querySelector('.append-row');
    const removeRowBtn = document.querySelector('.remove-row');
    const rowsCounter = field.rows.length;

    if (rowsCounter < 10) {
      addRowBtn.disabled = false;
    } else {
      addRowBtn.disabled = true;
    }

    if (rowsCounter > 2) {
      removeRowBtn.disabled = false;
    } else {
      removeRowBtn.disabled = true;
    }
  }
});
