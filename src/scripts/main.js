'use strict';

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const max = 10;
const min = 2;

buttonAppendRow.addEventListener('click', (e) => {
  const lastTr = [...tbody.children].pop();

  if (tbody.children.length < max) {
    tbody.append(lastTr.cloneNode(true));
  }

  if (tbody.children.length === max) {
    buttonAppendRow.disabled = true;
  }

  buttonRemoveRow.disabled = false;
});

buttonRemoveRow.addEventListener('click', (e) => {
  const lastTr = [...tbody.children].pop();

  if (tbody.children.length > min) {
    lastTr.remove();
  }

  if (tbody.children.length === min) {
    buttonRemoveRow.disabled = true;
  }

  buttonAppendRow.disabled = false;
});

buttonAppendColumn.addEventListener('click', (e) => {
  for (const tr of tbody.children) {
    const td = document.createElement('td');

    if (tbody.children[tbody.children.length - 1].children.length < max) {
      tr.append(td);
    }

    if (tbody.children[tbody.children.length - 1].children.length === max) {
      buttonAppendColumn.disabled = true;
    }

    buttonRemoveColumn.disabled = false;
  }
});

buttonRemoveColumn.addEventListener('click', (e) => {
  for (const tr of tbody.children) {
    const lastTd = [...tr.children].pop();

    if (tbody.children[tbody.children.length - 1].children.length > min) {
      lastTd.remove();
    }

    if (tbody.children[tbody.children.length - 1].children.length === min) {
      buttonRemoveColumn.disabled = true;
    }

    buttonAppendColumn.disabled = false;
  }
});
