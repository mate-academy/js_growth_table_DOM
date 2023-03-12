'use strict';

const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const tbody = document.querySelector('.field').firstElementChild;
  const rowCount = tbody.children.length;
  const columnCount = tbody.children[0].children.length;

  switch (e.target.className) {
    case 'append-row button':
      const newRow = document.createElement('tr');

      for (let i = 0; i < columnCount; i++) {
        newRow.append(document.createElement('td'));
      }

      tbody.append(newRow);

      if (rowCount >= 9) {
        appendRowButton.disabled = true;
      }

      if (rowCount >= 2) {
        removeRowButton.disabled = false;
      }
      break;

    case 'remove-row button':
      if (rowCount <= 10) {
        appendRowButton.disabled = false;
      }

      tbody.lastElementChild.remove();

      if (rowCount <= 3) {
        removeRowButton.disabled = true;
      }
      break;

    case 'append-column button':
      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].append(document.createElement('td'));
      }

      if (columnCount >= 9) {
        appendColumnButton.disabled = true;
      }

      if (columnCount >= 2) {
        removeColumnButton.disabled = false;
      }
      break;

    case 'remove-column button':
      if (columnCount <= 10) {
        appendColumnButton.disabled = false;
      }

      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].lastElementChild.remove();
      }

      if (columnCount <= 3) {
        removeColumnButton.disabled = true;
      }
      break;

    default:
      break;
  }
});
