'use strict';

const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');

addRow.addEventListener('click', function() {
  const tr = document.createElement('tr');
  const tableRow = tableBody.lastElementChild;

  for (let i = 0; i < tableRow.childElementCount; i++) {
    tr.append(document.createElement('td'));
  }

  tableBody.append(tr);

  if (tableBody.children.length > 2) {
    remRow.removeAttribute('disabled');
  }

  if (tableBody.children.length >= 10) {
    addRow.setAttribute('disabled', 'disabled');
  }
});

remRow.addEventListener('click', function() {
  tableBody.removeChild(tableBody.lastElementChild);
  addRow.removeAttribute('disabled');

  if (tableBody.children.length <= 2) {
    remRow.setAttribute('disabled', 'disabled');
  }
});

addCol.addEventListener('click', function() {
  for (let i = 0; i < tableBody.children.length; i++) {
    const td = document.createElement('td');

    tableBody.children[i].append(td);
  }

  if (tableBody.firstChild.children.length > 2) {
    remCol.removeAttribute('disabled');
  }

  if (tableBody.firstChild.children.length >= 10) {
    addCol.setAttribute('disabled', 'disabled');
  }
});

remCol.addEventListener('click', function() {
  for (let i = 0; i < tableBody.children.length; i++) {
    tableBody.children[i].removeChild(tableBody.children[i].lastElementChild);
  }

  addCol.removeAttribute('disabled');

  if (tableBody.firstChild.children.length <= 2) {
    remCol.setAttribute('disabled', 'disabled');
  }
});
