'use strict';

const tableBody = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');

let rows;

document.addEventListener('click', e => {
  const item = e.target;
  const lengthRow = tableBody.children.length;

  switch (item.className) {
    case ('append-row button'):
      if (lengthRow < 10) {
        deleteRow.disabled = false;

        tableBody.append(tableBody.lastElementChild.cloneNode(true));
      } else if (lengthRow === 10) {
        addRow.disabled = true;
      }

      break;

    case ('remove-row button'):
      if (lengthRow > 2) {
        addRow.disabled = false;

        tableBody.lastElementChild.remove();
      } else if (lengthRow === 2) {
        deleteRow.disabled = true;
      }

      break;

    case ('append-column button'):
      rows = document.querySelectorAll('tr');

      if (rows[0].children.length < 10) {
        deleteColumn.disabled = false;

        for (const child of [...rows]) {
          child.append(child.lastElementChild.cloneNode(true));
        }
      }

      if (rows[0].children.length === 10) {
        addColumn.disabled = true;
      }

      break;

    case ('remove-column button'):
      rows = document.querySelectorAll('tr');

      if (rows[0].children.length > 2) {
        addColumn.disabled = false;

        for (const child of [...rows]) {
          child.lastElementChild.remove();
        }
      } else if (rows[0].children.length === 2) {
        deleteColumn.disabled = true;
      }

      break;
  }
});
