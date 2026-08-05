'use strict';

let amountColumns = 4;
let amountRows = 4;

// 321312
const remoRow = document.querySelector('.remove-row');
const remoColumns = document.querySelector('.remove-column');
const appRow = document.querySelector('.append-row');
const appCol = document.querySelector('.append-column');

function activeButton() {
  if (amountColumns === 2) {
    remoColumns.disabled = true;
  }

  if (amountColumns === 10) {
    appCol.disabled = true;
  }

  if (amountRows === 2) {
    remoRow.disabled = true;
  }

  if (amountRows === 10) {
    appRow.disabled = true;
  }

  if (amountColumns > 2 && amountColumns < 10) {
    remoColumns.disabled = null;
    appCol.disabled = null;
  }

  if (amountRows > 2 && amountRows < 10) {
    remoRow.disabled = null;
    appRow.disabled = null;
  }
}

document.addEventListener('click', (e) => {
  const table = document.querySelector('table');
  let rows = table.rows;

  const addRows = e.target.closest('.append-row');
  const addColums = e.target.closest('.append-column');
  const removeRows = e.target.closest('.remove-row');
  const removeColumns = e.target.closest('.remove-column');

  if (addColums) {
    if (amountColumns === 10) {
      return;
    }

    for (let i = 0; i < amountRows; i++) {
      const newColumns = document.createElement('td');

      rows[i].append(newColumns);
    }

    amountColumns++;
    activeButton();
  }

  if (addRows) {
    if (amountRows === 10) {
      return;
    }

    const newR = document.createElement('tr');
    const tBody = table.tBodies[0];

    tBody.appendChild(newR);
    rows = table.rows;

    for (let i = 0; i < amountColumns; i++) {
      const newRow = document.createElement('td');

      rows[rows.length - 1].append(newRow);
    }
    amountRows++;
    activeButton();
  }

  if (removeRows) {
    rows[rows.length - 1].remove();

    amountRows--;
    activeButton();
  }

  if (removeColumns) {
    for (let i = 0; i < amountRows; i++) {
      rows[i].cells[amountColumns - 1].remove();
    }

    amountColumns--;
    activeButton();
  }
});
