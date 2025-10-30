'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const table = document.querySelector('table');

const minCount = 2;
const maxCount = 10;

appendRow.addEventListener('click', () => {
  const trClone = table.rows[0].cloneNode(true);

  table.tBodies[0].append(trClone);
  updateButtonsStateRow();
});

removeRow.addEventListener('click', () => {
  table.tBodies[0].lastElementChild.remove();

  updateButtonsStateRow();
});

function updateButtonsStateRow() {
  const rowCount = table.rows.length;

  appendRow.disabled = rowCount >= maxCount;
  removeRow.disabled = rowCount <= minCount;
}

appendCol.addEventListener('click', () => {
  [...table.rows].map((tr) => {
    tr.append(document.createElement('td'));
  });

  updateButtonsStateCol();
});

removeCol.addEventListener('click', () => {
  [...table.rows].map((tr) => {
    tr.lastElementChild.remove();
  });
  updateButtonsStateCol();
});

function updateButtonsStateCol() {
  const cellCount = table.rows[0].cells.length;

  appendCol.disabled = cellCount >= maxCount;
  removeCol.disabled = cellCount <= minCount;
}
