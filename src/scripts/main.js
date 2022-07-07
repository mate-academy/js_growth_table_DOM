'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

appendRow.addEventListener('click', e => {
  tbody.append(tbody.children[0].cloneNode(true));

  if (tbody.children.length === 10) {
    appendRow.disabled = true;
  }

  if (tbody.children.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', e => {
  tbody.lastElementChild.remove();

  if (tbody.children.length === 2) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', e => {
  for (const row of tbody.children) {
    row.append(row.children[0].cloneNode(true));
  }

  if (tbody.children[0].children.length === 10) {
    appendColumn.disabled = true;
  }

  if (tbody.children[0].children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', e => {
  for (const row of tbody.children) {
    row.lastElementChild.remove();
  }

  if (tbody.children[0].children.length === 2) {
    removeColumn.disabled = true;
  }

  if (tbody.children[0].children.length < 10) {
    appendColumn.disabled = false;
  }
});
