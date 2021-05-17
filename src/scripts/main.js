'use strict';

const container = document.querySelector('.container');

const appendRow = container.querySelector('.append-row');

const removeRow = container.querySelector('.remove-row');

const appendCol = container.querySelector('.append-column');

const removeCol = container.querySelector('.remove-column');

const table = container.querySelector('.field');

const body = table.querySelector('tbody');

appendRow.addEventListener('click', (e) => {
  const row = table.querySelector('tr');

  const rowAdd = document.createElement('tr');

  const cellAdd = document.createElement('td');

  for (let i = 0; i < row.cells.length; i++) {
    rowAdd.append(cellAdd.cloneNode());
  };

  body.append(rowAdd);

  table.rows.length === 10
    ? appendRow.disabled = true
    : appendRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  const rowDel = table.querySelector('tr');

  rowDel.remove();

  table.rows.length === 2
    ? removeRow.disabled = true
    : removeRow.disabled = false;
});

appendCol.addEventListener('click', (e) => {
  const colAdd = document.createElement('td');

  for (const item of table.rows) {
    item.append(colAdd.cloneNode());
  };

  const rowApp = table.querySelector('tr');

  rowApp.cells.length === 10
    ? appendCol.disabled = true
    : appendCol.disabled = false;
});

removeCol.addEventListener('click', (e) => {
  for (const item of table.rows) {
    const td = item.querySelector('td');

    td.remove();
  };

  const rowRem = table.querySelector('tr');

  rowRem.cells.length === 2
    ? removeCol.disabled = true
    : removeCol.disabled = false;
});
