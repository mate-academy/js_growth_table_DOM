'use strict';

const field = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const counter = {
  row: 4,
  column: 4,
};

appendRow.addEventListener('click', () => {
  field.append(field.lastElementChild.cloneNode(true));

  if (++counter.row === 10) {
    appendRow.disabled = true;
  } else if (counter.row === 3) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  field.lastElementChild.remove();

  if (--counter.row === 9) {
    appendRow.disabled = false;
  } else if (counter.row === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  for (const tr of field.children) {
    tr.insertAdjacentHTML('beforeend', '<td></td>');
  }

  if (++counter.column === 10) {
    appendColumn.disabled = true;
  } else if (counter.column === 3) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const tr of field.children) {
    tr.lastElementChild.remove();
  }

  if (--counter.column === 9) {
    appendColumn.disabled = false;
  } else if (counter.column === 2) {
    removeColumn.disabled = true;
  }
});
