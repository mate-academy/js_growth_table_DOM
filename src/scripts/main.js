'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function addColumns() {
  const allTr = document.querySelectorAll('tr');

  allTr.forEach((tr) => {
    const newTD = document.createElement('td');

    const allTd = tr.querySelectorAll('td');

    if (allTd.length <= 9) {
      tr.appendChild(newTD);
      removeColumnButton.removeAttribute('disabled');

      if (allTd.length === 9) {
        appendColumnButton.setAttribute('disabled', true);
      }
    }
  });
}

function removeColumns() {
  const allTr = document.querySelectorAll('tr');

  allTr.forEach((tr) => {
    const allTd = tr.querySelectorAll('td');
    const lastTd = allTd[allTd.length - 1];

    if (allTd.length > 2) {
      lastTd.remove();
      appendColumnButton.removeAttribute('disabled');

      if (allTd.length <= 3) {
        removeColumnButton.setAttribute('disabled', true);
      }
    }
  });
}

function appendRow() {
  const table = document.querySelector('.field');
  const allTr = document.querySelectorAll('tr');
  const firstRow = allTr[0];
  const clonedElement = firstRow.cloneNode(true);
  const tbody = table.querySelector('tbody');

  if (allTr.length < 10) {
    tbody.appendChild(clonedElement);

    if (allTr.length === 9) {
      appendRowButton.setAttribute('disabled', true);
      removeRowButton.removeAttribute('disabled');
    }
  }
}

function removeRow() {
  const allTr = document.querySelectorAll('tr');

  if (allTr.length > 2) {
    allTr[allTr.length - 1].remove();

    if (allTr.length === 3) {
      removeRowButton.setAttribute('disabled', true);
    }
  }
}

appendColumnButton.addEventListener('click', () => {
  addColumns();
  removeColumnButton.removeAttribute('disabled');
});

removeRowButton.addEventListener('click', () => {
  removeRow();
  appendRowButton.removeAttribute('disabled');
});

appendRowButton.addEventListener('click', () => {
  appendRow();
  removeRowButton.removeAttribute('disabled');
});

removeColumnButton.addEventListener('click', () => {
  removeColumns();
  appendColumnButton.removeAttribute('disabled');
});
