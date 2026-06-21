'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function buttonMinMax() {
  const row = table.rows.length;
  const column = table.rows[0].cells.length;

  appendRow.disabled = row >= 10;
  removeRow.disabled = row <= 2;
  appendColumn.disabled = column >= 10;
  removeColumn.disabled = column <= 2;
}

appendRow.addEventListener('click', (e) => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow();
  const columnRow = table.rows[0].cells.length;

  for (let i = 0; i < columnRow; i++) {
    newRow.insertCell();
  }
  buttonMinMax();
});

removeRow.addEventListener('click', (e) => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);
  buttonMinMax();
});

appendColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }
  buttonMinMax();
});

removeColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }
  buttonMinMax();
});

buttonMinMax();
