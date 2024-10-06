'use strict';

const MAX_LENGTH = 10;
const MIN_LENGTH = 2;

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
let rowCount = field.rows.length;
let columnCount = field.rows[0].children.length;

function updateButtons() {
  rowCount = field.rows.length;
  columnCount = field.rows[0].children.length;

  if (rowCount === MAX_LENGTH) {
    appendRowButton.setAttribute('disabled', true)
  } else {
    appendRowButton.removeAttribute('disabled');
  }

  if (rowCount === MIN_LENGTH) {
    removeRowButton.setAttribute('disabled', true)
  } else {
    removeRowButton.removeAttribute('disabled');
  }

  if (columnCount === MAX_LENGTH) {
    appendColumnButton.setAttribute('disabled', true)
  } else {
    appendColumnButton.removeAttribute('disabled');
  }

  if (columnCount === MIN_LENGTH) {
    removeColumnButton.setAttribute('disabled', true)
  } else {
    removeColumnButton.removeAttribute('disabled');
  }
}

appendRowButton.addEventListener('click', () => {
  field.append(field.rows[0].cloneNode(true));

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  field.rows[field.rows.length - 1].remove();

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  [...field.rows].forEach(row => {
    const column = document.createElement('td');
    row.append(column);
  });

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  [...field.rows].forEach(row => {
    row.lastElementChild.remove();
  });

  updateButtons();
});
