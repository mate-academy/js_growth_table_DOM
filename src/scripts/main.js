'use strict';

const meinTabl = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const addCol = document.querySelector('.append-column');
const remRow = document.querySelector('.remove-row');
const remCol = document.querySelector('.remove-column');

function updateButtonStates() {
  const arrRows = Array.from(meinTabl.rows);
  const rowCount = arrRows.length;
  const cellsCount = arrRows[0].cells.length;

  if (rowCount > 9) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }

  if (rowCount < 3) {
    remRow.disabled = true;
  } else {
    remRow.disabled = false;
  }

  if (cellsCount > 9) {
    addCol.disabled = true;
  } else {
    addCol.disabled = false;
  }

  if (cellsCount < 3) {
    remCol.disabled = true;
  } else {
    remCol.disabled = false;
  }
}

function creatRowTab() {
  const newRow = document.createElement('tr');
  const cauntCol = meinTabl.rows[0].cells.length;

  for (let i = 0; i < cauntCol; i++) {
    newRow.append(document.createElement('td'));
  }

  meinTabl.append(newRow);
}

function creatColTab() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.append(document.createElement('td'));
  });
}

function deleteRow() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.at(-1).remove();
}

function deleteCol() {
  const arrRows = Array.from(meinTabl.rows);

  arrRows.forEach((row) => {
    row.deleteCell(-1);
  });
}

addRow.addEventListener('click', (e) => {
  creatRowTab();
  updateButtonStates();
});

addCol.addEventListener('click', (e) => {
  creatColTab();
  updateButtonStates();
});

remRow.addEventListener('click', (e) => {
  deleteRow();
  updateButtonStates();
});

remCol.addEventListener('click', (e) => {
  deleteCol();
  updateButtonStates();
});
