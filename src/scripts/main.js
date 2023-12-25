'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtonState() {
  appendRowBtn.disabled = table.children.length === 10;
  removeRowBtn.disabled = table.children.length === 2;
  appendColumnBtn.disabled = getUpdatedRows()[0].children.length === 10;
  removeColumnBtn.disabled = getUpdatedRows()[0].children.length === 2;
}

function getUpdatedRows() {
  return table.querySelectorAll('tr');
}

function appendRow() {
  const newRow = createRow();

  table.appendChild(newRow);
  updateButtonState();
}

function removeRow() {
  table.removeChild(table.lastElementChild);
  updateButtonState();
}

function appendColumn() {
  getUpdatedRows().forEach((row) => {
    const data = document.createElement('td');

    row.appendChild(data);
  });
  updateButtonState();
}

function removeColumn() {
  getUpdatedRows().forEach((row) => {
    row.removeChild(row.lastElementChild);
  });
  updateButtonState();
}

function createRow() {
  const newRow = document.createElement('tr');

  for (let i = 0; i < getUpdatedRows()[0].children.length; i++) {
    const data = document.createElement('td');

    newRow.appendChild(data);
  }

  return newRow;
}

container.addEventListener('click', (e) => {
  const targetButton = e.target;

  switch (targetButton.classList.value) {
    case 'append-row button':
      appendRow();
      break;
    case 'remove-row button':
      removeRow();
      break;
    case 'append-column button':
      appendColumn();
      break;
    case 'remove-column button':
      removeColumn();
      break;
    default:
  }
});

updateButtonState();
