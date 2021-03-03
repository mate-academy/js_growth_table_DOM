'use strict';

const buttonRowAdd = document.querySelector('.append-row');
const buttonRowDelete = document.querySelector('.remove-row');
const buttonColumnAdd = document.querySelector('.append-column');
const buttonColumnDelete = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const maxValue = 10;
const minValue = 2;

buttonRowAdd.addEventListener('click', () => {
  buttonRowDelete.disabled = false;

  const tr = table.firstElementChild.cloneNode(true);

  table.append(tr);

  if (table.children.length >= maxValue) {
    buttonRowAdd.disabled = true;
  }
});

buttonRowDelete.addEventListener('click', () => {
  buttonRowAdd.disabled = false;

  const tr = table.firstElementChild;

  tr.remove();

  if (table.children.length <= minValue) {
    buttonRowDelete.disabled = true;
  }
});

buttonColumnAdd.addEventListener('click', () => {
  buttonColumnDelete.disabled = false;

  [...table.children].forEach(tr => {
    const td = table.querySelector('td').cloneNode(true);

    tr.append(td);
  });

  if (table.lastElementChild.children.length >= maxValue) {
    buttonColumnAdd.disabled = true;
  }
});

buttonColumnDelete.addEventListener('click', () => {
  buttonColumnAdd.disabled = false;

  [...table.children].forEach(tr => {
    tr.firstElementChild.remove();
  });

  if (table.lastElementChild.children.length <= minValue) {
    buttonColumnDelete.disabled = true;
  }
});
