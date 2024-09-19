'use strict';

const MAX = 10;
const MIN = 2;

const body = document.querySelector('.field').tBodies[0];
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = body.rows.length;
  const columnsCount = body.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= MAX;
  removeRowButton.disabled = rowsCount <= MIN;
  appendColumnButton.disabled = columnsCount >= MAX;
  removeColumnButton.disabled = columnsCount <= MIN;
}

document.addEventListener('DOMContentLoaded', () => {
  appendRowButton.addEventListener('click', () => {
    const newRow = body.rows[0].cloneNode(true);

    if (body.rows.length < MAX) {
      body.appendChild(newRow);

      updateButtons();
    }
  });

  removeRowButton.addEventListener('click', () => {
    if (body.rows.length > MIN) {
      body.removeChild(body.lastElementChild);

      updateButtons();
    }
  });

  appendColumnButton.addEventListener('click', () => {
    if (body.rows[0].cells.length < MAX) {
      [...body.rows].forEach((row) => {
        row.insertCell();
      });

      updateButtons();
    }
  });

  removeColumnButton.addEventListener('click', () => {
    if (body.rows[0].cells.length > MIN) {
      [...body.rows].forEach((row) => {
        row.deleteCell(-1);
      });

      updateButtons();
    }
  });

  updateButtons();
});
