'use strict';

const buttons = document.querySelector('.container');
const table = document.querySelector('.field');

buttons.addEventListener('click', onClick);

function onClick(eve) {
  const containButton = eve.target.classList;

  if (!containButton.contains('button')) {
    return;
  }

  if (containButton.contains('append-row')) {
    addRow();
    updateButtons();
  }

  if (containButton.contains('remove-row')) {
    removeRow();
    updateButtons();
  }

  if (containButton.contains('append-column')) {
    addColumn();
    updateButtons();
  }

  if (containButton.contains('remove-column')) {
    removeColumn();
    updateButtons();
  }
}

function addRow() {
  const countCols = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < countCols; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }
  table.appendChild(newRow);
}

function removeRow() {
  const rows = table.rows.length;

  if (rows > 2) {
    table.deleteRow(rows - 1);
  }
}

function addColumn() {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const td = document.createElement('td');

    rows[i].appendChild(td);
  }
}

function removeColumn() {
  const rows = table.rows;
  const cols = table.rows[0].cells.length;

  if (cols > 2) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(cols - 1);
    }
    updateButtons();
  }
}

function updateButtons() {
  const addRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const addColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  if (rows >= 10) {
    addRowBtn.disabled = true;
  } else {
    addRowBtn.disabled = false;
  }

  if (rows <= 2) {
    removeRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }

  if (cols >= 10) {
    addColBtn.disabled = true;
  } else {
    addColBtn.disabled = false;
  }

  if (cols <= 2) {
    removeColBtn.disabled = true;
  } else {
    removeColBtn.disabled = false;
  }
}
