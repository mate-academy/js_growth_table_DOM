'use strict';

const rowUp = document.querySelector('.append-row');
const rowDown = document.querySelector('.remove-row');
const colUp = document.querySelector('.append-column');
const colDown = document.querySelector('.remove-column ');
const tbody = document.querySelector('tbody');

rowUp.addEventListener('click', () => {
  rowDown.disabled = false;

  const row = document.querySelector('tr');
  const rowClone = row.cloneNode(true);

  tbody.appendChild(rowClone);

  if (tbody.children.length >= 10) {
    rowUp.disabled = true;
  }
});

rowDown.addEventListener('click', () => {
  rowUp.disabled = false;
  tbody.lastElementChild.remove();

  if (tbody.children.length <= 2) {
    rowDown.disabled = true;
  }
});

colUp.addEventListener('click', () => {
  colDown.disabled = false;

  const row = document.querySelectorAll('tr');

  for (let i = 0; i < tbody.children.length; i++) {
    const td = document.querySelector('td');
    const tdClone = td.cloneNode(true);

    row[i].append(tdClone);
  }

  if (row[0].querySelectorAll('td').length >= 10) {
    colUp.disabled = true;
  }
});

colDown.addEventListener('click', () => {
  colUp.disabled = false;

  const row = document.querySelectorAll('tr');

  for (let i = 0; i < [...row].length; i++) {
    row[i].lastElementChild.remove();
  }

  if (row[0].querySelectorAll('td').length <= 2) {
    colDown.disabled = true;
  }
});
