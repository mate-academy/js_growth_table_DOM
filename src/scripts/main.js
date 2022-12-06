'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('table').firstElementChild;
const rows = document.getElementsByTagName('tr');

appendRow.addEventListener('click', () => {
  field.append(field.firstElementChild.cloneNode(true));

  if (rows.length >= 10) {
    appendRow.disabled = true;
  }
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  field.firstElementChild.remove();

  if (rows.length <= 2) {
    removeRow.disabled = true;
  }

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
