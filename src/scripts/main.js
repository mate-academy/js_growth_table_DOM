'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', () => {
  const tableBody = table.querySelector('tbody');
  const currentTr = Array.from(table.querySelectorAll('tr'));

  if (tableBody.children.length < 10) {
    const row = tableBody.insertRow(0);

    for (let i = 0; i < currentTr[0].cells.length; i++) {
      row.insertCell(i);
    };
  }
});

removeRow.addEventListener('click', () => {
  const tableBody = table.querySelector('tbody');

  if (tableBody.children.length > 2) {
    tableBody.deleteRow(0);
  }
});

appendColumn.addEventListener('click', () => {
  const tableBody = table.querySelector('tbody');

  if (tableBody.children[0].children.length < 10) {
    for (let i = 0; i < tableBody.children.length; i++) {
      tableBody.children[i].innerHTML += `
        <td></td>
      `;
    }
  }
});

removeColumn.addEventListener('click', () => {
  const tableBody = table.querySelector('tbody');

  if (tableBody.children[0].children.length > 2) {
    for (let i = 0; i < tableBody.children.length; i++) {
      tableBody.children[i].children[0].remove();
    }
  }
});
