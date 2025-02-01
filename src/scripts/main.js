'use strict';

// write code here
const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const tr = document.querySelector('tbody > tr');

  if (table.rows.length < 10) {
    const row = document.createElement('tr');

    for (let i = 0; i < tr.children.length; i++) {
      const tdElement = document.createElement('td');

      row.appendChild(tdElement);
    }

    tbody.appendChild(row);
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    tbody.removeChild(tbody.children[tbody.children.length - 1]);
  }
});

appendColumn.addEventListener('click', () => {
  const row = document.querySelector('tr');

  if (row.children.length < 10) {
    for (const rowItem of table.rows) {
      const newChild = document.createElement('td');

      rowItem.appendChild(newChild);
    }
  }
});

removeColumn.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');

  if (firstRow.children.length > 2) {
    for (const row of table.rows) {
      row.removeChild(row.children[row.children.length - 1]);
    }
  }
});
