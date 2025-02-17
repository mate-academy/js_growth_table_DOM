'use strict';

// Cache the main DOM elements
const container = document.querySelector('.container');
const field = container.querySelector('.field');
const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

// Constraints for table dimensions
const minTableSize = 2;
const maxTableSize = 10;

// Helper functions for retrieving table dimensions and parts
const getRowsCount = () => field.rows.length;
const getColumnsCount = () => (field.rows[0] ? field.rows[0].cells.length : 0);
const getLastRow = () => field.rows[getRowsCount() - 1];
const getLastColumnIndex = () => getColumnsCount() - 1;

// Helper functions that update 'disabled' attribute of the buttons
const updateRowButtonsVisibility = () => {
  const rowCount = getRowsCount();

  removeRowButton.disabled = rowCount <= minTableSize;
  appendRowButton.disabled = rowCount >= maxTableSize;
};

const updateColumnButtonsVisibility = () => {
  const columnCount = getColumnsCount();

  removeColumnButton.disabled = columnCount <= minTableSize;
  appendColumnButton.disabled = columnCount >= maxTableSize;
};

// Row management functions
function addRow() {
  if (!appendRowButton.disabled) {
    const lastRow = getLastRow();
    const newRow = lastRow.cloneNode(true);

    lastRow.after(newRow);
    updateRowButtonsVisibility();
  }
}

function removeRow() {
  if (!removeRowButton.disabled) {
    const lastRow = getLastRow();

    lastRow.remove();
    updateRowButtonsVisibility();
  }
}

// Column management functions
function addColumn() {
  if (!appendColumnButton.disabled) {
    const lastColumnIndex = getLastColumnIndex();

    for (const row of field.rows) {
      const lastCell = row.cells[lastColumnIndex];
      const newCell = lastCell.cloneNode(true);

      lastCell.after(newCell);
    }

    updateColumnButtonsVisibility();
  }
}

function removeColumn() {
  if (!removeColumnButton.disabled) {
    const lastColumnIndex = getLastColumnIndex();

    for (const row of field.rows) {
      const lastCell = row.cells[lastColumnIndex];

      lastCell.remove();
    }

    updateColumnButtonsVisibility();
  }
}

// Handle button clicks with event delegation on the container
container.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  if (!button) {
    return;
  }

  switch (button) {
    case appendRowButton:
      addRow();
      break;
    case removeRowButton:
      removeRow();
      break;
    case appendColumnButton:
      addColumn();
      break;
    case removeColumnButton:
      removeColumn();
      break;
  }
});
