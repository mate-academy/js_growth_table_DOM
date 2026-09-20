'use strict';

const table = document.querySelector('table tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.append(document.createElement('td'));
    }

    table.append(newRow);
  }

  if (table.rows.length === 10) {
    appendRowButton.disabled = true;
  }

  if (removeRowButton.hasAttribute('disabled')) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.querySelector('tr:last-child').remove();
  }

  if (table.rows.length === 2) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }

  if (appendRowButton.hasAttribute('disabled')) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    [...table.rows].forEach((element) => {
      element.append(document.createElement('td'));
    });
  }

  if (table.rows[0].cells.length === 10) {
    appendColumnButton.disabled = true;
  }

  if (removeColumnButton.hasAttribute('disabled')) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    [...table.rows].forEach((element) => {
      element.querySelector('td:last-child').remove();
    });
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (appendColumnButton.hasAttribute('disabled')) {
    appendColumnButton.disabled = false;
  }
});
