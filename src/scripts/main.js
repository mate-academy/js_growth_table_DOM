'use strict';

const field = document.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', e => {
  field.append(field.children[0].cloneNode(true));

  checkButton();
});

removeRow.addEventListener('click', e => {
  field.firstChild.remove();

  checkButton();
});

appendColumn.addEventListener('click', e => {
  for (const child of field.children) {
    child.append(field.children[0].children[0].cloneNode(true));
  }

  checkButton();
});

removeColumn.addEventListener('click', e => {
  for (const child of field.children) {
    child.firstChild.remove();
  }

  checkButton();
});

function checkButton() {
  appendRow.toggleAttribute('disabled',
    field.children.length === 10);

  removeRow.toggleAttribute('disabled',
    field.children.length === 2);

  appendColumn.toggleAttribute('disabled',
    field.children[0].children.length === 10);

  removeColumn.toggleAttribute('disabled',
    field.children[0].children.length === 2);
}
