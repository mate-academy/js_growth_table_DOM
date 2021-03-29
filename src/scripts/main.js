'use strict';

const table = document.querySelector('.field tbody');
const rows = table.rows;
const appendRowBtn = document.querySelector('.append-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const removeRowBtn = document.querySelector('.remove-row');
const columns = rows[0].cells;

function appendRow() {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < columns.length; i++) {
    newRow.insertCell();
  }

  if (rows.length === 10) {
    appendRowBtn.disabled = true;
  } else if (rows.length > 2) {
    removeRowBtn.disabled = false;
  }
}

function removeRow() {
  table.deleteRow(rows.length - 1);

  if (rows.length === 2) {
    removeRowBtn.disabled = true;
  } else if (rows.length < 10) {
    appendRowBtn.disabled = false;
  }
}

function appendCol() {
  [...rows].forEach(item => {
    item.insertCell(rows.length - 2);
  });

  if (columns.length === 10) {
    appendColBtn.disabled = true;
  } else if (columns.length > 2) {
    removeColBtn.disabled = false;
  }
}

function removeCol() {
  [...rows].forEach(item => {
    item.deleteCell(rows.length - 2);
  });

  if (columns.length === 2) {
    removeColBtn.disabled = true;
  } else if (columns.length < 10) {
    appendColBtn.disabled = false;
  }
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColBtn.addEventListener('click', appendCol);
removeColBtn.addEventListener('click', removeCol);
