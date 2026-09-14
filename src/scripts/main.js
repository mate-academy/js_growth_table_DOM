'use strict';

const table = document.querySelector('tbody');

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function updateButtonStates() {
  const rowCount = table.children.length;
  const columnCount = table.firstElementChild.children.length;

  addRowBtn.disabled = rowCount >= max;
  removeRowBtn.disabled = rowCount <= min;
  addColumnBtn.disabled = columnCount >= max;
  removeColumnBtn.disabled = columnCount <= min;
}

addRowBtn.addEventListener('click', () => {
  const columnCount = table.firstElementChild.children.length;

  const row = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  table.appendChild(row);
  updateButtonStates();
});

removeRowBtn.addEventListener('click', () => {
  table.removeChild(table.lastChild);
  updateButtonStates();
});

addColumnBtn.addEventListener('click', () => {
  Array.from(table.children).forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });
  updateButtonStates();
});

removeColumnBtn.addEventListener('click', () => {
  Array.from(table.children).forEach((row) => {
    row.removeChild(row.lastChild);
  });
  updateButtonStates();
});

updateButtonStates();
