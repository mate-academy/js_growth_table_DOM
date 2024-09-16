'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRow.addEventListener('click', () => {
  const cloneRow = tbody.lastElementChild.cloneNode(true);

  tbody.append(cloneRow);

  if (tbody.children.length > (max - 1)) {
    appendRow.disabled = true;
  }

  if (tbody.children.length > min) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  if (tbody.children.length < (min + 1)) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < max) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  [...tbody.children].forEach(row => {
    row.append(tbody.lastElementChild.lastElementChild.cloneNode(true));
  });

  if (tbody.lastElementChild.children.length > (max - 1)) {
    appendColumn.disabled = true;
  }

  if (tbody.lastElementChild.children.length > min) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  [...tbody.children].forEach(row => {
    row.lastElementChild.remove();
  });

  if (tbody.lastElementChild.children.length < (min + 1)) {
    removeColumn.disabled = true;
  }

  if (tbody.lastElementChild.children.length === (max - 1)) {
    appendColumn.disabled = false;
  }
});
