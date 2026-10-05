'use strict';

const button = document.querySelector('.container');
const maxCount = 10;
const minCount = 2;
const buttonAppRow = document.querySelector('.append-row');
const buttonRemRow = document.querySelector('.remove-row');
const buttonAppCol = document.querySelector('.append-column');
const buttonRemCol = document.querySelector('.remove-column');

button.addEventListener('click', (even) => {
  const typeClick = even.target.closest('.button');

  if (!typeClick) {
    return;
  }

  switch (true) {
    case typeClick.classList.contains('append-row'):
      appendRow();
      enableDisable();
      break;

    case typeClick.classList.contains('remove-row'):
      removeRow();
      enableDisable();
      break;

    case typeClick.classList.contains('append-column'):
      appendColumn();
      enableDisable();
      break;

    case typeClick.classList.contains('remove-column'):
      removeColumn();
      enableDisable();
      break;
  }
});

function appendRow() {
  if (!buttonAppRow.disabled) {
    const table = document.querySelector('tbody');
    const clone = table.children[0].cloneNode(true);

    table.append(clone);
  }
}

function removeRow() {
  if (!buttonRemRow.disabled) {
    const table = document.querySelector('tbody');

    table.lastElementChild.remove();
  }
}

function appendColumn() {
  if (!buttonAppCol.disabled) {
    const tr = document.querySelectorAll('tr');

    for (const elem of tr) {
      const clone = elem.children[0].cloneNode(true);

      elem.append(clone);
    }
  }
}

function removeColumn() {
  if (!buttonRemCol.disabled) {
    const tr = document.querySelectorAll('tr');

    for (const elem of tr) {
      elem.lastElementChild.remove();
    }
  }
}

function enableDisable() {
  const rowCount = document.querySelectorAll('tr').length;
  const columnCount = document.querySelector('tbody tr').children.length;

  buttonAppRow.disabled = rowCount === maxCount;
  buttonRemRow.disabled = rowCount === minCount;
  buttonAppCol.disabled = columnCount === maxCount;
  buttonRemCol.disabled = columnCount === minCount;
}
