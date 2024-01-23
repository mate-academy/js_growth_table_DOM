'use strict';

const appendRow = document.querySelector('.append-row');

const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');

const removeColumn = document.querySelector('.remove-column');

appendColumn.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');

  tableRows.forEach(element => {
    element.insertAdjacentHTML('beforeend', '<td></td>');
  });

  const firstRow = document.querySelector('tr');

  if (firstRow.children.length > 9) {
    appendColumn.disabled = true;
  }

  if (firstRow.children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');

  tableRows.forEach(element => {
    element.lastElementChild.remove();
  });

  const firstRow = document.querySelector('tr');

  if (firstRow.children.length < 3) {
    removeColumn.disabled = true;
  }

  if (firstRow.children.length < 10) {
    appendColumn.disabled = false;
  }
});

appendRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  const firstRow = document.querySelector('tr');

  tbody.insertAdjacentHTML('beforeEnd',
    `${firstRow.outerHTML}`);

  const tableRows = document.querySelectorAll('tr');

  if (tableRows.length > 9) {
    appendRow.disabled = true;
  }

  if (tableRows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRow.disabled = false;
  }
});
