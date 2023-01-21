'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const tableBody = document.querySelector('tbody');

const maxLength = 10;
const minLength = 2;

appendColumn.addEventListener('click', (e) => {
  [...tableBody.children].forEach(elem => {
    elem.append(elem.lastElementChild.cloneNode(true));
  });

  if (tableBody.firstChild.children.length >= maxLength) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', (e) => {
  [...tableBody.children].forEach(elem => {
    elem.lastElementChild.remove();
  });

  if (tableBody.firstChild.children.length <= minLength) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});

appendRow.addEventListener('click', (e) => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  if (tableBody.children.length >= maxLength) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length <= minLength) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});
