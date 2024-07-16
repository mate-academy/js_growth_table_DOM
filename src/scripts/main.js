'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const field = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function getCurrentCounts() {
  const rows = field.getElementsByTagName('tr');
  const columns =
    rows.length > 0 ? rows[0].getElementsByTagName('td').length : 0;

  return {
    currentRows: rows.length,
    currentColumns: columns,
  };
}

const updateButtonStates = () => {
  const { currentRows, currentColumns } = getCurrentCounts();

  appendRow.disabled = currentRows >= MAX_COUNT;
  removeRow.disabled = currentRows <= MIN_COUNT;
  appendColumn.disabled = currentColumns >= MAX_COUNT;
  removeColumn.disabled = currentColumns <= MIN_COUNT;
};

const addRow = () => {
  const { currentColumns, currentRows } = getCurrentCounts();

  if (currentRows < MAX_COUNT) {
    const newRow = field.insertRow();

    for (let i = 0; i < currentColumns; i++) {
      newRow.insertCell();
    }
    updateButtonStates();
  }
};

const deleteRow = () => {
  const { currentRows } = getCurrentCounts();

  if (currentRows > MIN_COUNT) {
    field.deleteRow(-1);
    updateButtonStates();
  }
};

const addColumn = () => {
  const { currentColumns } = getCurrentCounts();

  if (currentColumns < MAX_COUNT) {
    for (const row of field.rows) {
      row.insertCell();
    }
    updateButtonStates();
  }
};

const deleteColumn = () => {
  const { currentColumns } = getCurrentCounts();

  if (currentColumns > MIN_COUNT) {
    for (const row of field.rows) {
      row.deleteCell(-1);
    }
    updateButtonStates();
  }
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);

updateButtonStates();
