'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  const list = document.querySelector('.field');
  const row = document.createElement('tr');
  const count = document.querySelector('tr').children.length;

  for (let i = 0; i < count; i++) {
    const td = document.createElement('td');

    row.append(td);
  }
  list.append(row);

  if (document.querySelectorAll('tr').length > 2) {
    removeRow.disabled = false;
  }

  if (document.querySelectorAll('tr').length > 9) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  tr[tr.length - 1].remove();

  if (document.querySelectorAll('tr').length > 2) {
    addRow.disabled = false;
  }

  if (document.querySelectorAll('tr').length < 3) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  [...document.querySelectorAll('tr')].forEach(item => {
    item.append(document.createElement('td'));
  });

  if (document.querySelector('tr').children.length > 2) {
    removeColumn.disabled = false;
  }

  if (document.querySelector('tr').children.length > 9) {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  [...document.querySelectorAll('tr')].forEach(item => {
    item.lastChild.remove();
  });

  if (document.querySelector('tr').children.length > 2) {
    addColumn.disabled = false;
  }

  if (document.querySelector('tr').children.length < 3) {
    removeColumn.disabled = true;
  }
});
