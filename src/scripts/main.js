'use strict';

const table = document.querySelector('.field').children[0];
const appendRowBtn = document.querySelector('.append-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');

let rowLength = table.rows.length;
let columnLength = table.rows[0].cells.length;

const rowMaxLength = 10;
const columnMaxLength = 10;
const rowMinLength = 2;
const columnMinLength = 2;

const checkDisabled = () => {
  appendRowBtn.disabled = columnLength >= columnMaxLength;
  appendColumnBtn.disabled = rowLength >= rowMaxLength;
  removeRowBtn.disabled = columnLength <= columnMinLength;
  removeColumnBtn.disabled = rowLength <= rowMinLength;
};

appendRowBtn.onclick = () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < rowLength; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  table.append(tr);

  columnLength++;

  checkDisabled();
};

removeRowBtn.onclick = () => {
  table.rows[0].remove();

  columnLength--;

  checkDisabled();
};

appendColumnBtn.onclick = () => {
  const rows = table.rows;

  [...rows].forEach(row => {
    const td = document.createElement('td');

    row.append(td);
  });

  rowLength++;

  checkDisabled();
};

removeColumnBtn.onclick = () => {
  const rows = table.rows;

  [...rows].forEach(row => row.children[0].remove());

  rowLength--;

  checkDisabled();
};