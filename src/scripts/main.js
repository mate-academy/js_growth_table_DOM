'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');

  const buttons = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  };

  const LIMITS = {
    min: 2,
    max: 10,
  };

  const getRowCount = () => table.rows.length;
  const getColCount = () => table.rows[0].cells.length;

  const canAppendRow = () => getRowCount() < LIMITS.max;
  const canRemoveRow = () => getRowCount() > LIMITS.min;
  const canAppendColumn = () => getColCount() < LIMITS.max;
  const canRemoveColumn = () => getColCount() > LIMITS.min;

  function updateButtons() {
    buttons.appendRow.disabled = !canAppendRow();
    buttons.removeRow.disabled = !canRemoveRow();
    buttons.appendColumn.disabled = !canAppendColumn();
    buttons.removeColumn.disabled = !canRemoveColumn();
  }

  function appendRow() {
    if (!canAppendRow()) {
      return;
    }

    const newRow = table.insertRow();
    const colCount = getColCount();

    for (let i = 0; i < colCount; i += 1) {
      newRow.insertCell().textContent = '';
    }
  }

  function removeRow() {
    if (!canRemoveRow()) {
      return;
    }

    table.deleteRow(getRowCount() - 1);
  }

  function appendColumn() {
    if (!canAppendColumn()) {
      return;
    }

    for (const row of table.rows) {
      row.insertCell().textContent = '';
    }
  }

  function removeColumn() {
    if (!canRemoveColumn()) {
      return;
    }

    for (const row of table.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }

  buttons.appendRow.addEventListener('click', () => {
    appendRow();
    updateButtons();
  });

  buttons.removeRow.addEventListener('click', () => {
    removeRow();
    updateButtons();
  });

  buttons.appendColumn.addEventListener('click', () => {
    appendColumn();
    updateButtons();
  });

  buttons.removeColumn.addEventListener('click', () => {
    removeColumn();
    updateButtons();
  });

  updateButtons();
});
