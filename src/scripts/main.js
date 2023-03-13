'use strict';

const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');
const maxRange = 10;
const minRange = 2;

container.addEventListener('click', e => {
  const tbody = document.querySelector('.field').firstElementChild;
  const columnCount = tbody.children[0].children.length;

  switch (e.target.className) {
    case 'append-row button':
      const newRow = document.createElement('tr');

      for (let i = 0; i < columnCount; i++) {
        newRow.append(document.createElement('td'));
      }

      tbody.append(newRow);

      break;

    case 'remove-row button':
      tbody.lastElementChild.remove();

      break;

    case 'append-column button':
      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].append(document.createElement('td'));
      }

      break;

    case 'remove-column button':
      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].lastElementChild.remove();
      }

      break;

    default:
      return;
  }

  appendRowButton.disabled = tbody.children.length >= maxRange;
  removeRowButton.disabled = tbody.children.length <= minRange;
  appendColumnButton.disabled = tbody.children[0].children.length >= maxRange;
  removeColumnButton.disabled = tbody.children[0].children.length <= minRange;
});
