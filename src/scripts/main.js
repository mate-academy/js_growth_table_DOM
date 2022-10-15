'use strict';

const tableBody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

const addRow = () => {
  const newRow = tableBody.lastElementChild.cloneNode(true);

  tableBody.append(newRow);

  if (tableBody.children.length === maxCount) {
    appendRow.disabled = true;
  }

  if (tableBody.children.length > minCount) {
    removeRow.disabled = false;
  }
};

const deleteRow = () => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length === minCount) {
    removeRow.disabled = true;
  }

  if (tableBody.children.length < maxCount) {
    appendRow.disabled = false;
  }
};

const addCell = () => {
  const rows = [...tableBody.children];

  rows.forEach(row => {
    const newColumn = row.lastElementChild.cloneNode(true);

    row.append(newColumn);

    if (row.children.length === maxCount) {
      appendColumn.disabled = true;
    }

    if (row.children.length > minCount) {
      removeColumn.disabled = false;
    }
  });
};

const deleteCell = () => {
  const rows = [...tableBody.children];

  rows.forEach(row => {
    row.lastElementChild.remove();

    if (row.children.length < maxCount) {
      appendColumn.disabled = false;
    }

    if (row.children.length === minCount) {
      removeColumn.disabled = true;
    }
  });
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addCell);
removeColumn.addEventListener('click', deleteCell);
