'use strict';

const tableBody = document.querySelector('.field tbody');
const buttons = document.querySelectorAll('.button');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target === addRow) {
      if (tableBody.children.length < 10) {
        const newRow = tableBody.lastElementChild.cloneNode(true);

        tableBody.appendChild(newRow);
      } else {
        addRow.disabled = true;
      }
      removeRow.disabled = tableBody.children.length <= 2;
      addRow.disabled = tableBody.children.length >= 10;
    } else if (e.target === addColumn) {
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
    } else if (e.target === removeRow) {
      if (tableBody.children.length > 2) {
        const lastChild = tableBody.lastElementChild;

        tableBody.removeChild(lastChild);
      } else {
        removeRow.disabled = true;
      }
      removeRow.disabled = tableBody.children.length <= 2;
      addRow.disabled = tableBody.children.length >= 10;
    } else if (e.target === removeColumn) {
      for (const row of tableBody.children) {
        if (row.children.length > 2) {
          const lastColumnCell = row.lastElementChild;

          row.removeChild(lastColumnCell);
        }
        removeColumn.disabled = row.children.length <= 2;
        addColumn.disabled = row.children.length >= 10;
      }
    }
  });
}
