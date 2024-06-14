'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const body = document.querySelector('tbody');
const rows = document.querySelector('tbody').children;

appendRowButton.addEventListener('click', () => {
  if (removeRowButton.disabled) {
    removeRowButton.disabled = false;
  }

  body.append(body.lastElementChild.cloneNode(true));

  if (rows.length === 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  if (appendRowButton.disabled) {
    appendRowButton.disabled = false;
  }

  body.lastElementChild.remove();

  if (rows.length === 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  if (removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }

  [...rows].forEach((row) => {
    row.insertCell();
  });

  if (rows[0].children.length === 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (appendColumnButton.disabled) {
    appendColumnButton.disabled = false;
  }

  [...rows].forEach((row) => {
    row.deleteCell(row[row.length - 1]);
  });

  if (rows[0].children.length === 2) {
    removeColumnButton.disabled = true;
  }
});
