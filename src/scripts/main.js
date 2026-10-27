'use strict';

const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const field = document.querySelector('.field');

const MAX_SIZE = 10;
const MIN_SIZE = 2;

const addColumnHandler = () => {
  if (field.rows[0].cells.length >= MAX_SIZE) {
    return;
  }

  const rows = Array.from(field.rows);

  rows.forEach((row) => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);
  });

  updateButtons();
};

const removeColumnHandler = () => {
  if (field.rows[0].cells.length <= MIN_SIZE) {
    return;
  }

  const columns = Array.from(field.rows);

  columns.forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });

  updateButtons();
};

const addRowHandler = () => {
  if (field.rows.length >= MAX_SIZE) {
    return;
  }

  const newRow = field.querySelector('tr').cloneNode(true);

  field.tBodies[0].appendChild(newRow);

  updateButtons();
};

const removeRowHandler = () => {
  if (field.rows.length <= MIN_SIZE) {
    return;
  }

  const rows = Array.from(field.rows);

  rows[rows.length - 1].remove();

  updateButtons();
};

function updateButtons() {
  const columns = field.rows[0].cells.length;
  const rows = field.rows.length;

  if (columns >= MAX_SIZE) {
    addColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }

  if (rows >= MAX_SIZE) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }

  if (columns <= MIN_SIZE) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (rows <= MIN_SIZE) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
}

addColumn.addEventListener('click', addColumnHandler);
removeColumn.addEventListener('click', removeColumnHandler);
addRow.addEventListener('click', addRowHandler);
removeRow.addEventListener('click', removeRowHandler);
