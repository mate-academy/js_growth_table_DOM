'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const table = document.querySelector('.field');
const rows = table.rows;
const appendRowBtn = document.querySelector('.append-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const removeRowBtn = document.querySelector('.remove-row');

const updateButton = () => {
  appendColBtn.disabled = rows[0].cells.length === MAX_COUNT;
  removeColBtn.disabled = rows[0].cells.length === MIN_COUNT;
  appendRowBtn.disabled = table.rows.length >= MAX_COUNT;
  removeRowBtn.disabled = table.rows.length <= MIN_COUNT;
};

appendColBtn.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    row.insertCell(0);
    updateButton();
  });
});

removeColBtn.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    row.deleteCell(0);
    updateButton();
  });
});

appendRowBtn.addEventListener('click', (e) => {
  table.tBodies[0].append(rows[0].cloneNode(true));

  updateButton();
});

removeRowBtn.addEventListener('click', (e) => {
  table.deleteRow(0);
  updateButton();
});
