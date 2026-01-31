'use strict';

const table = document.querySelector('.field');
const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');

const MIN_LIMIT = 2;
const MAX_LIMIT = 10;

function checkLimits() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0] ? table.rows[0].cells.length : 0;

  btnAppendRow.disabled = rowCount >= MAX_LIMIT;
  btnRemoveRow.disabled = rowCount <= MIN_LIMIT;
  btnAppendCol.disabled = colCount >= MAX_LIMIT;
  btnRemoveCol.disabled = colCount <= MIN_LIMIT;
}

btnAppendRow.onclick = () => {
  if (table.rows.length < MAX_LIMIT) {
    const colCount = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    checkLimits();
  }
};

btnRemoveRow.onclick = () => {
  if (table.rows.length > MIN_LIMIT) {
    table.deleteRow(table.rows.length - 1);
    checkLimits();
  }
};

btnAppendCol.onclick = () => {
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX_LIMIT) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
    checkLimits();
  }
};

btnRemoveCol.onclick = () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN_LIMIT) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    checkLimits();
  }
};

checkLimits();
