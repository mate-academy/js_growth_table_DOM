'use strict';

const tbody = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');

appendColumn.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms[0].children.length === 10) {
    return;
  }

  coloms.forEach(x => {
    x.insertAdjacentHTML('afterbegin', `<td></td>`);
  });
});

removeColumn.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms[0].children.length === 2) {
    return;
  }

  coloms.forEach(x => {
    x.children[x.children.length - 1].remove();
  });
});

appendRow.addEventListener('click', () => {
  const colom = document.querySelector('tr');
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms.length === 10) {
    return;
  }

  tbody.insertAdjacentHTML('beforeend', colom.innerHTML);
});

removeRow.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms.length === 2) {
    return;
  }

  coloms[coloms.length - 1].remove();
});
