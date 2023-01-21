'use strict';

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const tableBody = document.querySelector('tbody');

appendColumn.addEventListener('click', (e) => {
  [...tableBody.children].forEach(elem => {
    elem.append(elem.lastElementChild.cloneNode(true));
  });

  if (tableBody.firstChild.children.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', (e) => {
  [...tableBody.children].forEach(elem => {
    elem.lastElementChild.remove();
  });

  if (tableBody.firstChild.children.length <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});

appendRow.addEventListener('click', (e) => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  if (tableBody.children.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});
