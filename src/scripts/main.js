'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
let rowAmount = table.children.length;
let columnAmount = table.firstChild.children.length;

function renderTable() {
  table.innerHTML = '';

  for (let j = 0; j < rowAmount; j++) {
    const row = document.createElement('tr');

    for (let i = 0; i < columnAmount; i++) {
      const column = document.createElement('td');

      row.append(column);
    }
    table.append(row);
  }
}

appendRow.addEventListener('click', () => {
  rowAmount++;

  if (rowAmount >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;

  renderTable();
});

removeRow.addEventListener('click', () => {
  rowAmount--;

  if (rowAmount <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;

  renderTable();
});

appendColumn.addEventListener('click', () => {
  columnAmount++;

  if (columnAmount >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;

  renderTable();
});

removeColumn.addEventListener('click', () => {
  columnAmount--;

  if (columnAmount <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;

  renderTable();
});
