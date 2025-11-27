'use strict';

const btnRowEl = document.querySelector('.append-row');
const removeBtnRowEl = document.querySelector('.remove-row');

const btnColumnEl = document.querySelector('.append-column');
const removeBtnColumnEl = document.querySelector('.remove-column');

const tableElem = document.querySelector('table.field');
const trElem = tableElem.querySelector('tr');
const allTdInTr = trElem.querySelectorAll('td');

btnRowEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');

  const newRow = document.createElement('tr');

  allTdInTr.forEach(() => {
    const newTd = document.createElement('td');

    newRow.append(newTd);
  });

  allInitialTr[allInitialTr.length - 1].after(newRow);

  getUpdatedTr(btnRowEl, removeBtnRowEl);
});

removeBtnRowEl.addEventListener('click', () => {
  const allTrElem = tableElem.querySelectorAll('tr');

  allTrElem[allTrElem.length - 1].remove();

  getUpdatedTr(btnRowEl, removeBtnRowEl);
});

function getUpdatedTr(btnRow, removeBtnRow) {
  const updatedTr = tableElem.querySelectorAll('tr');

  if (updatedTr.length >= 5) {
    btnRow.disabled = true;
  } else {
    btnRow.disabled = false;
  }

  if (updatedTr.length <= 2) {
    removeBtnRow.disabled = true;
  } else {
    removeBtnRow.disabled = false;
  }
}

btnColumnEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');

  allInitialTr.forEach((tr) => {
    const newTd = document.createElement('td');

    tr.append(newTd);
  });

  getUpdatedColumn(btnColumnEl, removeBtnColumnEl);
});

removeBtnColumnEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');

  allInitialTr.forEach((tr) => {
    const allColumn = tr.querySelectorAll('td');

    allColumn[allColumn.length - 1].remove();
  });

  getUpdatedColumn(btnColumnEl, removeBtnColumnEl);
});

function getUpdatedColumn(btnColumn, removeBtnColumn) {
  const updatedTr = tableElem.querySelectorAll('tr');

  updatedTr.forEach((tr) => {
    const updatedTd = tr.querySelectorAll('td');

    if (updatedTd.length >= 5) {
      btnColumn.disabled = true;
    } else {
      btnColumn.disabled = false;
    }

    if (updatedTd.length <= 2) {
      removeBtnColumn.disabled = true;
    } else {
      removeBtnColumn.disabled = false;
    }
  });
}
