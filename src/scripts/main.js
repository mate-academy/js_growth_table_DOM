'use strict';

const blocks = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.body.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'append-row button':
      if (blocks.children.length < 10) {
        blocks.append(blocks.firstChild.cloneNode(true));

        if (blocks.children.length === 10) {
          appendRow.setAttribute('disabled', 'disabled');
        }

        if (blocks.children.length > 2) {
          removeRow.removeAttribute('disabled');
        }
      }
      break;

    case 'remove-row button':
      if (blocks.children.length > 2) {
        blocks.lastElementChild.remove();

        if (blocks.children.length === 2) {
          removeRow.setAttribute('disabled', 'disabled');
        }

        if (blocks.children.length < 10) {
          appendRow.removeAttribute('disabled');
        }
      }
      break;

    case 'append-column button':
      for (const child of blocks.children) {
        if (child.children.length < 10) {
          child.append(child.firstElementChild.cloneNode(true));

          if (child.children.length === 10) {
            appendColumn.setAttribute('disabled', 'disabled');
          }

          if (child.children.length > 2) {
            removeColumn.removeAttribute('disabled');
          }
        }
      }
      break;

    case 'remove-column button':
      for (const child of blocks.children) {
        if (child.children.length > 2) {
          child.lastElementChild.remove();

          if (child.children.length === 2) {
            removeColumn.setAttribute('disabled', 'disabled');
          }

          if (child.children.length < 10) {
            appendColumn.removeAttribute('disabled');
          }
        }
      }
      break;
  }
});
