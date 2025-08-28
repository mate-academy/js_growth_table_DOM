'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

changeBtnsState();

appendRowBtn.addEventListener('click', () => {
  if (table.tBodies[0].rows.length >= 10) {
    return;
  }

  const newRowCopy = table.tBodies[0].rows[0].cloneNode(true);

  table.tBodies[0].append(newRowCopy);

  changeBtnsState();
});

appendColBtn.addEventListener('click', () => {
  if (table.tBodies[0].rows[0].cells.length >= 10) {
    return;
  }

  const newCol = document.createElement('td');
  const tableRows = table.tBodies[0].rows;

  [...tableRows].forEach((row) => {
    const colCopy = newCol.cloneNode();

    row.append(colCopy);
  });

  changeBtnsState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.tBodies[0].rows.length <= 2) {
    return;
  }

  table.rows[table.tBodies[0].rows.length - 1].remove();

  changeBtnsState();
});

removeColBtn.addEventListener('click', () => {
  if (table.tBodies[0].rows[0].cells.length <= 2) {
    return;
  }

  const tableRows = table.tBodies[0].rows;

  [...tableRows].forEach((row) => {
    row.cells[row.cells.length - 1].remove();
  });

  changeBtnsState();
});

function changeBtnsState() {
  appendRowBtn.disabled = table.tBodies[0].rows.length >= 10;
  removeRowBtn.disabled = table.tBodies[0].rows.length <= 2;
  appendColBtn.disabled = table.tBodies[0].rows[0].cells.length >= 10;
  removeColBtn.disabled = table.tBodies[0].rows[0].cells.length <= 2;
}
