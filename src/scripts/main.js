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
  const amountTr = coloms[0].children.length;

  removeColumn.disabled = false;

  coloms.forEach(colom => {
    colom.insertAdjacentHTML('afterbegin', `<td></td>`);
  });

  examination(amountTr, appendColumn, 9);
});

removeColumn.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];
  const amountTr = coloms[0].children.length;

  appendColumn.disabled = false;

  coloms.forEach(colom => {
    colom.children[colom.children.length - 1].remove();
  });

  examination(amountTr, removeColumn, 3);
});

appendRow.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];
  const amountColoms = coloms.length;

  const colom = document.querySelector('tr');

  removeRow.disabled = false;

  tbody.insertAdjacentHTML('beforeend', colom.innerHTML);

  examination(amountColoms, appendRow, 9);
});

removeRow.addEventListener('click', () => {
  const coloms = [...document.querySelectorAll('tr')];
  const amountColoms = coloms.length;

  appendRow.disabled = false;

  coloms[amountColoms - 1].remove();

  examination(amountColoms, removeRow, 3);
});
