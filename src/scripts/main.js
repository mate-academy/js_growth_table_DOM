'use strict';

const refs = {
  appendRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),
  appendColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
  field: document.querySelector('.field'),
};

const isDisabledButton = () => {
  const MIN = 2;
  const MAX = 10;

  refs.appendRow.disabled = refs.field.rows.length >= MAX;
  refs.removeRow.disabled = refs.field.rows.length <= MIN;

  refs.appendColumn.disabled = refs.field.rows[0]?.cells.length >= MAX;
  refs.removeColumn.disabled = refs.field.rows[0]?.cells.length <= MIN;
};

refs.appendRow.addEventListener('click', () => {
  if (refs.field.rows.length === 10) {
    return;
  }

  const newRow = refs.field.rows[refs.field.rows.length - 1].cloneNode(true);

  refs.field.append(newRow);
  isDisabledButton();
});

refs.removeRow.addEventListener('click', () => {
  refs.field.deleteRow(refs.field.rows.length - 1);

  isDisabledButton();
});

refs.appendColumn.addEventListener('click', () => {
  if (refs.field.rows[0]?.cells.length === 10) {
    return;
  }

  for (const row of refs.field.rows) {
    const newCell = row.cells[row.cells?.length - 1].cloneNode(true);

    row.appendChild(newCell);
  }

  isDisabledButton();
});

refs.removeColumn.addEventListener('click', () => {
  for (const row of refs.field.rows) {
    row.deleteCell(row.cells[row.cells?.length - 1]);
  }

  isDisabledButton();
});

isDisabledButton();
