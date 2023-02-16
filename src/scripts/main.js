'use strict';

const table = document.querySelector('.field');
const addRowEl = document.querySelector('.append-row');
const delRowEl = document.querySelector('.remove-row');
const addColEl = document.querySelector('.append-column');
const delColEl = document.querySelector('.remove-column');
const MAXlines = 10;
const MINlines = 2;

addRowEl.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const cellCount = table.rows[0].cells.length;
  const row = table.insertRow(rowCount);

  if (rowCount >= MAXlines) {
    return;
  }

  for (let i = 0; i < cellCount; i++) {
    const cell = row.insertCell(i);

    cell.insertAdjacentHTML('beforeend', '<td></td>');
  }
});

delRowEl.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount <= MINlines) {
    return;
  }
  table.deleteRow(rowCount - 1);
});

addColEl.addEventListener('click', () => {
  const cellCount = table.rows[0].cells.length;

  if (cellCount >= MAXlines) {
    return;
  }

  for (const el of table.rows) {
    el.append(el.lastElementChild.cloneNode(true));
  }
});

delColEl.addEventListener('click', () => {
  const cellCount = table.rows[0].cells.length;

  if (cellCount <= MINlines) {
    return;
  }

  for (const el of table.rows) {
    el.lastElementChild.remove();
  }
});
