'use strict';

const tBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 9;
const min = 2;

appendRow.addEventListener('click', () => {
  tBody.append(tBody.lastElementChild.cloneNode(true));

  if (tBody.children.length > max) {
    appendRow.disabled = true;
  }

  if (tBody.children.length > min) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tBody.lastElementChild.remove();

  if (tBody.children.length === max) {
    appendRow.disabled = false;
  }

  if (tBody.children.length === min) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  for (const element of [...tr]) {
    element.children[1].after(element.children[1].cloneNode(true));

    if (element.children.length > max) {
      appendColumn.disabled = true;
    }

    if (element.children.length > min) {
      removeColumn.disabled = false;
    }
  }
});

removeColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  for (const element of [...tr]) {
    element.children[1].remove();

    if (element.children.length === max) {
      appendColumn.disabled = false;
    }

    if (element.children.length === min) {
      removeColumn.disabled = true;
    }
  }
});
