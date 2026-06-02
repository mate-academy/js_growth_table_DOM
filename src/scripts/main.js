'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRowBtn.addEventListener('click', () => {
  const newRow = createRow(table.rows[0].cells.length);

  table.appendChild(newRow);

  if (table.rows.length >= 10) {
    appendRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }
});

removeRowBtn.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= 2) {
    removeRowBtn.disabled = true;
  } else {
    appendRowBtn.disabled = false;
  }
});

appendColBtn.addEventListener('click', () => {
  for (const row of table.rows) {
    addCell(row);
  }

  if (table.rows[0].cells.length >= 10) {
    appendColBtn.disabled = true;
  } else {
    removeColBtn.disabled = false;
  }
});

removeColBtn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  if (table.rows[0].cells.length <= 2) {
    removeColBtn.disabled = true;
  } else {
    appendColBtn.disabled = false;
  }
});

function createRow(cellsAmount) {
  const tr = document.createElement('tr');

  for (let i = 0; i < cellsAmount; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  return tr;
}

function addCell(tr) {
  const td = document.createElement('td');

  tr.appendChild(td);
}
