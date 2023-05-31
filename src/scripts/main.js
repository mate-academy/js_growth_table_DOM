'use strict';

const tbody = document.querySelector('tbody');

const rowAdd = document.querySelector('.append-row');
const rowRem = document.querySelector('.remove-row');

const colAdd = document.querySelector('.append-column');
const colRem = document.querySelector('.remove-column');

rowAdd.addEventListener('click', () => {
  const td = document.querySelector('td');
  const tr = document.querySelector('tr');
  const arrTr = document.querySelectorAll('tr');
  const newTr = document.createElement('tr');

  for (let i = 0; i < tr.children.length; i++) {
    newTr.insertCell(td);
  }

  if (arrTr.length < 10) {
    tbody.prepend(newTr);
  }
});

rowRem.addEventListener('click', () => {
  const tr = document.querySelector('tr');
  const arrTr = document.querySelectorAll('tr');

  if (arrTr.length === 2) {
    return;
  }

  tr.remove();
});

colAdd.addEventListener('click', () => {
  const arrTr = document.querySelectorAll('tr');
  const td = document.createElement('td');
  const arr = Array.from(arrTr);

  for (const item of arr) {
    if (item.children.length < 10) {
      item.insertCell(td);
    }
  }
});

colRem.addEventListener('click', () => {
  const arrTr = document.querySelectorAll('tr');
  const arr = Array.from(arrTr);

  for (const item of arr) {
    if (item.children.length === 2) {
      return;
    }

    item.children[0].remove();
  }
});
