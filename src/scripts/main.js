'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

if (rowCount === 10) {
  appendRowBtn.disabled = true;
}

if (rowCount === 2) {
  removeRowBtn.disabled = true;
}

if (columnCount === 10) {
  appendColumnBtn.disabled = true;
}

if (columnCount === 2) {
  removeColumnBtn.disabled = true;
}

appendRowBtn.addEventListener('click', function() {
  if (rowCount < 10) {
    const row = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      row.insertCell();
    }
    rowCount++;
    removeRowBtn.disabled = false;

    if (rowCount === 10) {
      appendRowBtn.disabled = true;
    }
  }
});

removeRowBtn.addEventListener('click', function() {
  if (rowCount > 2) {
    table.deleteRow(-1);
    rowCount--;
    appendRowBtn.disabled = false;

    if (rowCount === 2) {
      removeRowBtn.disabled = true;
    }
  }
});

appendColumnBtn.addEventListener('click', function() {
  if (columnCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
    columnCount++;
    removeColumnBtn.disabled = false;

    if (columnCount === 10) {
      appendColumnBtn.disabled = true;
    }
  }
});

removeColumnBtn.addEventListener('click', function() {
  if (columnCount > 2) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
    columnCount--;
    appendColumnBtn.disabled = false;

    if (columnCount === 2) {
      removeColumnBtn.disabled = true;
    }
  }
});
