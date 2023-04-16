'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const cloneRow = tbody.lastElementChild.cloneNode(true);

  tbody.append(cloneRow);

  if (tbody.children.length > 9) {
    appendRow.disabled = true;
  }

  if (tbody.children.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    removeRow.disabled = true;
  }

  if (tbody.children.length === 9) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  [...tbody.children].forEach(row => {
    row.append(tbody.lastElementChild.lastElementChild.cloneNode(true));
  });

  if (tbody.lastElementChild.children.length > 9) {
    appendColumn.disabled = true;
  }

  if (tbody.lastElementChild.children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  [...tbody.children].forEach(row => {
    row.lastElementChild.remove();
  });

  if (tbody.lastElementChild.children.length < 3) {
    removeColumn.disabled = true;
  }

  if (tbody.lastElementChild.children.length === 9) {
    appendColumn.disabled = false;
  }
});
