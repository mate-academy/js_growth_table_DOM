'use strict';

const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const MAX_SIZE = 10;
const MIN_SIZE = 2;

appendRow.addEventListener('click', (e) => {
  const newRow = field.rows[0].cloneNode(true);

  field.append(newRow);

  if (field.rows.length === MAX_SIZE) {
    disableButton(e.currentTarget);
  }

  if (removeRow.hasAttribute('disabled') && field.rows.length > MIN_SIZE) {
    enableButton(removeRow);
  }
});

removeRow.addEventListener('click', (e) => {
  const rows = field.rows;

  rows[rows.length - 1].remove();

  if (field.rows.length === MIN_SIZE) {
    disableButton(e.currentTarget);
  }

  if (appendRow.hasAttribute('disabled') && field.rows.length < MAX_SIZE) {
    enableButton(appendRow);
  }
});

appendColumn.addEventListener('click', (e) => {
  const rows = field.rows;

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');

    rows[i].append(newCell);
  }

  if (rows[0].children.length === MAX_SIZE) {
    disableButton(e.currentTarget);
  }

  if (
    removeColumn.hasAttribute('disabled') &&
    rows[0].children.length > MIN_SIZE
  ) {
    enableButton(removeColumn);
  }
});

removeColumn.addEventListener('click', (e) => {
  const rows = field.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  if (rows[0].children.length === 2) {
    disableButton(e.currentTarget);
  }

  if (
    appendColumn.hasAttribute('disabled') &&
    rows[0].children.length < MAX_SIZE
  ) {
    enableButton(appendColumn);
  }
});

function disableButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}
