'use strict';

// write code here
const tBody = document.querySelector('tbody');

const rowPlus = document.querySelector('.append-row');
const rowLess = document.querySelector('.remove-row');
const colPlus = document.querySelector('.append-column');
const colLess = document.querySelector('.remove-column');

// utility functions
function addRow() {
  const newRow = document.createElement('tr');

  for (let i = 0; i < tBody.rows[0].cells.length; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  tBody.append(newRow);
}

function addColumn() {
  [...tBody.rows].forEach(row => {
    row.insertAdjacentHTML('beforeend', `<td></td>`);
  });
};

function removeRow() {
  tBody.lastElementChild.remove();
};

function removeColumn() {
  [...tBody.rows].forEach(row => {
    row.lastElementChild.remove();
  });
};

// onclick processing
document.body.addEventListener('click', ev => {
  if (!ev.target.closest('button')) {
    return;
  }

  switch (ev.target) {
    case rowLess:
      removeRow();
      break;

    case colLess:
      removeColumn();
      break;

    case rowPlus:
      addRow();
      break;

    case colPlus:
      addColumn();
      break;
  }

  const rowCount = tBody.rows.length;
  const colCount = tBody.rows[0].cells.length;

  rowPlus.disabled = rowCount >= 10;
  rowLess.disabled = rowCount <= 2;
  colPlus.disabled = colCount >= 10;
  colLess.disabled = colCount <= 2;
});
