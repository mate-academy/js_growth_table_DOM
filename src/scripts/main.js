'use strict';

const btnRowEl = document.querySelector('.append-row');
const removeBtnRowEl = document.querySelector('.remove-row');

const btnColumnEl = document.querySelector('.append-column');
const removeBtnColumnEl = document.querySelector('.remove-column');

const tableElem = document.querySelector('table.field');

btnRowEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');
  const trElem = tableElem.querySelector('tr');
  const allTdInTr = trElem.querySelectorAll('td');
  const newRow = document.createElement('tr');

  allTdInTr.forEach(() => {
    const newTd = document.createElement('td');

    newRow.append(newTd);
  });

  allInitialTr[allInitialTr.length - 1].after(newRow);

  getUpdatedTr();
});

removeBtnRowEl.addEventListener('click', () => {
  const allTrElem = tableElem.querySelectorAll('tr');

  allTrElem[allTrElem.length - 1].remove();

  getUpdatedTr();
});

function getUpdatedTr() {
  const updatedTr = tableElem.querySelectorAll('tr');

  if (updatedTr.length >= 10) {
    btnRowEl.disabled = true;
  } else {
    btnRowEl.disabled = false;
  }

  if (updatedTr.length <= 2) {
    removeBtnRowEl.disabled = true;
  } else {
    removeBtnRowEl.disabled = false;
  }
}

btnColumnEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');

  allInitialTr.forEach((tr) => {
    const newTd = document.createElement('td');

    tr.append(newTd);
  });

  getUpdatedColumn();
});

removeBtnColumnEl.addEventListener('click', () => {
  const allInitialTr = tableElem.querySelectorAll('tr');

  allInitialTr.forEach((tr) => {
    const allColumn = tr.querySelectorAll('td');

    allColumn[allColumn.length - 1].remove();
  });

  getUpdatedColumn();
});

function getUpdatedColumn() {
  const updatedTr = tableElem.querySelectorAll('tr');

  updatedTr.forEach((tr) => {
    const updatedTd = tr.querySelectorAll('td');

    if (updatedTd.length >= 10) {
      btnColumnEl.disabled = true;
    } else {
      btnColumnEl.disabled = false;
    }

    if (updatedTd.length <= 2) {
      removeBtnColumnEl.disabled = true;
    } else {
      removeBtnColumnEl.disabled = false;
    }
  });
}
