'use strict';

// write code here

const table = document.querySelector('.field');
const tbody = table;
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = tbody.children.length;
  const columnsCount = tbody.firstElementChild.children.length;

  buttonAppendRow.disabled = rowsCount >= 10;
  buttonRemoveRow.disabled = rowsCount <= 2;

  buttonAppendColumn.disabled = columnsCount >= 10;
  buttonRemoveColumn.disabled = columnsCount <= 2;
}

buttonAppendRow.addEventListener('click', (events) => {
  const tr = document.createElement('tr');

  const children = tbody.firstElementChild;

  if (tbody.children.length >= 10) {
    return;
  }

  for (let i = 0; i < children.children.length; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  tbody.append(tr);

  updateButtons();
});

buttonRemoveRow.addEventListener('click', (events) => {
  const tbodyClean = tbody.lastElementChild;

  if (tbody.children.length > 2) {
    tbody.removeChild(tbodyClean);
  }

  updateButtons();
});

buttonAppendColumn.addEventListener('click', (events) => {
  if (tbody.firstElementChild.children.length >= 10) {
    return;
  }

  const fullTr = tbody.children;

  for (let i = 0; i < fullTr.length; i++) {
    const newTd = document.createElement('td');

    fullTr[i].append(newTd);
  }

  updateButtons();
});

buttonRemoveColumn.addEventListener('click', (events) => {
  if (tbody.firstElementChild.children.length <= 2) {
    return;
  }

  const fullTr = tbody.children;

  for (let i = 0; i < fullTr.length; i++) {
    const last = fullTr[i].lastElementChild;

    last.remove();
  }

  updateButtons();
});
