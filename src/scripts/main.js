'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const magicButton = document.querySelector('.container');

magicButton.addEventListener('click', (e) => {
  switch (e.target.classList[0]) {
    case 'append-row':
      const list = document.querySelector('tbody');
      const row = document.createElement('tr');
      const count = document.querySelector('tr').children.length;

      for (let i = 0; i < count; i++) {
        const td = document.createElement('td');

        row.append(td);
      }
      list.append(row);

      break;

    case 'remove-row':
      const tr = document.querySelectorAll('tr');

      tr[tr.length - 1].remove();

      break;

    case 'append-column':
      [...document.querySelectorAll('tr')].forEach(item => {
        item.append(document.createElement('td'));
      });

      break;

    case 'remove-column':
      [...document.querySelectorAll('tr')].forEach(item => {
        item.children[item.children.length - 1].remove();
      });
      break;
  }

  addRow.disabled = (document.querySelectorAll('tr').length > 9)
    ? true
    : (document.querySelectorAll('tr').length > 2)
      ? false
      : null;

  removeRow.disabled = (document.querySelectorAll('tr').length > 2)
    ? false
    : (document.querySelectorAll('tr').length < 3)
      ? true
      : null;

  addColumn.disabled = (document.querySelector('tr').children.length > 9)
    ? true
    : (document.querySelector('tr').children.length > 2)
      ? false
      : null;

  removeColumn.disabled = (document.querySelector('tr').children.length > 2)
    ? false
    : (document.querySelector('tr').children.length < 3)
      ? true
      : null;
});
