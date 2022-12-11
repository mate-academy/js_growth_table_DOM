'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');
const getAllRows = document.getElementsByTagName('tr');

appendRow.addEventListener('click', e => {
  tableBody.append(tableBody.firstChild.cloneNode(true));

  if (getAllRows.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  tableBody.lastElementChild.remove();

  if (getAllRows.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', e => {
  for (const element of getAllRows) {
    element.append(getAllRows[0].lastElementChild.cloneNode(true));
  };

  if (getAllRows[0].children.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  for (const element of getAllRows) {
    element.lastElementChild.remove();
  };

  if (getAllRows[0].children.length <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
