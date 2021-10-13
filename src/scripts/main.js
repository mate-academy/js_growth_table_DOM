'use strict';

// write code here
const tBody = document.querySelector('tbody');

const rowPlus = document.querySelector('.append-row');
const rowLess = document.querySelector('.remove-row');
const colPlus = document.querySelector('.append-column');
const colLess = document.querySelector('.remove-column');

function addRow() {
  const newRow = document.createElement('tr');

  for (let i = 0; i < tBody.rows[0].cells.length; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  tBody.append(newRow);
}

document.body.addEventListener('click', ev => {
  if (!ev.target.closest('button')) {
    return;
  }

  const tRows = [...tBody.rows];

  switch (ev.target) {
    case rowLess:
      tBody.lastElementChild.remove();
      break;

    case colLess:
      tRows.forEach(row => {
        row.lastElementChild.remove();
      });
      break;

    case rowPlus:
      addRow();
      break;

    case colPlus:
      tRows.forEach(row => {
        // row.append(document.createElement('td'));
        row.insertAdjacentHTML('beforeend', `<td></td>`);
      });
      break;
  }

  const rowCount = tBody.rows.length;
  const colCount = tBody.rows[0].cells.length;

  rowPlus.disabled = rowCount >= 10;
  rowLess.disabled = rowCount <= 2;
  colPlus.disabled = colCount >= 10;
  colLess.disabled = colCount <= 2;
});
