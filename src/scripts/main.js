'use strict';

const tbody = document.querySelector('tbody');
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
      const td = document.createElement('td');

      row.appendChild(td);
    }
    tbody.appendChild(row);
    rows++;
    updateButtonsState();
  }
}

function addColumn() {
  if (columns < 10) {
    tbody.querySelectorAll('tr').forEach(row => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
    columns++;
    updateButtonsState();
  }
}

function removeRow() {
  if (rows > 2) {
    tbody.removeChild(tbody.lastElementChild);
    rows--;
    updateButtonsState();
  }
}

function removeColumn() {
  if (columns > 2) {
    tbody.querySelectorAll('tr').forEach(row => {
      row.removeChild(row.lastElementChild);
    });
    columns--;
    updateButtonsState();
  }
}

function updateButtonsState() {
  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColumnBtn.disabled = columns >= 10;
  removeColumnBtn.disabled = columns <= 2;
}

appendRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtonsState();
