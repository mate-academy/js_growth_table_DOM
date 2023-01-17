'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const limitMax = 10;
const limitMin = 2;

function checkDisabled(amount, limit) {
  if (amount === limit) {
    return true;
  } else {
    return false;
  }
}

document.querySelector('.container').addEventListener('click', e => {
  if (appendRow.className.includes(e.target.className)) {
    document.querySelector('table')
      .appendChild(document.querySelector('tr').cloneNode(true));
  }

  if (appendCol.className.includes(e.target.className)) {
    document.querySelectorAll('tr').forEach(el => {
      el.appendChild(document.querySelector('td').cloneNode(true));
    });
  }

  if (removeRow.className.includes(e.target.className)) {
    document.querySelector('tr').remove();
  }

  if (removeCol.className.includes(e.target.className)) {
    document.querySelectorAll('tr').forEach(el => {
      el.querySelector('td').remove();
    });
  }

  const rowsAmount = document.querySelectorAll('tr').length;
  const colsAmount = document.querySelectorAll('td').length
    / document.querySelectorAll('tr').length;

  appendRow.disabled = checkDisabled(rowsAmount, limitMax);
  appendCol.disabled = checkDisabled(colsAmount, limitMax);
  removeRow.disabled = checkDisabled(rowsAmount, limitMin);
  removeCol.disabled = checkDisabled(colsAmount, limitMin);
});
