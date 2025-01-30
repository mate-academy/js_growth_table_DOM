'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const disableRowButtons = () => {
  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
};

const disableColumnButtons = () => {
  if (table.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (table.rows[0].cells.length >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
};

appendRow.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.rows[0].cloneNode(true);

  table.append(newRow);

  disableRowButtons();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.rows[table.rows.length - 1].remove();

  disableRowButtons();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  [...table.rows].forEach((row) => {
    const newColumn = row.cells[0].cloneNode(true);

    row.append(newColumn);
  });

  disableColumnButtons();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });

  disableColumnButtons();
});
