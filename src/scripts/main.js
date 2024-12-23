'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const table = document.querySelector('.container .field tBody');

const appendRowButton = document.querySelector('.append-row.button');
const removeRowButton = document.querySelector('.remove-row.button');

const appendColumnButton = document.querySelector('.append-column.button');
const removeColumnButton = document.querySelector('.remove-column.button');

function checkButtons(
  count,
  firstButton,
  firstValue,
  secondButton,
  secondValue,
) {
  if (count === firstValue) {
    firstButton.disabled = true;
  }

  if (secondButton.disabled && count !== secondValue) {
    secondButton.disabled = false;
  }
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length < MAX_COUNT) {
    table.append(table.rows[table.rows.length - 1].cloneNode(true));
  }

  checkButtons(
    table.rows.length,
    appendRowButton,
    MAX_COUNT,
    removeRowButton,
    MIN_COUNT,
  );
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > MIN_COUNT) {
    table.rows[table.rows.length - 1].remove();
  }

  checkButtons(
    table.rows.length,
    removeRowButton,
    MIN_COUNT,
    appendRowButton,
    MAX_COUNT,
  );
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < MAX_COUNT) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].append(document.createElement('td'));
    }
  }

  checkButtons(
    table.rows[0].cells.length,
    appendColumnButton,
    MAX_COUNT,
    removeColumnButton,
    MIN_COUNT,
  );
});

removeColumnButton.addEventListener('click', () => {
  const lastCellIndex = table.rows[0].cells.length - 1;

  if (lastCellIndex > MIN_COUNT - 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[lastCellIndex].remove();
    }
  }

  checkButtons(
    table.rows[0].cells.length,
    removeColumnButton,
    MIN_COUNT,
    appendColumnButton,
    MAX_COUNT,
  );
});
