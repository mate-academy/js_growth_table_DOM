'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const tableBody = document.querySelector('.field').tBodies[0];

appendRow.addEventListener('click', () => {
  tableBody.append(tableBody.rows[tableBody.rows.length - 1].cloneNode(true));

  removeRow.disabled = false;

  if (tableBody.rows.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  tableBody.rows[tableBody.rows.length - 1].remove();

  appendRow.disabled = false;

  if (tableBody.rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendCol.addEventListener('click', () => {
  [...tableBody.rows].forEach((row) => {
    row.append(row.children[row.children.length - 1].cloneNode(true));
  });

  removeCol.disabled = false;

  if (tableBody.rows[0].children.length === 10) {
    appendCol.disabled = true;
  }
});

removeCol.addEventListener('click', () => {
  [...tableBody.rows].forEach((row) => {
    row.children[row.children.length - 1].remove();
  });

  appendCol.disabled = false;

  if (tableBody.rows[0].children.length === 2) {
    removeCol.disabled = true;
  }
});
