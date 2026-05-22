'use strict';

const container = document.querySelector('.container');
const addRow = container.querySelector('.append-row');
const deleteRow = container.querySelector('.remove-row');
const addColumn = container.querySelector('.append-column');
const deleteColumn = container.querySelector('.remove-column');
const table = document.querySelector('.field');

checkLimits();

addRow.addEventListener('click', () => {
  const allTr = table.querySelectorAll('tr');

  if (allTr.length >= 10) {
    return;
  }

  const newTr = document.createElement('tr');
  const allTd = allTr[0].children.length;

  for (let i = 0; i < allTd; i++) {
    const newTd = document.createElement('td');

    newTr.append(newTd);
  }

  const tBody = table.querySelector('tbody') || table;

  tBody.append(newTr);
  checkLimits();
});

deleteRow.addEventListener('click', () => {
  const allTr = table.querySelectorAll('tr');

  if ([...allTr].length <= 2) {
    return;
  }

  const lastTr = allTr[allTr.length - 1];

  lastTr.remove();
  checkLimits();
});

addColumn.addEventListener('click', () => {
  const allTr = table.querySelectorAll('tr');
  const allTd = allTr[0].children.length;

  if (allTd >= 10) {
    return;
  }

  allTr.forEach((currentTr) => {
    const newTd = document.createElement('td');

    currentTr.append(newTd);
  });

  checkLimits();
});

deleteColumn.addEventListener('click', () => {
  const allTr = table.querySelectorAll('tr');
  const allTd = allTr[0].children.length;

  if (allTd <= 2) {
    return;
  }

  allTr.forEach((currentTr) => {
    const lastTd = currentTr.lastElementChild;

    lastTd.remove();
  });

  checkLimits();
});

function checkLimits() {
  const allTr = table.querySelectorAll('tr');

  if (allTr.length === 0) {
    return;
  }

  const allTd = allTr[0].children.length;

  addRow.disabled = allTr.length >= 10;
  deleteRow.disabled = allTr.length <= 2;
  addColumn.disabled = allTd >= 10;
  deleteColumn.disabled = allTd <= 2;
}
