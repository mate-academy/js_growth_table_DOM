'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

const field = document.querySelector('.field');
// const button = document.querySelectorAll('.button');

function getRowsCount() {
  return document.querySelectorAll('.field tr').length;
}

function getColumnCount() {
  return document.querySelector('.field tr').children.length;
}

function updateLength() {
  appendColumn.disabled = getColumnCount() >= maxCount;
  removeColumn.disabled = getColumnCount() <= minCount;
  appendRow.disabled = getRowsCount() >= maxCount;
  removeRow.disabled = getRowsCount() <= minCount;
}

appendRow.addEventListener('click', function (append) {
  const newTr = document.createElement('tr');

  const countColumn = getColumnCount();

  if (getRowsCount() < maxCount) {
    for (let i = 0; i < countColumn; i++) {
      const newTd = document.createElement('td');

      newTr.appendChild(newTd);
    }

    field.appendChild(newTr);
  }

  updateLength();
});

appendColumn.addEventListener('click', function (append) {
  if (getColumnCount() < maxCount) {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      const newTd = document.createElement('td');

      row.appendChild(newTd);
    });
  }

  updateLength();
});

removeRow.addEventListener('click', function (rem) {
  if (getRowsCount() > minCount) {
    const firstRows = document.querySelectorAll('.field tr');

    firstRows[firstRows.length - 1].remove();
  }
  updateLength();
});

removeColumn.addEventListener('click', function (rem) {
  if (getColumnCount() > minCount) {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
  }
  updateLength();
});

updateLength();
