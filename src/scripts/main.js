'use strict';

const fieldBody = document.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row.button');
const removeRow = document.querySelector('.remove-row.button');
const appendColumn = document.querySelector('.append-column.button');
const removeColumn = document.querySelector('.remove-column.button');

const minLength = 2;
const maxLength = 10;

let countRows = document.querySelectorAll('tr').length;
let countColumns = document.querySelectorAll('tr')[0].children.length;

appendRow.addEventListener('click', () => {
  fieldBody.append(fieldBody.lastElementChild.cloneNode(true));

  countRows++;

  appendRow.disabled = countRows >= maxLength;
  removeRow.disabled = countRows <= minLength;
});

removeRow.addEventListener('click', () => {
  fieldBody.lastElementChild.remove();

  countRows--;

  appendRow.disabled = countRows >= maxLength;
  removeRow.disabled = countRows <= minLength;
});

appendColumn.addEventListener('click', () => {
  [...fieldBody.children]
    .forEach((row) => row.append(row.lastElementChild.cloneNode(true)));

  countColumns++;

  appendColumn.disabled = countColumns >= maxLength;
  removeColumn.disabled = countColumns <= minLength;
});

removeColumn.addEventListener('click', () => {
  [...fieldBody.children]
    .forEach((row) => row.lastElementChild.remove());

  countColumns--;

  appendColumn.disabled = countColumns >= maxLength;
  removeColumn.disabled = countColumns <= minLength;
});
