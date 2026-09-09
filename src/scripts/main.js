'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const tr = document.querySelector('tr');
const td = document.querySelector('td');

appendRow.addEventListener('click', () => {
  if (tr.parentNode.childElementCount === 10) {
    return;
  }

  const newRow = tr.cloneNode(true);

  tr.parentNode.appendChild(newRow);

  if (tr.parentNode.children.length === 10) {
    appendRow.disabled = true;
  }

  if (removeRow.disabled) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tr.parentNode.removeChild(tr.parentNode.lastElementChild);

  if (tr.parentNode.children.length === 2) {
    removeRow.disabled = true;
  }

  if (appendRow.disabled) {
    appendRow.disabled = false;
  }
});

appendCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length === 10) {
    return;
  }

  rows.forEach((row) => row.appendChild(td.cloneNode(true)));

  if (rows[0].children.length === 10) {
    appendCol.disabled = true;
  }

  if (removeCol.disabled) {
    removeCol.disabled = false;
  }
});

removeCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => row.removeChild(row.lastElementChild));

  if (rows[0].children.length === 2) {
    removeCol.disabled = true;
  }

  if (appendCol.disabled) {
    appendCol.disabled = false;
  }
});
