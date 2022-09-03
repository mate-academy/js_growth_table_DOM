'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');

appendRow.addEventListener('click', e => {
  if ([...document.querySelectorAll('.field tbody tr')].length === 9) {
    appendRow.disabled = true;
  }

  if ([...document.querySelectorAll('.field tbody tr')].length === 10) {
    return;
  }

  const copyTr = document.querySelector(
    '.field tbody tr:last-child'
  ).cloneNode(true);

  removeRow.disabled = false;

  table.append(copyTr);
});

removeRow.addEventListener('click', e => {
  if ([...document.querySelectorAll('.field tbody tr')].length === 3) {
    removeRow.disabled = true;
  }

  if ([...document.querySelectorAll('.field tbody tr')].length === 2) {
    return;
  }

  const allTr = document.querySelector('.field tbody tr:last-child');

  appendRow.disabled = false;
  allTr.remove();
});

appendColumn.addEventListener('click', e => {
  const tableTr = [...document.querySelectorAll('.field tbody tr')];

  if ([...document.querySelectorAll(
    '.field tbody tr:last-child td'
  )].length === 9) {
    appendColumn.disabled = true;
  }

  tableTr.forEach(a => a.insertAdjacentHTML('beforeend', `<td></td>`));

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  const tableTd = [...document.querySelectorAll(
    '.field tbody tr td:last-child'
  )];

  if ([...document.querySelectorAll(
    '.field tbody tr:last-child td'
  )].length === 3) {
    removeColumn.disabled = true;
  }
  tableTd.forEach(a => a.remove());

  appendColumn.disabled = false;
});
