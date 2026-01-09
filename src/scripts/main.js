'use strict';

// write code here
const MIN = 2;
const MAX = 10;
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const appendRow = () => {
  const clone = table.rows[0].cloneNode(true);

  tbody.appendChild(clone);
};

const removeRow = () => {
  table.rows[table.rows.length - 1].remove();
};

const appendColumn = () => {
  [...table.rows].forEach((element) => {
    element.append(element.cells[0].cloneNode(true));
  });
};

const removeColumn = () => {
  [...table.rows].forEach((element) => {
    return element.cells[element.cells.length - 1].remove();
  });
};

const checkLimitRows = () => {
  if (table.rows.length >= MAX) {
    appendRowButton.setAttribute('disabled', '');
  } else {
    appendRowButton.removeAttribute('disabled');
  }

  if (table.rows.length <= MIN) {
    removeRowButton.setAttribute('disabled', '');
  } else {
    removeRowButton.removeAttribute('disabled');
  }
};
const checkLimitColumns = () => {
  if (table.rows[0].cells.length >= MAX) {
    appendColumnButton.setAttribute('disabled', '');
  } else {
    appendColumnButton.removeAttribute('disabled');
  }

  if (table.rows[0].cells.length <= MIN) {
    removeColumnButton.setAttribute('disabled', '');
  } else {
    removeColumnButton.removeAttribute('disabled');
  }
};

appendRowButton.addEventListener('click', () => {
  appendRow();
  checkLimitRows();
});

removeRowButton.addEventListener('click', () => {
  removeRow();
  checkLimitRows();
});

appendColumnButton.addEventListener('click', () => {
  appendColumn();
  checkLimitColumns();
});

removeColumnButton.addEventListener('click', () => {
  removeColumn();
  checkLimitColumns();
});
