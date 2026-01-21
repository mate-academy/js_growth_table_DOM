'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');

container.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  if (!target) {
    return;
  }

  const maxCellsRows = 10;
  const minCellsRows = 2;

  if (target.classList.contains('append-row')) {
    const removeRowBtn = container.querySelector('.remove-row');

    if (removeRowBtn.disabled) {
      removeRowBtn.disabled = false;
    }

    appendRow();

    if (field.rows.length >= maxCellsRows) {
      target.disabled = true;

      return;
    }

    return;
  }

  if (target.classList.contains('remove-row')) {
    const appendRowBtn = container.querySelector('.append-row');

    if (appendRowBtn.disabled) {
      appendRowBtn.disabled = false;
    }

    removeRow();

    if (field.rows.length <= minCellsRows) {
      target.disabled = true;

      return;
    }

    return;
  }

  if (target.classList.contains('append-column')) {
    const removeColumnBtn = container.querySelector('.remove-column');

    if (removeColumnBtn.disabled) {
      removeColumnBtn.disabled = false;
    }

    appendColumn();

    if (field.rows[0].cells.length >= maxCellsRows) {
      target.disabled = true;

      return;
    }

    return;
  }

  if (target.classList.contains('remove-column')) {
    const appendColumnBtn = container.querySelector('.append-column');

    if (appendColumnBtn.disabled) {
      appendColumnBtn.disabled = false;
    }

    removeColumn();

    if (field.rows[0].cells.length <= minCellsRows) {
      target.disabled = true;
    }
  }
});

function appendRow() {
  const newRow = field.insertRow();

  const cellsToAdd = field.rows[0].cells.length;

  for (let i = 0; i < cellsToAdd; i++) {
    newRow.insertCell(i);
  }
}

function removeRow() {
  field.deleteRow(field.rows.length - 1);
}

function appendColumn() {
  const rowsToAdd = field.rows.length;

  for (let i = 0; i < rowsToAdd; i++) {
    field.rows[i].insertCell();
  }
}

function removeColumn() {
  const cellsToDelete = field.rows.length;
  const lastCell = field.rows[0].cells.length - 1;

  for (let i = 0; i < cellsToDelete; i++) {
    field.rows[i].deleteCell(lastCell);
  }
}
