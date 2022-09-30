'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field').childNodes[1];

appendRow.addEventListener('click', () => {
  const newRow = table.children[0].cloneNode(true);

  removeRow.removeAttribute('disabled');
  table.append(newRow);

  if (table.children.length === 10) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  appendRow.removeAttribute('disabled');
  table.children[0].remove();

  if (table.children.length === 2) {
    removeRow.setAttribute('disabled', true);
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.removeAttribute('disabled');

  [...table.children].forEach(row => {
    const cell = row.children[0].cloneNode(true);

    row.append(cell);

    if (row.children.length === 10) {
      appendColumn.setAttribute('disabled', true);
    }
  });
});

removeColumn.addEventListener('click', () => {
  appendColumn.removeAttribute('disabled');

  [...table.children].forEach(row => {
    row.children[0].remove();

    if (row.children.length === 2) {
      removeColumn.setAttribute('disabled', true);
    }
  });
});
