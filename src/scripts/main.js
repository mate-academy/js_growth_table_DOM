'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

let rowsCount = table.rows.length;
let columnsCount = table.rows[0].cells.length;

function updateButtons() {
  if (rowsCount >= 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }

  if (columnsCount <= 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }

  if (rowsCount <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (columnsCount >= 10) {
    appendColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }
}

updateButtons();

appendRowButton.addEventListener('click', (e) => {
  if (rowsCount < 10) {
    const row = table.rows[0].cloneNode(true);

    table.tBodies[0].appendChild(row);
    rowsCount++;
  }

  updateButtons();
});

removeRowButton.addEventListener('click', (e) => {
  if (rowsCount > 2) {
    table.rows[rowsCount - 1].remove();

    rowsCount--;
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', (e) => {
  if (columnsCount > 2) {
    Array.from(table.rows).forEach((row) => {
      row.lastElementChild.remove();
    });

    columnsCount--;
  }

  updateButtons();
});

appendColumnButton.addEventListener('click', (e) => {
  if (columnsCount < 10) {
    Array.from(table.rows).forEach((row) => {
      const td = document.createElement('td');

      td.textContent = '';

      row.appendChild(td);
    });

    columnsCount++;
  }

  updateButtons();
});
