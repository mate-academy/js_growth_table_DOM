'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');
const buttonAddRow = document.querySelector('.append-row.button');
const buttonAddColumn = document.querySelector('.append-column.button');
const buttonRemoveColumn = document.querySelector('.remove-column.button');
const buttonRemoveRow = document.querySelector('.remove-row.button');

const updateButtonStates = () => {
  const firstRow = document.querySelector('tr');
  const columns = firstRow ? firstRow.children.length : 0;
  const rows = document.querySelectorAll('tr').length;

  if (columns === 10) {
    buttonAddColumn.setAttribute('disabled', 'disabled');
  } else {
    buttonAddColumn.removeAttribute('disabled');
  }

  if (columns <= 2) {
    buttonRemoveColumn.setAttribute('disabled', 'disabled');
  } else {
    buttonRemoveColumn.removeAttribute('disabled');
  }

  if (rows === 10) {
    buttonAddRow.setAttribute('disabled', 'disabled');
  } else {
    buttonAddRow.removeAttribute('disabled');
  }

  if (rows <= 2) {
    buttonRemoveRow.setAttribute('disabled', 'disabled');
  } else {
    buttonRemoveRow.removeAttribute('disabled');
  }
};

container.addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    updateButtonStates();
  }
});

buttonAddRow.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');
  const rowCount = firstRow ? firstRow.children.length : 0;

  if (rowCount > 0) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < rowCount; i++) {
      const column = document.createElement('td');

      newRow.append(column);
    }
    table.append(newRow);
  }

  updateButtonStates();
});

buttonAddColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  tr.forEach((row) => {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  });

  updateButtonStates();
});

buttonRemoveColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  tr.forEach((row) => {
    if (row.children.length > 0) {
      row.removeChild(row.lastElementChild);
    }
  });

  updateButtonStates();
});

buttonRemoveRow.addEventListener('click', () => {
  if (table.children.length > 0) {
    table.removeChild(table.lastElementChild);
  }

  updateButtonStates();
});
