'use strict';

const tableBody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

// Event for adding rows
appendRow.addEventListener('click', () => {
  const newRow = tableBody.lastElementChild.cloneNode(true);

  tableBody.append(newRow);

  if (tableBody.children.length === 10) {
    appendRow.disabled = true;
  }

  if (tableBody.children.length > minCount) {
    removeRow.disabled = false;
  }
});

// Event for removing rows
removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length === minCount) {
    removeRow.disabled = true;
  }

  if (tableBody.children.length < maxCount) {
    appendRow.disabled = false;
  }
});

// Event for adding columns
appendColumn.addEventListener('click', () => {
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
});

// Event for removing columns
removeColumn.addEventListener('click', () => {
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
});
