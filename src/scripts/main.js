'use strict';

const rows = [...document.querySelectorAll('tr')];
const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const render = () => {
  const rowsLength = rows.length;
  const colLength = rows[0].children.length;

  rowsLength === 10 ? appendRow.disabled = true : appendRow.disabled = false;
  rowsLength === 2 ? removeRow.disabled = true : removeRow.disabled = false;
  colLength === 10 ? appendCol.disabled = true : appendCol.disabled = false;
  colLength === 2 ? removeCol.disabled = true : removeCol.disabled = false;

  table.innerHTML = '';

  rows.forEach((row) => {
    table.append(row);
  });
};

const addRow = () => {
  if (rows.length > 9) {
    return;
  }

  const tr = document.createElement('tr');
  const columnsLength = rows[0].children.length;

  for (let i = 0; i < columnsLength; i++) {
    const td = document.createElement('td');

    tr.append(td);
  };

  rows.push(tr);
  render();
};

const deleteRow = () => {
  if (rows.length < 3) {
    return;
  }

  rows.pop();

  render();
};

const changeColumn = (value) => {
  if (value === '-') {
    if (rows[0].children.length < 3) {
      return;
    };
  }

  if (value === '+') {
    if (rows[0].children.length > 9) {
      return;
    };
  }

  rows.forEach(row => {
    const cellsLength = row.children.length;
    const char = value === '-' ? cellsLength - 1 : cellsLength + 1;

    row.innerHTML = '';

    for (let i = 0; i < char; i++) {
      const td = document.createElement('td');

      row.append(td);
    }
  });

  render();
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendCol.addEventListener('click', () => changeColumn('+'));
removeCol.addEventListener('click', () => changeColumn('-'));
