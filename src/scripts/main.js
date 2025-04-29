'use strict';

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const col = document.createElement('td');
const row = document.createElement('tr');
const maxVal = 10;
const minVal = 2;

appendRow.addEventListener('click', () => {
  const tableBody = document.querySelector('.field tbody');
  const newRow = row.cloneNode(true);

  for (let i = 0; i < tableBody.firstElementChild.children.length; i++) {
    if (tableBody.rows.length === maxVal) {
      return;
    }

    newRow.appendChild(col.cloneNode(true));
  }
  tableBody.appendChild(newRow);

  if (tableBody.children.length === maxVal) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const tableBody = document.querySelector('.field tbody');

  tableBody.removeChild(tableBody.lastElementChild);

  if (tableBody.children.length === minVal) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendCol.addEventListener('click', () => {
  const tableBody = document.querySelector('.field tbody');

  if (tableBody.rows[0].children.length === maxVal) {
    return;
  }

  Array.from(tableBody.children).forEach((tr) => {
    tr.appendChild(col.cloneNode(true));
  });

  if (tableBody.firstElementChild.children.length === maxVal) {
    appendCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
});

removeCol.addEventListener('click', () => {
  const tableBody = document.querySelector('.field tbody');

  Array.from(tableBody.children).forEach((tr) => {
    tr.removeChild(tr.lastElementChild);
  });

  if (tableBody.firstElementChild.children.length === minVal) {
    removeCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }
});
