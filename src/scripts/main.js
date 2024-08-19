'use strict';

const tbody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  removeRow.disabled = false;

  const tr = document.querySelector('tr');
  const copy = tr.cloneNode(true);

  addRow.disabled = false;
  tbody.append(copy);

  if (document.querySelectorAll('tr').length > 9) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  addRow.disabled = false;

  const tr = document.querySelectorAll('tr');

  removeRow.disabled = false;
  tbody.removeChild(tr[tr.length - 1]);

  if (document.querySelectorAll('tr').length < 3) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  const tr = document.querySelectorAll('tr');
  const td = document.querySelector('td');

  for (let i = 0; i < tr.length; i++) {
    const clone = td.cloneNode(true);

    tr[i].appendChild(clone);

    if (tr[0].children.length > 9) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  const tr = document.querySelectorAll('tr');

  for (let i = 0; i < tr.length; i++) {
    tr[i].children[0].remove();

    if (tr[0].children.length < 3) {
      removeColumn.disabled = true;
    }
  }
});
