'use strict';

const tbody = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');

function examination(maxLength, button, maxOrMin) {
  if (maxLength === maxOrMin) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

appendColumn.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms[0].children.length === 10) {
    return;
  }

  removeColumn.disabled = false;

  coloms.forEach(x => {
    x.insertAdjacentHTML('afterbegin', `<td></td>`);
  });

  examination(coloms[0].children.length, appendColumn, 10);
});

removeColumn.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  appendColumn.disabled = false;

  if (coloms[0].children.length === 2) {
    return;
  }

  coloms.forEach(x => {
    x.children[x.children.length - 1].remove();
  });

  examination(coloms[0].children.length, removeColumn, 2);
});

appendRow.addEventListener('click', () => {
  const colom = document.querySelector('tr');
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms.length === 10) {
    return;
  }

  removeRow.disabled = false;

  tbody.insertAdjacentHTML('beforeend', colom.innerHTML);

  examination(coloms.length, appendRow, 9);
});

removeRow.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];

  if (coloms.length === 2) {
    return;
  }

  appendRow.disabled = false;

  coloms[coloms.length - 1].remove();

  examination(coloms.length, removeRow, 3);
});
