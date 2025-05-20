'use strict';

// write code here
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

function updateBtn() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColBtn.disabled = colCount >= 10;
  removeColBtn.disabled = colCount <= 2;
}

appendRowBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  table.appendChild(newRow);
  updateBtn();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
  updateBtn();
});

appendColBtn.addEventListener('click', () => {
  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }
  updateBtn();
});

removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }
  updateBtn();
});
