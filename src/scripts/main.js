'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field').firstElementChild;
const rows = table.children;
const MAXCOUNT = 10;
const MINCOUNT = 2;

appendRowButton.addEventListener('click', (e) => {
  if (rows.length >= MAXCOUNT - 1) {
    appendRowButton.setAttribute('disabled', 'disabled');
  }

  const newRow = rows[0].cloneNode(true);

  table.append(newRow);

  if (rows.length > MINCOUNT) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', (e) => {
  if (rows.length <= MINCOUNT + 1) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }

  const lastRow = table.lastElementChild;

  lastRow.remove();

  if (rows.length < MAXCOUNT) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', (e) => {
  if (rows[0].children.length >= MAXCOUNT - 1) {
    appendColumnButton.setAttribute('disabled', 'disabled');
  }

  [...rows].forEach((row) => {
    const newCell = row.firstElementChild.cloneNode(true);

    row.append(newCell);
  });

  if (rows[0].children.length > MINCOUNT) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', (e) => {
  if (rows[0].children.length <= MINCOUNT + 1) {
    removeColumnButton.setAttribute('disabled', 'disabled');
  }

  [...rows].forEach((row) => {
    const lastCell = row.lastElementChild;

    lastCell.remove();
  });

  if (rows[0].children.length < MAXCOUNT) {
    appendColumnButton.removeAttribute('disabled');
  }
});
