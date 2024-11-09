'use strict';

const tBody = document.querySelector('tbody');
const minLimit = 2;
const maxLimit = 10;

const fields = {
  rows: tBody.rows.length,
  cols: tBody.rows[0].cells.length,
};

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

fields.switchRowButtons = () => {
  appendRow.disabled = fields.rows >= maxLimit;
  removeRow.disabled = fields.rows <= minLimit;
};

fields.switchColumnButtons = () => {
  appendColumn.disabled = fields.cols >= maxLimit;
  removeColumn.disabled = fields.cols <= minLimit;
};

const makeAppendRow = () => {
  if (appendRow.disabled) {
    return;
  }

  const newRow = tBody.insertRow();

  for (let i = 0; i < fields.cols; i++) {
    newRow.insertCell(-1);
  }

  fields.rows++;
  fields.switchRowButtons();
};

const makeRemoveRow = () => {
  if (removeRow.disabled) {
    return;
  }

  tBody.deleteRow(-1);

  fields.rows--;
  fields.switchRowButtons();
};

const makeAppendColumn = () => {
  if (appendColumn.disabled) {
    return;
  }

  for (const row of tBody.rows) {
    row.insertCell(-1);
  }

  fields.cols++;
  fields.switchColumnButtons();
};

const makeRemoveColumn = () => {
  if (removeColumn.disabled) {
    return;
  }

  for (const row of tBody.rows) {
    row.deleteCell(-1);
  }

  fields.cols--;
  fields.switchColumnButtons();
};

appendRow.addEventListener('click', makeAppendRow);
removeRow.addEventListener('click', makeRemoveRow);
appendColumn.addEventListener('click', makeAppendColumn);
removeColumn.addEventListener('click', makeRemoveColumn);
