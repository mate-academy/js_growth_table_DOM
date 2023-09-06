'use strict';

const table = document.querySelector('.field');
const rows = table.rows;

const maxCount = 10;
const minCount = 2;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  const newRow = table.tBodies[0].lastElementChild.cloneNode(true);

  table.tBodies[0].append(newRow);

  if (rows.length === maxCount) {
    appendRowBtn.disabled = true;
  }

  if (rows.length > minCount) {
    removeRowBtn.disabled = false;
  }
});

removeRowBtn.addEventListener('click', () => {
  table.tBodies[0].lastElementChild.remove();

  if (rows.length < maxCount) {
    appendRowBtn.disabled = false;
  }

  if (rows.length === minCount) {
    removeRowBtn.disabled = true;
  }
});

appendColumnBtn.addEventListener('click', () => {
  for (const row of rows) {
    const newCell = row.firstElementChild.cloneNode();

    row.append(newCell);

    if (row.children.length === maxCount) {
      appendColumnBtn.disabled = true;
    }

    if (row.children.length > minCount) {
      removeColumnBtn.disabled = false;
    }
  }
});

removeColumnBtn.addEventListener('click', () => {
  for (const row of rows) {
    row.lastElementChild.remove();

    if (row.children.length === minCount) {
      removeColumnBtn.disabled = true;
    }

    if (row.children.length < maxCount) {
      appendColumnBtn.disabled = false;
    }
  }
});
