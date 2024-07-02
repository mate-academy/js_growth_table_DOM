'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const firstRow = document.querySelector('tr');

appendRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  tbody.insertAdjacentHTML('beforeEnd', `${firstRow.outerHTML}`);

  if (rows.length > 8) {
    appendRow.disabled = true;
  }

  if (rows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((element) => {
    element.insertAdjacentHTML('beforeEnd', '<td></td>');
  });

  if (firstRow.children.length > 9) {
    appendColumn.disabled = true;
  }

  if (firstRow.children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((element) => {
    element.lastElementChild.remove();
  });

  if (firstRow.children.length < 3) {
    removeColumn.disabled = true;
  }

  if (firstRow.children.length < 10) {
    appendColumn.disabled = false;
  }
});
