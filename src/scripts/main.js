'use strict';

const tbody = document.getElementsByTagName('tbody')[0];
const apRow = document.getElementsByClassName('append-row')[0];
const rmRow = document.getElementsByClassName('remove-row')[0];
const apColumn = document.getElementsByClassName('append-column')[0];
const rmColumn = document.getElementsByClassName('remove-column')[0];
const maxCells = 10;
const minCells = 2;

apRow.addEventListener('click', () => {
  const oneRow = tbody.lastElementChild;

  tbody.append(oneRow.cloneNode(true));

  if (tbody.children.length >= maxCells) {
    apRow.setAttribute('disabled', '');
  } else {
    rmRow.removeAttribute('disabled');
  }
});

rmRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  if (tbody.children.length <= minCells) {
    rmRow.setAttribute('disabled', '');
  } else {
    apRow.removeAttribute('disabled');
  }
});

apColumn.addEventListener('click', () => {
  const rows = [...tbody.children];

  [...tbody.children].forEach((v) => {
    const cell = v.lastElementChild;

    v.append(cell.cloneNode(true));
  });

  if (rows[0].children.length >= maxCells) {
    apColumn.setAttribute('disabled', '');
  } else {
    rmColumn.removeAttribute('disabled');
  }
});

rmColumn.addEventListener('click', () => {
  const rows = [...tbody.children];

  rows.forEach((v) => {
    v.lastElementChild.remove();
  });

  if (rows[0].children.length <= minCells) {
    rmColumn.setAttribute('disabled', '');
  } else {
    apColumn.removeAttribute('disabled');
  }
});
