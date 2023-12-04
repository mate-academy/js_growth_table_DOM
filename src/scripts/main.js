'use strict';

const TABLE_MAX_LENGTH = 10;
const TABLE_MIN_LENGTH = 2;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field').children[0];
const rows = table.getElementsByTagName('tr');
const columns = rows[0].getElementsByTagName('td');

appendRowButton.addEventListener('click', () => {
  table.append(rows[0].cloneNode(true));
  isButtonDiisabled();
});

removeRowButton.addEventListener('click', () => {
  rows[rows.length - 1].remove();
  isButtonDiisabled();
});

appendColumnButton.addEventListener('click', () => {
  [...rows].forEach(row => {
    row.append(columns[0].cloneNode(true));
  });
  isButtonDiisabled();
});

removeColumnButton.addEventListener('click', () => {
  [...rows].forEach(row => {
    row.children[columns.length - 1].remove();
  });
  isButtonDiisabled();
});

function isButtonDiisabled() {
  appendRowButton.disabled = rows.length >= TABLE_MAX_LENGTH;
  removeRowButton.disabled = rows.length <= TABLE_MIN_LENGTH;
  appendColumnButton.disabled = columns.length >= TABLE_MAX_LENGTH;
  removeColumnButton.disabled = columns.length <= TABLE_MIN_LENGTH;
};
