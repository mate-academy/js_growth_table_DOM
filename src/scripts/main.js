'use strict';

const appendRowPlus = document.querySelector('.append-row');
const appendColumPlus = document.querySelector('.append-column');
const removeColum = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const tbody = document.querySelector('tbody');

appendColumPlus.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');

  trRow.forEach(el => {
    const td = document.createElement('td');

    el.append(td);
  });
});

appendRowPlus.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');

  tbody.append(trRow[trRow.length - 1].cloneNode(true));
});

removeColum.addEventListener('click', e => {
  const trRow = document.querySelectorAll('tr');

  trRow.forEach(el => {
    const td = el.querySelector('td');

    td.remove();
  });
});

removeRow.addEventListener('click', e => {
  const trRow = document.querySelector('tr');

  trRow.remove();
});
