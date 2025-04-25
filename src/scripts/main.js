'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const addRow = () => {
  const row = document.createElement('tr');
  const cells = table.querySelectorAll('tr:first-child td');
  const rows = table.querySelectorAll('tr');

  if (rows.length < 10) {
    cells.forEach(() => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
    table.appendChild(row);
  }

  disableButtons();
};

const addColumn = () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    rows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
  }

  disableButtons();
};

const removeRows = () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length > 2) {
    rows[rows.length - 1].remove();
  }

  disableButtons();
};

const removeColumns = () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    rows.forEach((row) => {
      row.lastElementChild.remove();
    });
  }

  disableButtons();
};

const disableButtons = () => {
  if (table.querySelectorAll('tr').length >= 10) {
    appendRow.setAttribute('disabled', '');
  } else {
    appendRow.removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr:first-child td').length >= 10) {
    appendColumn.setAttribute('disabled', '');
  } else {
    appendColumn.removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr').length <= 2) {
    removeRow.setAttribute('disabled', '');
  } else {
    removeRow.removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr:first-child td').length <= 2) {
    removeColumn.setAttribute('disabled', '');
  } else {
    removeColumn.removeAttribute('disabled');
  }
};

const addEventListeners = () => {
  appendRow.addEventListener('click', addRow);
  appendColumn.addEventListener('click', addColumn);
  removeRow.addEventListener('click', removeRows);
  removeColumn.addEventListener('click', removeColumns);
};

const init = () => {
  addEventListeners();
};

init();
