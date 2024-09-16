'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const field = document.querySelector('tbody');

container.addEventListener('click', (e) => {
  if (e.target === appendRow) {
    field.append(field.firstElementChild.cloneNode(true));

    if (field.children.length >= 10) {
      appendRow.disabled = true;
    }

    removeRow.disabled = false;
  }

  if (e.target === appendColumn) {
    [...field.children].forEach(el => {
      el.append(el.lastElementChild.cloneNode(true));
    });

    if (field.firstChild.children.length >= 10) {
      appendColumn.disabled = true;
    }

    removeColumn.disabled = false;
  }

  if (e.target === removeRow) {
    field.lastElementChild.remove();

    if (field.children.length <= 2) {
      removeRow.disabled = true;
    }

    appendRow.disabled = false;
  }

  if (e.target === removeColumn) {
    [...field.children].forEach(el => {
      el.lastElementChild.remove();
    });

    if (field.firstChild.children.length <= 2) {
      removeColumn.disabled = true;
    }

    appendColumn.disabled = false;
  }
});
