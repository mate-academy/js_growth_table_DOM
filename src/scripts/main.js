'use strict';

const appendRowButt = document.querySelector('.append-row');
const removeRowButt = document.querySelector('.remove-row');
const appendColButt = document.querySelector('.append-column');
const removeColButt = document.querySelector('.remove-column');

const fieldBody = document.querySelector('tbody');

const handler = e => {
  const targetElem = e.target.closest('.button');

  if (!targetElem) {
    return;
  }

  const oldRows = document.querySelectorAll('tr').length;
  const oldCols = document.querySelectorAll('td').length / oldRows;

  if (targetElem === appendRowButt) {
    const tr = document.createElement('tr');

    fieldBody.append(tr);

    for (let i = 0; i < oldCols; i++) {
      tr.innerHTML += '<td></td>';
    }
  };

  if (targetElem === removeRowButt) {
    const lastRowInTable = fieldBody.lastElementChild;

    lastRowInTable.remove();
  };

  if (targetElem === appendColButt) {
    for (const row of fieldBody.children) {
      row.insertAdjacentHTML('beforeend', `<td></td>`);
    }
  };

  if (targetElem === removeColButt) {
    for (const row of fieldBody.children) {
      row.lastElementChild.remove();
    }
  };

  // Checking tableRows length;
  const rowsCount = document.querySelectorAll('tr').length;
  const colsCount = document.querySelectorAll('td').length / rowsCount;

  rowsCount === 10
    ? appendRowButt.setAttribute('disabled', '')
    : appendRowButt.removeAttribute('disabled');

  rowsCount === 2
    ? removeRowButt.setAttribute('disabled', '')
    : removeRowButt.removeAttribute('disabled');

  colsCount === 10
    ? appendColButt.setAttribute('disabled', '')
    : appendColButt.removeAttribute('disabled');

  colsCount === 2
    ? removeColButt.setAttribute('disabled', '')
    : removeColButt.removeAttribute('disabled');
};

document.addEventListener('click', handler);
