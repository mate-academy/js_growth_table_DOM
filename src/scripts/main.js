'use strict';

// write code here

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColButton = document.querySelector('.append-column');
const removeColButton = document.querySelector('.remove-column');

if (
  !table ||
  !appendRowButton ||
  !removeRowButton ||
  !appendColButton ||
  !removeColButton
) {
  throw new Error('Required DOM elements not found');
}

const MIN = 2;
const MAX = 10;

function getRowCount() {
  return table.querySelectorAll('tr').length;
}

function getColCount() {
  const firstRow = table.querySelector('tr');

  return firstRow ? firstRow.children.length : 0;
}

function updateButtonsState() {
  const rows = getRowCount();
  const cols = getColCount();

  appendRowButton.disabled = rows >= MAX;
  removeRowButton.disabled = rows <= MIN;
  appendColButton.disabled = cols >= MAX;
  removeColButton.disabled = cols <= MIN;
}

appendRowButton.addEventListener('click', () => {
  const rows = getRowCount();
  const cols = getColCount();

  if (rows >= MAX) {
    return;
  }

  const newRow = document.createElement('tr');
  const cellCount = Math.max(cols, MIN);

  for (let i = 0; i < cellCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  const tbody = table.querySelector('tbody');

  tbody.appendChild(newRow);
  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  const rows = getRowCount();

  if (rows <= MIN) {
    return;
  }

  const trs = table.querySelectorAll('tr');

  if (trs.length) {
    trs[trs.length - 1].remove();
  }

  updateButtonsState();
});

appendColButton.addEventListener('click', () => {
  const cols = getColCount();

  if (cols >= MAX) {
    return;
  }

  let trs = table.querySelectorAll('tr');

  if (trs.length === 0) {
    for (let i = 0; i < MIN; i++) {
      const tr = document.createElement('tr');

      for (let j = 0; j < MIN; j++) {
        tr.appendChild(document.createElement('td'));
      }

      table.appendChild(tr);
    }

    trs = table.querySelectorAll('tr');
  }

  trs.forEach((tr) => tr.appendChild(document.createElement('td')));

  updateButtonsState();
});

removeColButton.addEventListener('click', () => {
  const cols = getColCount();

  if (cols <= MIN) {
    return;
  }

  const trs = table.querySelectorAll('tr');

  trs.forEach((tr) => {
    const tds = tr.querySelectorAll('td');

    if (tds.length) {
      const lastTd = tds[tds.length - 1];

      if (lastTd) {
        lastTd.remove();
      }
    }
  });

  updateButtonsState();
});

updateButtonsState();
