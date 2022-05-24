'use strict';

const appendRowPlus = document.querySelector('.append-row');
const appendColumPlus = document.querySelector('.append-column');
const removeColum = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const tbody = document.querySelector('tbody');

appendColumPlus.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');
  const tdsInRow = trRow[0].querySelectorAll('td').length;

  if (tdsInRow === 9) {
    appendColumPlus.setAttribute('disabled', true);
  }

  removeColum.removeAttribute('disabled');

  trRow.forEach(el => {
    const td = document.createElement('td');

    el.append(td);
  });
});

appendRowPlus.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');
  removeRow.removeAttribute('disabled');

  if (trRow.length === 9) {
    appendRowPlus.setAttribute('disabled', true);
  }

  tbody.append(trRow[trRow.length - 1].cloneNode(true));
});

removeColum.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');

  const tdsInRow = trRow[0].querySelectorAll('td').length;

  if (tdsInRow === 3) {
    removeColum.setAttribute('disabled', true);
  }
  appendColumPlus.removeAttribute('disabled');

  trRow.forEach(el => {
    const td = el.querySelector('td');

    td.remove();
  });
});

removeRow.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');
  appendRowPlus.removeAttribute('disabled');

  if (trRow.length === 3) {
    removeRow.setAttribute('disabled', true);
  }

  trRow[0].remove();
});
