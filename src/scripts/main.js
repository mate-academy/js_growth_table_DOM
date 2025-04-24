'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const MAX_SIZE = 10;
const MIN_SIZE = 2;

appendRowBtn.addEventListener('click', () => {
  if (getRowCount() < MAX_SIZE) {
    const newRow = table.insertRow();

    for (let i = 0; i < getColCount(); i++) {
      newRow.insertCell();
    }

    checkBtns();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (getRowCount() > MIN_SIZE) {
    table.deleteRow(-1);
    checkBtns();
  }
});

appendColBtn.addEventListener('click', () => {
  if (getColCount() < MAX_SIZE) {
    for (const row of table.rows) {
      row.insertCell();
    }

    checkBtns();
  }
});

removeColBtn.addEventListener('click', () => {
  if (getColCount() > MIN_SIZE) {
    [...table.rows].forEach((row) => {
      row.deleteCell(-1);
    });

    checkBtns();
  }
});

function getRowCount() {
  return table.rows.length;
}

function getColCount() {
  return table.rows[0].cells.length;
}

function checkBtns() {
  appendRowBtn.disabled = getRowCount() >= MAX_SIZE;
  removeRowBtn.disabled = getRowCount() <= MIN_SIZE;
  appendColBtn.disabled = getColCount() >= MAX_SIZE;
  removeColBtn.disabled = getColCount() <= MIN_SIZE;
}

checkBtns();
