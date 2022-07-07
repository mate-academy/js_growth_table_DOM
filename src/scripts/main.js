'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  switch (button) {
    case appendRow:
      field.append(field.children[0].cloneNode(true));
      break;
    case removeRow:
      field.firstChild.remove();
      break;
    case appendColumn:
      for (const child of field.children) {
        child.append(field.children[0].children[0].cloneNode(true));
      }
      break;
    case removeColumn:
      for (const child of field.children) {
        child.firstChild.remove();
      }
      break;
  }

  appendRow.toggleAttribute('disabled',
    field.children.length === 10);

  removeRow.toggleAttribute('disabled',
    field.children.length === 2);

  appendColumn.toggleAttribute('disabled',
    field.children[0].children.length === 10);

  removeColumn.toggleAttribute('disabled',
    field.children[0].children.length === 2);
});
