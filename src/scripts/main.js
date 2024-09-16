'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtonState() {
  const rowCount = table.children.length;
  const columnCount = getUpdatedRows()[0].children.length;

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColumnBtn.disabled = columnCount >= 10;
  removeColumnBtn.disabled = columnCount <= 2;
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

  switch (true) {
    case targetButton.classList.contains('append-row'):
      appendRow();
      break;
    case targetButton.classList.contains('remove-row'):
      removeRow();
      break;
    case targetButton.classList.contains('append-column'):
      appendColumn();
      break;
    case targetButton.classList.contains('remove-column'):
      removeColumn();
      break;
    default:
  }
});
