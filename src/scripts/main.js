'use strict';

const field = document.querySelector('.field tbody');

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

addRow.addEventListener('click', (e) => {
  const trsRow = [...document.querySelectorAll('tr')];

  if (trsRow.length < max) {
    if (deleteRow.getAttribute('disabled')) {
      deleteRow.removeAttribute('disabled');
    }

    const tr = document.createElement('tr');

    const len = trsRow[trsRow.length - 1].children.length;

    for (let i = 0; i < len; i++) {
      const td = document.createElement('td');

      tr.append(td);
    }

    field.append(tr);
  }

  if (trsRow.length + 1 >= max) {
    addRow.setAttribute('disabled', true);
  }
});

addColumn.addEventListener('click', (e) => {
  const trsCol = [...document.querySelectorAll('tr')];
  const len = trsCol[trsCol.length - 1].children.length;

  if (len < max) {
    if (deleteColumn.getAttribute('disabled')) {
      deleteColumn.removeAttribute('disabled');
    }

    trsCol.forEach((tr) => {
      const td = document.createElement('td');

      tr.append(td);
    });
  }

  if (len >= max - 1) {
    addColumn.setAttribute('disabled', true);
  }
});

deleteRow.addEventListener('click', (e) => {
  const trsRow = [...document.querySelectorAll('tr')];

  if (trsRow.length > min) {
    if (addRow.getAttribute('disabled')) {
      addRow.removeAttribute('disabled');
    }
    trsRow[trsRow.length - 1].remove();
  }

  if (trsRow.length - 1 <= min) {
    deleteRow.setAttribute('disabled', true);
  }
});

deleteColumn.addEventListener('click', (e) => {
  const trsCol = [...document.querySelectorAll('tr')];
  const len = trsCol[trsCol.length - 1].children.length;

  if (len > min) {
    if (addColumn.getAttribute('disabled')) {
      addColumn.removeAttribute('disabled');
    }

    trsCol.forEach((tr) => {
      const lastTd = tr.lastElementChild;

      lastTd.remove();
    });
  }

  if (len - 1 <= min) {
    deleteColumn.setAttribute('disabled', true);
  }
});
