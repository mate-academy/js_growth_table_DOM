'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAppend = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');

const actions = {
  'append-row': appendRow,
  'remove-row': removeRow,
  'append-column': appendColumn,
  'remove-column': removeColumn,
};

const tr = tbody.querySelectorAll('tr');

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
  const action = e.target.classList;

  for (const [className, actionFunc] of Object.entries(actions)) {
    if (action.contains(className)) {
      actionFunc();
      break;
    }
  }
}

function appendRow() {
  const lastRow = tbody.lastElementChild;
  const clonedRow = lastRow.cloneNode(true);

  tbody.appendChild(clonedRow);

  if (tbody.children.length > 10) {
    while (tbody.children.length > 10) {
      removeRow();
    }
  }

  checkrows();
}

function removeRow() {
  tbody.lastElementChild.remove();
  checkrows();
}

function checkrows() {
  const rowCount = tbody.children.length;

  rowAppend.disabled = rowCount >= 10;
  rowRemove.disabled = rowCount <= 2;
}

function appendColumn() {
  tr.forEach((el) => {
    const lastCell = el.lastElementChild;

    const cloneCell = lastCell.cloneNode(true);

    el.appendChild(cloneCell);
  });

  if (tr[0].children.length > 10) {
    while (tr[0].children.length > 10) {
      removeColumn();
    }
  }

  checkColumn();
}

function removeColumn() {
  tr.forEach((el) => {
    el.lastElementChild.remove();
  });

  checkColumn();
}

function checkColumn() {
  const columnCount = tr[0].children.length;

  columnAppend.disabled = columnCount >= 10;
  columnRemove.disabled = columnCount <= 2;
}
