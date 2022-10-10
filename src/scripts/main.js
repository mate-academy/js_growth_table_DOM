'use strict';

const tbody = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');

const max = 9;
const min = 3;

function toggleDisabled(maxLength, button, maxOrMin) {
  if (maxLength === maxOrMin) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

appendColumn.addEventListener('click', () => {
  const colomns = [...document.querySelectorAll('tr')];
  const amountTr = colomns[0].children.length;

  removeColumn.disabled = false;

  colomns.forEach(colomn => {
    colomn.insertAdjacentHTML('afterbegin', `<td></td>`);
  });

  toggleDisabled(amountTr, appendColumn, max);
});

removeColumn.addEventListener('click', () => {
  const colomns = [...document.querySelectorAll('tr')];
  const amountTr = colomns[0].children.length;

  appendColumn.disabled = false;

  colomns.forEach(colom => {
    colom.children[colom.children.length - 1].remove();
  });

  toggleDisabled(amountTr, removeColumn, min);
});

appendRow.addEventListener('click', () => {
  const colomns = [...document.querySelectorAll('tr')];
  const amountColomns = colomns.length;

  const colomn = document.querySelector('tr');

  removeRow.disabled = false;

  tbody.insertAdjacentHTML('beforeend', colomn.innerHTML);

  toggleDisabled(amountColomns, appendRow, max);
});

removeRow.addEventListener('click', () => {
  const colomns = [...document.querySelectorAll('tr')];
  const amountColomns = colomns.length;

  appendRow.disabled = false;

  colomns[amountColomns - 1].remove();

  toggleDisabled(amountColomns, removeRow, min);
});
