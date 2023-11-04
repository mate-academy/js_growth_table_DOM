'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRowBtn.addEventListener('click', () => {
  const tbody = Array.from(table.children)[0];
  const rowsCount = Array.from(tbody.children).length;

  if (rowsCount >= 2) {
    removeRowBtn.disabled = false;
  }

  const newRow = Array.from(tbody.children)[0].cloneNode(true);

  tbody.append(newRow);

  if (rowsCount >= 9) {
    appendRowBtn.disabled = true;
  }
});

removeRowBtn.addEventListener('click', () => {
  const tbody = Array.from(table.children)[0];
  const rowsCount = Array.from(tbody.children).length;

  if (rowsCount <= 10) {
    appendRowBtn.disabled = false;
  }

  if (rowsCount <= 3) {
    removeRowBtn.disabled = true;
  }

  const lastChild = Array.from(tbody.children)[rowsCount - 1];
  tbody.removeChild(lastChild);
});

appendColumnBtn.addEventListener('click', () => {
  const tbody = Array.from(table.children)[0];

  Array.from(tbody.children).map(row => {
    const secondChild = row.children[0];
    const cloneChild = secondChild.cloneNode(true);

    row.insertBefore(cloneChild, row.children[row.children.length - 1]);
  });

  const countCol = Array.from(tbody.children)[0].children.length;

  if (countCol >= 2) {
    removeColumnBtn.disabled = false;
  }

  if (countCol >= 10) {
    appendColumnBtn.disabled = true;
  }
});

removeColumnBtn.addEventListener('click', () => {
  const tbody = Array.from(table.children)[0];

  Array.from(tbody.children).map(row => {
    const lastChild = row.children[row.children.length - 1];
    row.removeChild(lastChild);
  });

  const countCol = Array.from(tbody.children)[0].children.length;

  if (countCol <= 10) {
    appendColumnBtn.disabled = false;
  }

  if (countCol <= 2) {
    removeColumnBtn.disabled = true;
  }
});
