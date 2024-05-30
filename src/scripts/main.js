'use strict';

const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = table.rows[0].cloneNode(true);

    table.append(newRow);
  }

  if (table.rows.length >= 10) {
    addRowButton.disabled = true;
  }

  if (table.rows.length > 2) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.rows[0].remove();
  }

  if (table.rows.length <= 2) {
    removeRowButton.disabled = true;
  }

  if (table.rows.length < 10) {
    addRowButton.disabled = false;
  }
});

addColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = table.rows[i].cells[0].cloneNode();

      table.rows[i].append(newCell);
    }
  }

  if (table.rows[0].cells.length > 2) {
    removeColumnButton.disabled = false;
  }

  if (table.rows[0].cells.length >= 10) {
    addColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[0].remove();
    }
  }

  if (table.rows[0].cells.length <= 2) {
    removeColumnButton.disabled = true;
  }

  if (table.rows[0].cells.length < 10) {
    addColumnButton.disabled = false;
  }
});
