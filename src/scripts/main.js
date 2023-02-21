'use strict';

const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');
const field = document.querySelector('tbody');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  field.append(field.firstElementChild.cloneNode(true));

  if (field.children.length >= max) {
    appendRow.disabled = true;
  }

  if (removeRow.disabled) {
    removeRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  for (const el of field.children) {
    el.append(el.lastElementChild.cloneNode(true));
  }

  const rows = field.querySelectorAll('td').length / field.rows.length;

  if (rows >= max) {
    appendColumn.disabled = true;
  }

  if (removeColumn.disabled) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const el of field.querySelectorAll('tr')) {
    el.lastElementChild.remove();
  }

  const rows = field.querySelectorAll('td').length / field.rows.length;

  if (rows <= min) {
    removeColumn.disabled = true;
  }

  if (appendColumn.disabled) {
    appendColumn.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  field.lastElementChild.remove();

  if (field.children.length <= min) {
    removeRow.disabled = true;
  }

  if (appendRow.disabled) {
    appendRow.disabled = false;
  }
});
