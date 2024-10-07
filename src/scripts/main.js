'use strict';

const MAX_LENGTH = 10;
const MIN_LENGTH = 2;

const fieldBody = document.querySelector('.field tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
let rowCount = fieldBody.rows.length;
let columnCount = fieldBody.rows[0].children.length;

function updateButtons() {
  rowCount = fieldBody.rows.length;
  columnCount = fieldBody.rows[0].children.length;

  if (rowCount === MAX_LENGTH) {
    appendRowButton.setAttribute('disabled', true);
  } else {
    appendRowButton.removeAttribute('disabled');
  }

  if (rowCount === MIN_LENGTH) {
    removeRowButton.setAttribute('disabled', true);
  } else {
    removeRowButton.removeAttribute('disabled');
  }

  if (columnCount === MAX_LENGTH) {
    appendColumnButton.setAttribute('disabled', true);
  } else {
    appendColumnButton.removeAttribute('disabled');
  }

  if (columnCount === MIN_LENGTH) {
    removeColumnButton.setAttribute('disabled', true);
  } else {
    removeColumnButton.removeAttribute('disabled');
  }
}

appendRowButton.addEventListener('click', () => {
  if (rowCount < 10) {
    const newRow = fieldBody.rows[0].cloneNode(true);

    fieldBody.append(newRow);
    updateButtons();
  }
});

removeRowButton.addEventListener('click', () => {
  if (rowCount > 2) {
    fieldBody.rows[fieldBody.rows.length - 1].remove();

    updateButtons();
  }
});

appendColumnButton.addEventListener('click', () => {
  if (columnCount < 10) {
    [...fieldBody.rows].forEach((row) => {
      const column = document.createElement('td');

      row.append(column);
    });

    updateButtons();
  }
});

removeColumnButton.addEventListener('click', () => {
  if (columnCount > 2) {
    [...fieldBody.rows].forEach((row) => {
      row.lastElementChild.remove();
    });

    updateButtons();
  }
});
