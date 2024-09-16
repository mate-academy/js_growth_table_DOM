'use strict';

const button = document.querySelectorAll('button');
const tableBody = document.querySelector('tbody');
const rows = tableBody.rows;

const removeColumnButton = document.querySelector('.remove-column');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const appendRowButton = document.querySelector('.append-row');

const maximum = 10;
const minimum = 2;

button.forEach(btn => btn.addEventListener('click', e => {
  if (e.target.classList.contains('append-column')) {
    [...rows].forEach(row => {
      row.insertCell(-1);
    });

    if (rows[0].cells.length === maximum) {
      appendColumnButton.disabled = true;
    }

    if (rows[0].cells.length > minimum) {
      removeColumnButton.disabled = false;
    }
  }

  if (e.target.classList.contains('append-row')) {
    rows[rows.length - 1].after(rows[rows.length - 1].cloneNode(true));

    if (rows.length === maximum) {
      appendRowButton.disabled = true;
    }

    if (rows.length < maximum) {
      removeRowButton.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-row') && rows.length > minimum) {
    tableBody.deleteRow(-1);

    if (rows.length === minimum) {
      removeRowButton.disabled = true;
    }

    if (rows.length < maximum) {
      appendRowButton.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-column')) {
    [...rows].forEach(row => {
      row.deleteCell(-1);
    });
  }

  if (rows[0].cells.length === minimum) {
    removeColumnButton.disabled = true;
  }

  if (rows[0].cells.length < maximum) {
    appendColumnButton.disabled = false;
  }
}));
