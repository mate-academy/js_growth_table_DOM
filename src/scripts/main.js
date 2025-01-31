'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minSize = 2;
const maxSize = 10;

const disableRowButtons = () => {
  if (table.rows.length <= minSize) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (table.rows.length >= maxSize) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
};

const disableColumnButtons = () => {
  if (table.rows[0].cells.length <= minSize) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (table.rows[0].cells.length >= maxSize) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
};

appendRow.addEventListener('click', () => {
  if (table.rows.length >= maxSize) {
    return;
  }

  const newRow = table.rows[0].cloneNode(true);

  table.tBodies[0].append(newRow);

  disableRowButtons();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= minSize) {
    return;
  }

  table.rows[table.rows.length - 1].remove();

  disableRowButtons();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= maxSize) {
    return;
  }

  [...table.rows].forEach((row) => {
    const newColumn = row.cells[0].cloneNode(true);

    row.append(newColumn);
  });

  disableColumnButtons();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= minSize) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });

  disableColumnButtons();
});
