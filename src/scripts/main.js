'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColunm = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const tr = document.querySelector('tr');
  const trClone = tr.cloneNode(true);
  const trAll = document.querySelectorAll('tr');

  if (trAll.length >= 10) {
    return;
  }

  table.append(trClone);
});

removeRow.addEventListener('click', () => {
  const trAll = document.querySelectorAll('tr');

  if (trAll.length < 3) {
    return;
  }

  const tr = document.querySelector('tr');

  tr.remove();
});

appendColunm.addEventListener('click', () => {
  const trAll = document.querySelectorAll('tr');
  const td = document.querySelector('td');

  if (trAll[0].children.length >= 10) {
    return;
  }

  [...trAll].forEach(item => {
    const tdClone = td.cloneNode(true);

    item.append(tdClone);
  });
});

removeColumn.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  if (tr.children.length < 3) {
    return;
  };

  const trAll = document.querySelectorAll('tr');

  [...trAll].forEach(item => item.firstChild.remove());
});
