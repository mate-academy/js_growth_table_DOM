'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field tbody');

function checkButtons() {
  const numberOfRows = field.children.length;
  const numberOfColumns = field.children[0].children.length;

  numberOfRows <= 2
    ? removeRow.setAttribute('disabled', true)
    : removeRow.removeAttribute('disabled');

  numberOfRows >= 10
    ? appendRow.setAttribute('disabled', true)
    : appendRow.removeAttribute('disabled');

  numberOfColumns <= 2
    ? removeColumn.setAttribute('disabled', true)
    : removeColumn.removeAttribute('disabled');

  numberOfColumns >= 10
    ? appendColumn.setAttribute('disabled', true)
    : appendColumn.removeAttribute('disabled');
};

appendRow.addEventListener('click', () => {
  const newRow = field.children[0].cloneNode(true);

  field.append(newRow);
  checkButtons();
});

removeRow.addEventListener('click', () => {
  const row = field.children[0];

  row.remove();
  checkButtons();
});

appendColumn.addEventListener('click', () => {
  for (const row of field.children) {
    const newColumn = document.createElement('td');

    row.append(newColumn);
    checkButtons();
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of field.children) {
    row.lastElementChild.remove();
  }
  checkButtons();
});
