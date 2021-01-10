'use strict';

const wholeField = document.querySelector('.container');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const moveField = document.querySelector('tbody');

wholeField.addEventListener('click', (e) => {
  if (e.target.className === 'append-row button') {
    const copy = moveField.children[0].cloneNode(true);

    if (moveField.children.length < 10) {
      moveField.append(copy);
    }

    if (moveField.children.length > 2) {
      delRow.disabled = false;
    }

    if (moveField.children.length >= 10) {
      addRow.disabled = true;
    }
  }

  if (e.target.className === 'remove-row button') {
    moveField.children[0].remove();

    if (moveField.children.length < 10) {
      addRow.disabled = false;
    }

    if (moveField.children.length <= 2) {
      delRow.disabled = true;
    }
  }

  if (e.target.className === 'append-column button') {
    for (const item of moveField.children) {
      const copy = item.children[0].cloneNode(true);

      if (item.children.length < 10) {
        item.append(copy);
      }

      if (item.children.length > 2) {
        delColumn.disabled = false;
      }

      if (item.children.length >= 10) {
        addColumn.disabled = true;
      }
    }
  }

  if (e.target.className === 'remove-column button') {
    for (const item of moveField.children) {
      item.children[0].remove();

      if (item.children.length < 10) {
        addColumn.disabled = false;
      }

      if (item.children.length <= 2) {
        delColumn.disabled = true;
      }
    }
  }
});
