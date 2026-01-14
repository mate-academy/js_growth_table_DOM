'use strict';

const tbody = document.querySelector('.field tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

const getRows = () => tbody.rows.length;
const getCols = () => tbody.rows[0]?.cells.length ?? 0;

const btnsState = () => {
  appendRowBtn.disabled = getRows() >= MAX;
  removeRowBtn.disabled = getRows() <= MIN;
  appendColumnBtn.disabled = getCols() >= MAX;
  removeColumnBtn.disabled = getCols() <= MIN;
};

appendRowBtn.addEventListener('click', (e) => {
  if (getRows() >= MAX) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < getCols(); i++) {
    tr.append(document.createElement('td'));
  }

  tbody.append(tr);

  btnsState();
});

removeRowBtn.addEventListener('click', (e) => {
  if (getRows() <= MIN) {
    return;
  }

  tbody.lastElementChild?.remove();

  btnsState();
});

appendColumnBtn.addEventListener('click', (e) => {
  if (getCols() >= MAX) {
    return;
  }

  for (const tr of tbody.rows) {
    tr.append(document.createElement('td'));
  }

  btnsState();
});

removeColumnBtn.addEventListener('click', (e) => {
  if (getCols() <= MIN) {
    return;
  }

  for (const tr of tbody.rows) {
    tr.lastElementChild?.remove();
  }

  btnsState();
});

btnsState();
