'use strict';

const tableBody = document.querySelector('tbody');
const buttonToRemoveRow = document.querySelector('.remove-row');
const buttonToAddRow = document.querySelector('.append-row');
const buttonToRemoveColumn = document.querySelector('.remove-column');
const buttonToAddColumn = document.querySelector('.append-column');
const minLength = 2;
const maxLength = 10;
let countRows = document.querySelectorAll('tr').length;
let countColums = document.querySelectorAll('tr')[0].children.length;

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'BUTTON') {
    return;
  };

  switch (target.className) {
    case 'append-row button':
      countRows++;

      tableBody.append(tableBody.lastElementChild.cloneNode(true));
      break;

    case 'remove-row button':
      countRows--;
      tableBody.lastElementChild.remove();
      break;

    case 'append-column button':
      countColums++;

      [...tableBody.children]
        .forEach(row => row.append(row.lastElementChild.cloneNode(true)));
      break;

    case 'remove-column button':
      countColums--;

      [...tableBody.children]
        .forEach(row => row.lastElementChild.remove());
      break;

    default:
      break;
  }

  buttonToAddRow.disabled = countRows >= maxLength;
  buttonToRemoveRow.disabled = countRows <= minLength;
  buttonToAddColumn.disabled = countColums >= maxLength;
  buttonToRemoveColumn.disabled = countColums <= minLength;
});
