'use strict';

const MIN_LENGTH = 2;
const MAX_LENGTH = 10;

const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function onAddRow(rows) {
  const [currentRow] = rows;
  const currentRowClone = currentRow.cloneNode(true);

  tBody.append(currentRowClone);

  if (rows.length >= MAX_LENGTH) {
    addRowBtn.setAttribute('disabled', true);
  }

  if (rows.length > MIN_LENGTH) {
    removeRowBtn.removeAttribute('disabled');
  }
}

function onRemoveRow(rows) {
  const [currentRow] = rows;

  currentRow.remove();

  if (rows.length <= MIN_LENGTH) {
    removeRowBtn.setAttribute('disabled', true);
  }

  if (rows.length < MAX_LENGTH) {
    addRowBtn.removeAttribute('disabled');
  }
}

function onAddColumn(rows) {
  [...rows].forEach((row) => {
    row.insertCell();
  });

  const cellLength = rows[0].cells.length;

  if (cellLength >= MAX_LENGTH) {
    addColumnBtn.setAttribute('disabled', true);
  }

  if (cellLength > MIN_LENGTH) {
    removeColumnBtn.removeAttribute('disabled');
  }
}

function onRemoveColumn(rows) {
  [...rows].forEach((row) => {
    row.deleteCell(0);
  });

  const cellLength = rows[0].cells.length;

  if (cellLength <= MIN_LENGTH) {
    removeColumnBtn.setAttribute('disabled', true);
  }

  if (cellLength < MAX_LENGTH) {
    addColumnBtn.removeAttribute('disabled');
  }
}

addRowBtn.addEventListener('click', () => {
  onAddRow(tBody.rows);
});

removeRowBtn.addEventListener('click', () => {
  onRemoveRow(tBody.rows);
});

addColumnBtn.addEventListener('click', () => {
  onAddColumn(tBody.rows);
});

removeColumnBtn.addEventListener('click', () => {
  onRemoveColumn(tBody.rows);
});
