'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;
const table = document.querySelector('tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const getRowCount = () => table.rows.length;
const getColumnCount = () => table.rows[0].cells.length;

function updateButtons() {
  const rows = getRowCount();
  const cols = getColumnCount();

  appendRowBtn.disabled = rows >= MAX_SIZE;
  removeRowBtn.disabled = rows <= MIN_SIZE;
  appendColumnBtn.disabled = cols >= MAX_SIZE;
  removeColumnBtn.disabled = cols <= MIN_SIZE;
}

appendRowBtn.addEventListener('click', () => {
  if (getRowCount() >= MAX_SIZE) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < getColumnCount(); i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  table.appendChild(newRow);

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (getRowCount() <= MIN_SIZE) {
    return;
  }

  table.lastElementChild.remove();
  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  if (getColumnCount() >= MAX_SIZE) {
    return;
  }

  const rows = table.children;

  for (let i = 0; i < getRowCount(); i++) {
    const cell = document.createElement('td');

    rows[i].appendChild(cell);
  }

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (getColumnCount() <= MIN_SIZE) {
    return;
  }

  const rows = table.children;

  for (let i = 0; i < getRowCount(); i++) {
    rows[i].lastElementChild.remove();
  }

  updateButtons();
});

updateButtons();
