'use strict';

const appendRow = document.body.querySelector('.append-row');
const removeRow = document.body.querySelector('.remove-row');
const appendColumn = document.body.querySelector('.append-column');
const removeColumn = document.body.querySelector('.remove-column');
const table = document.body.querySelector('.field');

const clickAppendRowHandler = () => {
  const totalRows = table.rows.length;

  if (totalRows === 10) {
    appendRow.disabled = true;

    return;
  }

  removeRow.disabled = false;
  appendRow.disabled = false;

  table
    .append(table.rows[0].cloneNode(true));
};

const clickRemoveRowHandler = () => {
  const totalRows = table.rows.length;

  if (totalRows === 2) {
    removeRow.disabled = true;

    return;
  }

  removeRow.disabled = false;
  appendRow.disabled = false;

  table
    .rows[totalRows - 1].remove();
};

const clickAppendColumnHandler = () => {
  const totalColumns = table.rows[0].cells.length;

  if (totalColumns === 10) {
    appendColumn.disabled = true;

    return;
  }

  removeColumn.disabled = false;
  appendColumn.disabled = false;

  const lastColumn = [
    ...table.rows]
    .map(row => row.cells[row.cells.length - 1].cloneNode());

  [...table.rows]
    .map((row, index) => row.appendChild(lastColumn[index]));
};

const clickRemoveColumnHandler = () => {
  const totalColumns = table.rows[0].cells.length;

  if (totalColumns === 2) {
    removeColumn.disabled = true;

    return;
  }

  removeColumn.disabled = false;
  appendColumn.disabled = false;

  [...table.rows]
    .map(row => row.cells[row.cells.length - 1].remove());
};

appendRow.addEventListener('click', clickAppendRowHandler);
removeRow.addEventListener('click', clickRemoveRowHandler);
appendColumn.addEventListener('click', clickAppendColumnHandler);
removeColumn.addEventListener('click', clickRemoveColumnHandler);
