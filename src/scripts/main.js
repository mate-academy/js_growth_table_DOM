'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

function updateButtons() {
  const rows = document.querySelectorAll('tr');
  const rowsCount = rows.length;
  const columnsCount = rows[0].children.length;

  appendRowBtn.disabled = rowsCount === 10;
  removeRowBtn.disabled = rowsCount === 2;

  appendColumnBtn.disabled = columnsCount === 10;
  removeColumnBtn.disabled = columnsCount === 2;
}

updateButtons();

appendRowBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const columsCount = rows[0].children.length;

  if (rows.length === 10) {
    return;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < columsCount; i++) {
    const createTd = document.createElement('td');

    row.append(createTd);
  }

  table.append(row);

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length === 2) {
    return;
  }

  rows[rows.length - 1].remove();

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length === 10) {
    return;
  }

  rows.forEach((el) => {
    el.append(document.createElement('td'));
  });

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length === 2) {
    return;
  }

  rows.forEach((el) => {
    el.lastElementChild.remove();
  });

  updateButtons();
});
