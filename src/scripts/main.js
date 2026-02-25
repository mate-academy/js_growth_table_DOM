'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableRow = document.querySelector('.field tr');
const tbody = document.querySelector('tbody');
const minElements = 2;
const maxElements = 10;

addRow.addEventListener('click', () => {
  const count = tbody.childElementCount;

  if (count === maxElements - 1) {
    addRow.setAttribute('disabled', '');
  }

  if (count < maxElements) {
    if (removeRow.hasAttribute('disabled')) {
      removeRow.removeAttribute('disabled');
    }
    tableRow.parentNode.append(createRow());
  }
});

removeRow.addEventListener('click', () => {
  const count = tbody.childElementCount;

  if (count === minElements + 1) {
    removeRow.setAttribute('disabled', '');
  }

  if (count > minElements) {
    if (addRow.hasAttribute('disabled')) {
      addRow.removeAttribute('disabled');
    }
    tbody.lastElementChild.remove();
  }
});

addColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('.field tr');

  tr.forEach((element) => {
    const count = element.cells.length;

    if (count === maxElements - 1) {
      addColumn.setAttribute('disabled', '');
    }

    if (count < maxElements) {
      if (removeColumn.hasAttribute('disabled')) {
        removeColumn.removeAttribute('disabled');
      }
      element.lastElementChild.after(createColumn());
    }
  });
});

removeColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('.field tr');

  tr.forEach((element) => {
    const count = element.cells.length;

    if (count === minElements + 1) {
      removeColumn.setAttribute('disabled', '');
    }

    if (count > minElements) {
      if (addColumn.hasAttribute('disabled')) {
        addColumn.removeAttribute('disabled');
      }
      element.lastElementChild.remove();
    }
  });
});

function createRow() {
  const row = document.createElement('tr');

  for (let i = 0; i < tableRow.cells.length; i++) {
    const column = document.createElement('td');

    row.append(column);
  }

  return row;
}

function createColumn() {
  const column = document.createElement('td');

  return column;
}
