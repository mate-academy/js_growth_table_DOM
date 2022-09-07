'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (tbody.children.length < 10) {
    removeRow.disabled = false;
    tbody.append(tbody.lastElementChild.cloneNode(true));
  }

  if (tbody.children.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (tbody.children.length > 2) {
    appendRow.disabled = false;
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === 2) {
    removeRow.disabled = true;
  }
});

appendCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    [...rows].forEach(row => {
      removeCol.disabled = false;
      row.append(row.lastElementChild.cloneNode(true));
    });
  }

  if (rows[0].children.length === 10) {
    appendCol.disabled = true;
  }
});

removeCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    [...rows].forEach(row => {
      appendCol.disabled = false;
      row.lastElementChild.remove();
    });
  }

  if (rows[0].children.length === 2) {
    removeCol.disabled = true;
  }
});
