'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_SIZE_LIMIT = 10;
const MIN_SIZE_LIMIT = 2;

const getRows = () => document.querySelectorAll('tr');

const getCurrentRowsLimit = () => {
  const rows = getRows();

  return rows.length;
};

const getCurrentColumnsSize = () => {
  const rows = getRows();
  const currentRowsLimit = getCurrentRowsLimit();

  return rows[currentRowsLimit - 1].cells.length;
};

function updateButtons() {
  const currentRowsSize = getCurrentRowsLimit();
  const currentColumnSize = getCurrentColumnsSize();

  appendRow.disabled = currentRowsSize >= MAX_SIZE_LIMIT;
  removeRow.disabled = currentRowsSize <= MIN_SIZE_LIMIT;
  appendColumn.disabled = currentColumnSize >= MAX_SIZE_LIMIT;
  removeColumn.disabled = currentColumnSize <= MIN_SIZE_LIMIT;
}

const onAppendColumnClik = () => {
  const rows = getRows();

  if (getCurrentColumnsSize() !== MAX_SIZE_LIMIT) {
    rows.forEach((row) => row.insertCell(-1));

    updateButtons();
  }
};

const onRemoveColumnClick = () => {
  const rows = getRows();

  if (getCurrentColumnsSize() !== MIN_SIZE_LIMIT) {
    rows.forEach((row) => row.deleteCell(-1));

    updateButtons();
  }
};

const onAppendRowClick = () => {
  const rows = getRows();
  const lastRow = rows[rows.length - 1];
  const newRow = lastRow.cloneNode(true);
  const tableBody = table.tBodies[0];

  if (getCurrentRowsLimit() !== MAX_SIZE_LIMIT) {
    tableBody.appendChild(newRow);

    updateButtons();
  }
};

const onRemoveRowClick = () => {
  const rows = getRows();
  const lastRow = rows[rows.length - 1];

  if (getCurrentRowsLimit() !== MIN_SIZE_LIMIT) {
    lastRow.remove();

    updateButtons();
  }
};

appendRow.addEventListener('click', onAppendRowClick);
removeRow.addEventListener('click', onRemoveRowClick);
appendColumn.addEventListener('click', onAppendColumnClik);
removeColumn.addEventListener('click', onRemoveColumnClick);
