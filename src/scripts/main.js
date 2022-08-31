'use strict';

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('.field > tbody');
  const rows = document.querySelectorAll('tr');
  const rowCopy = rows[rows.length - 1].outerHTML;

  table.insertAdjacentHTML('beforeend', rowCopy);

  if (table.childElementCount === 10) {
    appendRow.disabled = true;
  }

  if (table.childElementCount > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('.field > tbody');

  table.lastElementChild.remove();

  if (table.childElementCount === 2) {
    removeRow.disabled = true;
  }

  if (table.childElementCount < 10) {
    appendRow.disabled = false;
  }
});

appendCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    const td = document.createElement('td');

    row.insertAdjacentElement('beforeend', td);
  });

  if (rows[0].children.length === 10) {
    appendCol.disabled = true;
  }

  if (rows[0].children.length > 2) {
    removeCol.disabled = false;
  }
});

removeCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    row.children[row.children.length - 1].remove();
  });

  if (rows[0].children.length === 2) {
    removeCol.disabled = true;
  }

  if (rows[0].children.length < 10) {
    appendCol.disabled = false;
  }
});
