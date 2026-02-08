'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

let rows = 4;
let columns = 4;

const table = document.querySelector('.container');
const field = table.querySelector('.field');

const appendRowButton = table.querySelector('.append-row');
const removeRowButton = table.querySelector('.remove-row');
const appendColumnButton = table.querySelector('.append-column');
const removeColumnButton = table.querySelector('.remove-column');

/**
 * Повертає tbody.
 * Якщо його ще нема — створює і додає в таблицю.
 */
const getTbody = () => {
  if (field.tBodies.length) {
    return field.tBodies[0];
  }

  return field.appendChild(document.createElement('tbody'));
};

/**
 * Початковий рендер (ОДИН раз)
 */
const renderTable = () => {
  const tbody = getTbody();

  tbody.innerHTML = '';

  for (let r = 0; r < rows; r++) {
    const tr = document.createElement('tr');

    for (let c = 0; c < columns; c++) {
      tr.appendChild(document.createElement('td'));
    }

    tbody.appendChild(tr);
  }
};

/**
 * Керує станом кнопок
 */
const updateButtons = () => {
  appendRowButton.disabled = rows === MAX_SIZE;
  removeRowButton.disabled = rows === MIN_SIZE;
  appendColumnButton.disabled = columns === MAX_SIZE;
  removeColumnButton.disabled = columns === MIN_SIZE;
};

/* ---------- INIT ---------- */

renderTable();
updateButtons();

/* ---------- ROWS ---------- */

appendRowButton.addEventListener('click', () => {
  if (rows === MAX_SIZE) {
    return;
  }

  const tbody = getTbody();
  const tr = document.createElement('tr');

  for (let c = 0; c < columns; c++) {
    tr.appendChild(document.createElement('td'));
  }

  tbody.appendChild(tr);
  rows++;

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (rows === MIN_SIZE) {
    return;
  }

  const tbody = getTbody();

  tbody.lastElementChild.remove();
  rows--;

  updateButtons();
});

/* ---------- COLUMNS ---------- */

appendColumnButton.addEventListener('click', () => {
  if (columns === MAX_SIZE) {
    return;
  }

  const tbody = getTbody();

  for (const row of tbody.rows) {
    row.appendChild(document.createElement('td'));
  }

  columns++;
  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (columns === MIN_SIZE) {
    return;
  }

  const tbody = getTbody();

  for (const row of tbody.rows) {
    row.lastElementChild.remove();
  }

  columns--;
  updateButtons();
});
