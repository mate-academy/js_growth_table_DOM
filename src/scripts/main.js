'use strict';

const field = document.body.querySelector('.field');
const fieldBody = field.tBodies[0];
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

appendRowButton.addEventListener('click', e => {
  fieldBody.append(fieldBody.lastElementChild.cloneNode(true));

  if (fieldBody.row.length >= maxLength) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', e => {
  fieldBody.lastElementChild.remove();

  if (fieldBody.row.length <= minLength) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', e => {
  for (const row of fieldBody.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (fieldBody.rows[0].cells.length >= maxLength) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', e => {
  for (const row of fieldBody.rows) {
    row.lastElementChild.remove();
  }

  if (fieldBody.rows[0].cells.length <= 2) {
    removeColumnButton.disabled = true;
  }

  appendColumnButton.disabled = false;
});
