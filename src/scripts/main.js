'use strict';

const tbody = document.querySelector('tbody');
const trAll = document.querySelectorAll('tr');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendColumn.addEventListener('click', e => {
  if (trAll[0].children.length > 9) {
    return;
  }

  for (let i = 0; i < trAll.length; i++) {
    trAll[i].insertAdjacentHTML('beforeend', '<td></td>');
  }
});

removeColumn.addEventListener('click', e => {
  if (trAll[0].children.length < 3) {
    return;
  }

  for (let i = 0; i < trAll.length; i++) {
    trAll[i].lastElementChild.remove();
  }
});

appendRow.addEventListener('click', e => {
  if (document.querySelectorAll('tr').length > 9) {
    return;
  }

  tbody.append(tbody.lastElementChild.cloneNode(true));
});

removeRow.addEventListener('click', e => {
  if (document.querySelectorAll('tr').length < 3) {
    return;
  }

  tbody.lastElementChild.remove();
});
