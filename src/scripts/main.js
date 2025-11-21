'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const minSize = 2;
const maxSize = 10;

function updateButtons() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  if (rows >= maxSize) {
    appendRow.setAttribute('disabled', '');
  } else {
    appendRow.removeAttribute('disabled');
  }

  if (rows <= minSize) {
    removeRow.setAttribute('disabled', '');
  } else {
    removeRow.removeAttribute('disabled');
  }

  if (cols >= maxSize) {
    appendColumn.setAttribute('disabled', '');
  } else {
    appendColumn.removeAttribute('disabled');
  }

  if (cols <= minSize) {
    removeColumn.setAttribute('disabled', '');
  } else {
    removeColumn.removeAttribute('disabled');
  }
}

appendRow.addEventListener('click', () => {
  const cols = table.rows[0].cells.length;

  if (table.rows.length >= maxSize) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < cols; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  table.append(tr);
  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= minSize) {
    return;
  }

  table.rows[table.rows.length - 1].remove();
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  const rows = table.rows;

  if (rows[0].cells.length >= maxSize) {
    return;
  }

  for (let i = 0; i < rows.length; i++) {
    const td = document.createElement('td');

    rows[i].append(td);
  }
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= minSize) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[table.rows[i].cells.length - 1].remove();
  }
  updateButtons();
});
