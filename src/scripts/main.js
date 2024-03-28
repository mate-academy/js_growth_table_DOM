'use strict';

const table = document.querySelector('tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

let rows = 4;
let columns = 4;

function addRow() {
  if (rows < 10) {
    const row = document.createElement('tr');

    for (let i = 0; i < columns; i++) {
      const rowCell = document.createElement('td');

      row.appendChild(rowCell);
    }

    table.appendChild(row);
    rows++;
    buttonMode();
  }
}

function addColumn() {
  if (columns < 10) {
    table.querySelectorAll('tr').forEach((row) => {
      const columnCell = document.createElement('td');

      row.appendChild(columnCell);
    });

    columns++;
    buttonMode();
  }
}

function removeRow() {
  if (rows > 2) {
    table.removeChild(table.lastElementChild);
    rows--;
    buttonMode();
  }
}

function removeColumn() {
  if (columns > 2) {
    table.querySelectorAll('tr').forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
    columns--;
    buttonMode();
  }
}

function buttonMode() {
  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColumnBtn.disabled = columns >= 10;
  removeColumnBtn.disabled = columns <= 2;
}

appendRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

buttonMode();
