'use strict';

// write code here
const addRow = (tbody) => {
  const row = document.createElement('tr');

  const countColumn = tbody.children[0].children.length;

  for (let i = 0; i < countColumn; i++) {
    const td = document.createElement('td');

    row.append(td);
  }

  tbody.append(row);
};

const removeRow = (tbody) => {
  const row = tbody.lastElementChild;

  tbody.removeChild(row);
};

const addColumn = (tbody) => {
  [...tbody.children].forEach(row => {
    const td = document.createElement('td');

    row.append(td);
  });
};

const removeColumn = (tbody) => {
  [...tbody.children].forEach(col => {
    col.removeChild(col.children[0]);
  });
};

const handleEventClickBtn = (limiter, callback, isRow) => {
  const tbody = document.querySelector('.field').children[0];

  if (isRow) {
    if (tbody.children.length !== limiter) {
      callback(tbody);
    }
  } else {
    if (tbody.children[0].children.length !== limiter) {
      callback(tbody);
    }
  }
};

document.querySelector('.append-row')
  .addEventListener('click', () => handleEventClickBtn(10, addRow, true));

document.querySelector('.remove-row')
  .addEventListener('click', () => handleEventClickBtn(2, removeRow, true));

document.querySelector('.append-column')
  .addEventListener('click', () => handleEventClickBtn(10, addColumn, false));

document.querySelector('.remove-column')
  .addEventListener('click', () => handleEventClickBtn(2, removeColumn, false));
