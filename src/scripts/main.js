'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const magicButton = document.querySelector('.container');

magicButton.addEventListener('click', (e) => {
  const addRowButton = e.target.classList.contains('append-row');
  const removeRowButton = e.target.classList.contains('remove-row');
  const addColumnButton = e.target.classList.contains('append-column');
  const removeColumnButton = e.target.classList.contains('remove-column');

  if (addRowButton) {
    const list = document.querySelector('.field');
    const row = document.createElement('tr');
    const count = document.querySelector('tr').children.length;

    for (let i = 0; i < count; i++) {
      const td = document.createElement('td');

      row.append(td);
    }
    list.append(row);
  }

  if (removeRowButton) {
    const tr = document.querySelectorAll('tr');

    tr[tr.length - 1].remove();
  }

  if (addColumnButton) {
    [...document.querySelectorAll('tr')].forEach(item => {
      item.append(document.createElement('td'));
    });
  }

  if (removeColumnButton) {
    [...document.querySelectorAll('tr')].forEach(item => {
      item.lastChild.remove();
    });
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
