'use strict';

// write code here
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAppend = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');
const table = document.querySelector('table');
const max = 9;
const min = 3;

columnAppend.addEventListener('click', (e) => {
  const trAll = document.querySelectorAll('tr');

  if (table.rows[0].cells.length >= max) {
    columnAppend.disabled = true;
  }

  for (const i of trAll) {
    i.insertAdjacentHTML('beforeend', `<td></td>`);
  }

  columnRemove.disabled = false;
});

rowAppend.addEventListener('click', (e) => {
  const tr = document.querySelector('tr');
  const row = document.createElement('tr');

  if (table.rows.length >= max) {
    rowAppend.disabled = true;
  }

  for (let i = 0; i < tr.cells.length; i++) {
    const td = document.createElement('td');

    row.append(td);
  }

  table.append(row);

  rowRemove.disabled = false;
});

rowRemove.addEventListener('click', (e) => {
  if (table.rows.length <= min) {
    rowRemove.disabled = true;
  }

  table.rows[0].remove();

  rowAppend.disabled = false;
});

columnRemove.addEventListener('click', (e) => {
  const trAll = document.querySelectorAll('tr');

  if (table.rows[0].cells.length <= min) {
    columnRemove.disabled = true;
  }

  for (const i of trAll) {
    i.children[0].remove();
  }

  columnAppend.disabled = false;
});
