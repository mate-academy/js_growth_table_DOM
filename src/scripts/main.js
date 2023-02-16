'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');
const max = 10;
const min = 2;

addRow.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const cellCount = table.rows[0].cells.length;
  const row = table.insertRow(rowCount);

  if (rowCount >= 10) {
    return;
  }

  for (let i = 0; i < cellCount; i++) {
    const cell = row.insertCell(i);

    cell.innerHTML = '<td></td>';
  }
});

delRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount <= min) {
    return;
  }
  table.deleteRow(rowCount - 1);
});

addCol.addEventListener('click', () => {
  const cellCount = table.rows[0].cells.length;

  if (cellCount >= max) {
    return;
  }

  for (const el of table.rows) {
    el.append(el.lastElementChild.cloneNode(true));
  }
});

delCol.addEventListener('click', () => {
  const cellCount = table.rows[0].cells.length;

  if (cellCount <= min) {
    return;
  }

  for (const el of table.rows) {
    el.lastElementChild.remove();
  }
});
