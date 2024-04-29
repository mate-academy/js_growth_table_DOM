'use strict';

// write code here

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tbody = table.tBodies[0];

appendRowBtn.addEventListener('click', () => {
  if (removeRowBtn.disabled) {
    removeRowBtn.disabled = false;
  }

  const lastRow = tbody.lastElementChild;

  tbody.append(lastRow.cloneNode(true));

  if (table.rows.length === 10) {
    appendRowBtn.disabled = true;
  }
});

removeRowBtn.addEventListener('click', () => {
  if (appendRowBtn.disabled) {
    appendRowBtn.disabled = false;
  }

  const lastRow = tbody.lastElementChild;

  lastRow.remove();

  if (table.rows.length === 2) {
    removeRowBtn.disabled = true;
  }
});

appendColumnBtn.addEventListener('click', () => {
  if (removeColumnBtn.disabled) {
    removeColumnBtn.disabled = false;
  }

  for (const row of table.rows) {
    const lastCell = row.lastElementChild;

    row.append(lastCell.cloneNode(true));
  }

  if (table.rows[0].cells.length === 10) {
    appendColumnBtn.disabled = true;
  }
});

removeColumnBtn.addEventListener('click', () => {
  if (appendColumnBtn.disabled) {
    appendColumnBtn.disabled = false;
  }

  for (const row of table.rows) {
    const lastCell = row.lastElementChild;

    lastCell.remove();
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnBtn.disabled = true;
  }
});
