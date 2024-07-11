'use strict';

const trSet = [...document.querySelectorAll('tr')];
const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function tableUpdate() {
  appendRow.disabled = trSet.length >= 10;
  removeRow.disabled = trSet.length <= 2;
  appendColumn.disabled = trSet.some((tr) => tr.children.length >= 10);
  removeColumn.disabled = trSet.every((tr) => tr.children.length <= 2);
}

appendRow.addEventListener('click', () => {
  const row = trSet[0].cloneNode(true);

  if (trSet.length < 10) {
    table.append(row);
    trSet.push(row);
  }

  tableUpdate();
});

removeRow.addEventListener('click', () => {
  if (trSet.length > 2) {
    const lastRow = trSet.pop();

    lastRow.remove();
  }

  tableUpdate();
});

appendColumn.addEventListener('click', () => {
  trSet.forEach((tr) => {
    const td = document.createElement('td');

    if (tr.children.length < 10) {
      tr.append(td);
    }
  });

  tableUpdate();
});

removeColumn.addEventListener('click', () => {
  trSet.forEach((tr) => {
    const lastTd = tr.lastElementChild;

    if (tr.children.length > 2) {
      lastTd.remove();
    }
  });

  tableUpdate();
});
