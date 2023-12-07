'use strict';

const table = document.querySelector('tbody');

const getUpdatedRows = () => {
  return table.querySelectorAll('tr');
};

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtonState() {
  appendRow.disabled = table.children.length === 10;
  removeRow.disabled = table.children.length === 2;
  appendColumn.disabled = getUpdatedRows()[0].children.length === 10;
  removeColumn.disabled = getUpdatedRows()[0].children.length === 2;
}

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  newRow.innerHTML = getUpdatedRows()[0].innerHTML;
  table.appendChild(newRow);

  updateButtonState();
});

removeRow.addEventListener('click', () => {
  table.removeChild(table.lastElementChild);

  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  getUpdatedRows().forEach((row) => {
    const data = document.createElement('td');

    row.appendChild(data);
  });

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  getUpdatedRows().forEach((row) => {
    row.removeChild(row.lastElementChild);
  });

  updateButtonState();
});

updateButtonState();
