'use strict';

const tbody = document.querySelector('tbody');
const appendRaw = document.querySelector('.append-row');
const removeRaw = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRaw.addEventListener('click', e => {
  const tr = document.createElement('tr');

  for (let item of tbody.children[0].children) {
    item = document.createElement('td');

    tr.append(item);

    tbody.append(tr);

    if (tbody.children.length >= max) {
      appendRaw.disabled = true;
    }

    removeRaw.disabled = false;
  }
});

removeRaw.addEventListener('click', e => {
  tbody.children[0].remove();

  if (tbody.children.length <= min) {
    removeRaw.disabled = true;
  }

  appendRaw.disabled = false;
});

appendColumn.addEventListener('click', e => {
  for (const item of tbody.children) {
    const td = document.createElement('td');

    item.append(td);

    if (tbody.children[0].children.length >= max) {
      appendColumn.disabled = true;
    }

    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', e => {
  for (const item of tbody.children) {
    item.lastElementChild.remove();
  }

  if (tbody.children[0].children.length <= min) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
