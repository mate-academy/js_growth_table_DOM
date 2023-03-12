'use strict';

const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

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
      appendRowButton.disabled = tbody.children.length >= 10;

      break;

    case 'remove-row button':
      tbody.lastElementChild.remove();
      removeRowButton.disabled = tbody.children.length <= 2;

      break;

    case 'append-column button':
      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].append(document.createElement('td'));
      }

      appendColumnButton.disabled = tbody.children[0].children.length >= 10;
      break;

    case 'remove-column button':
      for (let i = 0; i < tbody.children.length; i++) {
        tbody.children[i].lastElementChild.remove();
      }

      removeColumnButton.disabled = tbody.children[0].children.length <= 2;
      break;

    default:
      break;
  }
});
