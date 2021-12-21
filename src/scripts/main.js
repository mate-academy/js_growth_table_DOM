'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

document.addEventListener('click', (event) => {
  const tbody = document.querySelector('tbody');
  const tr = document.querySelectorAll('tr');
  // const td = document.querySelectorAll('td');
  // const row = document.createElement('tr');
  const element = document.createElement('td');

  if (tr[0].children.length >= max - 1) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (tr[0].children.length <= min + 1) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (tbody.children.length >= max - 1) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (tbody.children.length <= min + 1) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (event.target === appendColumn) {
    for (let i = 0; i < tbody.children.length; i++) {
      tr[i].append(element.cloneNode(true));
    }
  }

  if (event.target === removeColumn) {
    for (let i = 0; i < tbody.children.length; i++) {
      tr[i].children[tr[0].children.length - 1].remove();
    }
  }

  if (event.target === appendRow) {
    tbody.append(tr[0].cloneNode(true));
  }

  if (event.target === removeRow) {
    tr[tbody.children.length - 1].remove();
  }
});
