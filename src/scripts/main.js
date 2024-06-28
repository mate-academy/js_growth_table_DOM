'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field').children[0];

const handleAddRow = () => {
  const rows = table.querySelectorAll('tr');

  const newRow = document.createElement('tr');
  const columnsCount = rows[0].children.length;

  for (let i = 0; i < columnsCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  table.appendChild(newRow);

  removeRow.disabled = false;

  if (rows.length + 1 === 10) {
    appendRow.disabled = true;
  }
};

const handleRemoveRow = () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    table.removeChild(rows[rows.length - 1]);
  }

  appendRow.disabled = false;

  if (rows.length - 1 === 2) {
    removeRow.disabled = true;
  }
};

const handleAddColumn = () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  removeColumn.disabled = false;

  if (rows[0].children.length === 10) {
    appendColumn.disabled = true;
  }
};

const handleRemoveColumn = () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    row.children[row.children.length - 1].remove();
  });

  appendColumn.disabled = false;

  if (rows[0].children.length === 2) {
    removeColumn.disabled = true;
  }
};

appendRow.addEventListener('click', handleAddRow);
removeRow.addEventListener('click', handleRemoveRow);
appendColumn.addEventListener('click', handleAddColumn);
removeColumn.addEventListener('click', handleRemoveColumn);
