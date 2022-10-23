'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

appendRow.addEventListener('click', e => {
  table.append(table.firstElementChild.cloneNode(true));

  if (table.children.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  table.lastElementChild.remove();

  if (table.children.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.append(el.lastElementChild.cloneNode(true));
  });

  if (table.firstChild.children.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.lastElementChild.remove();
  });

  if (table.firstChild.children.length <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
