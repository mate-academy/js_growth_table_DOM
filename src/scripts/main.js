'use strict';

const tbody = document.querySelector('.field').tBodies[0];

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function getRowCount() {
  return tbody.rows.length;
}

function getColumnCount() {
  return tbody.rows[0].cells.length;
}

function createCell() {
  const td = document.createElement('td');

  td.innerHTML = '&nbsp;';

  return td;
}

function updateButtonsState() {
  const rows = getRowCount();
  const cols = getColumnCount();

  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;

  appendColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

function appendRow() {
  if (getRowCount() >= 10) {
    return;
  }

  const row = document.createElement('tr');
  const cols = getColumnCount();

  for (let i = 0; i < cols; i++) {
    row.append(createCell());
  }

  tbody.append(row);
  updateButtonsState();
}

function removeRow() {
  if (getRowCount() <= 2) {
    return;
  }

  tbody.deleteRow(-1);
  updateButtonsState();
}

function appendColumn() {
  if (getColumnCount() >= 10) {
    return;
  }

  Array.from(tbody.rows).forEach((row) => {
    row.append(createCell());
  });

  updateButtonsState();
}

function removeColumn() {
  if (getColumnCount() <= 2) {
    return;
  }

  Array.from(tbody.rows).forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtonsState();
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColBtn.addEventListener('click', appendColumn);
removeColBtn.addEventListener('click', removeColumn);

updateButtonsState();
