'use strict';

const field = document.querySelector('.field tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const maxCellCount = 10;
const minCellCount = 2;

appendRowButton.addEventListener('click', () => {
  field.append(tr.cloneNode(true));

  if (field.children.length === maxCellCount) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', () => {
  field.lastElementChild.remove();

  if (field.children.length === minCellCount) {
    removeRowButton.disabled = true;
  }
  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(el => {
    el.append(td.cloneNode(true));
  });

  if (tr.childElementCount === maxCellCount) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(el => {
    el.lastElementChild.remove();
  });

  if (tr.childElementCount === minCellCount) {
    removeColumnButton.disabled = true;
  }
  appendColumnButton.disabled = false;
});
