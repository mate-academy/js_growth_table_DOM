'use strict';

const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = container.querySelector('table').firstElementChild;
const rows = document.getElementsByTagName('tr');

appendRow.addEventListener('click', () => {
  if (rows.length >= 9) {
    appendRow.disabled = true;
  }
  field.append(field.firstElementChild.cloneNode(true));
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  if (rows.length <= 3) {
    removeRow.disabled = true;
  }
  field.firstElementChild.remove();
  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  for (const child of field.children) {
    child.append(field.children[0].firstElementChild.cloneNode(true));
  };

  if (rows[0].children.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  for (const child of field.children) {
    child.firstElementChild.remove();
  };

  if (rows[0].children.length <= 2) {
    removeColumn.disabled = true;
  }
  appendColumn.disabled = false;
});
