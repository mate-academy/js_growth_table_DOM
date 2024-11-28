'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const rows = table.querySelectorAll('tr');

appendColumnBtn.addEventListener('click', () => {
  const currentRows = table.querySelectorAll('tr');

  currentRows.forEach((row) => {
    const block = document.createElement('td');

    row.append(block);
  });
  checkForCount();
});

removeColumnBtn.addEventListener('click', () => {
  const currentRows = table.querySelectorAll('tr');

  currentRows.forEach((row) => {
    const lastCell = row.lastElementChild;

    if (lastCell) {
      lastCell.remove();
    }
  });
  checkForCount();
});

appendRowBtn.addEventListener('click', () => {
  const tr = document.createElement('tr');

  const countTdInRow = rows[0].children.length;

  for (let i = 0; i < countTdInRow; i++) {
    const block = document.createElement('td');

    tr.appendChild(block);
  }

  table.appendChild(tr);
  checkForCount();
});

removeRowBtn.addEventListener('click', () => {
  const trList = table.querySelectorAll('tr');
  const lastTr = trList[trList.length - 1];

  if (lastTr) {
    lastTr.remove();
  }
  checkForCount();
});

function checkForCount() {
  const rowsCount = table.querySelectorAll('tr').length;
  const columnsCount = table.querySelector('tr').children.length;

  appendRowBtn.disabled = rowsCount >= 10;
  removeRowBtn.disabled = rowsCount <= 2;
  appendColumnBtn.disabled = columnsCount >= 10;
  removeColumnBtn.disabled = columnsCount <= 2;
}
