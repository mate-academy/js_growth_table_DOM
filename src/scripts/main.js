'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const fieldBlock = document.querySelector('.field');
let field = Array.from(fieldBlock.querySelectorAll('tr'));

document.addEventListener('DOMContentLoaded', () => {
  fieldBlock.innerHTML = '';

  field.forEach((fiel) => {
    fieldBlock.appendChild(fiel);
  });

  updateButtonStates();
});


function updateButtonStates() {
  const rowCount = field.length;
  const columnCount = field.length > 0 ? field[0].children.length : 0;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;

  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (field.length < 10) {
    const newRow = field[0].cloneNode(true);
    fieldBlock.appendChild(newRow);
    field = Array.from(fieldBlock.querySelectorAll('tr'));
    updateButtonStates();
  }
});

removeRow.addEventListener('click', () => {
  if (field.length > 2) {
    fieldBlock.lastElementChild.remove();
    field = Array.from(fieldBlock.querySelectorAll('tr'));
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', () => {
  field.forEach((row) => {
    if (row.children.length < 10) {
      const newCell = document.createElement('td');
      row.appendChild(newCell);
    }
  });

  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  field.forEach((row) => {
    if (row.children.length > 2) {
      row.lastElementChild.remove();
    }
  });

  updateButtonStates();
});
