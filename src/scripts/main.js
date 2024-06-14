'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const field = document.querySelector('.field tbody');

appendColumnButton.addEventListener('click', (e) => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length > 0 && row.children.length < 10) {
      row.prepend(row.lastElementChild.cloneNode(true));
    }
  });

  const updatedRows = field.querySelectorAll('tr');

  if (updatedRows[0].children.length === 10) {
    appendColumnButton.disabled = true;
  }

  if (updatedRows[0].children.length > 2) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length > 0 && row.children.length > 2) {
      row.lastElementChild.remove();
    }
  });

  const updatedRows = field.querySelectorAll('tr');

  if (updatedRows[0].children.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (updatedRows[0].children.length < 10) {
    appendColumnButton.disabled = false;
  }
});

appendRowButton.addEventListener('click', (e) => {
  const rows = field.querySelectorAll('tr');
  const lastRow = field.lastElementChild;

  if (rows.length < 10) {
    field.prepend(lastRow.cloneNode(true));
  }

  const updatedRows = field.querySelectorAll('tr');

  if (updatedRows.length === 10) {
    appendRowButton.disabled = true;
  }

  if (updatedRows.length > 2) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  const rows = field.querySelectorAll('tr');
  const lastRow = field.lastElementChild;

  if (rows.length > 2) {
    lastRow.remove();
  }

  const updatedRows = field.querySelectorAll('tr');

  if (updatedRows.length === 2) {
    removeRowButton.disabled = true;
  }

  if (updatedRows.length < 10) {
    appendRowButton.disabled = false;
  }
});
