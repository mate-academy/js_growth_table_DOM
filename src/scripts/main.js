'use strict';

const field = document.querySelector('.field');
const buttons = document.querySelectorAll('.button');

buttons.forEach(item => item.addEventListener('click', (e) => {
  const target = e.target;

  const tBody = field.children[0];
  const rows = field.children[0].children;
  const columns = rows[0].children;

  switch (target.classList[0]) {
    case 'append-row':
      appendRow(rows, tBody, target);
      break;
    case 'remove-row':
      removeRow(rows, tBody, target);
      break;
    case 'append-column':
      appendColumn(columns, rows, target);
      break;
    case 'remove-column':
      removeColumn(columns, rows, target);
      break;
    default:
      break;
  }
}));

function appendRow(rows, tBody, target) {
  const rowsLength = rows[0].children.length;
  const row = tBody.insertRow(0);

  for (let i = 0; i < rowsLength; i++) {
    row.insertCell(0);
  }

  if (rows.length + 1 > 10) {
    target.disabled = true;
  }
}

function removeRow(rows, tBody, target) {
  tBody.deleteRow(0);

  if (rows.length <= 2) {
    target.disabled = true;
  }
}

function appendColumn(columns, rows, target) {
  [...rows].forEach(item => item.insertCell(0));

  if (columns.length + 1 > 10) {
    target.disabled = true;
  }
}

function removeColumn(columns, rows, target) {
  [...rows].forEach(item => item.deleteCell(0));

  if (columns.length <= 2) {
    target.disabled = true;
  }
}
