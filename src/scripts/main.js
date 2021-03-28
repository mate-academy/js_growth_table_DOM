'use strict';

const tableBody = document.querySelector('.field tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', (e) => {
  if (tableBody.children.length < 10) {
    const newRow = tableBody.lastElementChild.cloneNode(true);

    tableBody.appendChild(newRow);
  } else {
    addRow.disabled = true;
  }
  removeRow.disabled = tableBody.children.length <= 2;
  addRow.disabled = tableBody.children.length >= 10;
});

addColumn.addEventListener('click', (e) => {
  for (const row of tableBody.children) {
    if (row.children.length < 10) {
      const newColumnCell = row.lastElementChild.cloneNode(true);

      row.appendChild(newColumnCell);
    } else {
      addColumn.disabled = true;
    }
    removeColumn.disabled = row.children.length <= 2;
    addColumn.disabled = row.children.length >= 10;
  }
});

removeRow.addEventListener('click', (e) => {
  if (tableBody.children.length > 2) {
    const lastChild = tableBody.lastElementChild;

    tableBody.removeChild(lastChild);
  } else {
    removeRow.disabled = true;
  }
  removeRow.disabled = tableBody.children.length <= 2;
  addRow.disabled = tableBody.children.length >= 10;
});

removeColumn.addEventListener('click', (e) => {
  for (const row of tableBody.children) {
    if (row.children.length > 2) {
      const lastColumnCell = row.lastElementChild;

      row.removeChild(lastColumnCell);
    }
    removeColumn.disabled = row.children.length <= 2;
    addColumn.disabled = row.children.length >= 10;
  }
});
