'use strict';

const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');
const plusRow = document.querySelector('.append-row');
const minusRow = document.querySelector('.remove-row');
const plusColumn = document.querySelector('.append-column');
const minusColumn = document.querySelector('.remove-column');
const row = document.querySelector('tr');

container.addEventListener('click', (ev) => {
  const button = ev.target;
  const rows = [...tbody.rows];

  if (button === plusRow) {
    tbody.append(row.cloneNode(true));
  }

  if (button === minusRow) {
    tbody.lastElementChild.remove();
  }

  minusRow.disabled = tbody.children.length === 2;
  plusRow.disabled = tbody.children.length === 10;

  if (button === plusColumn) {
    rows.forEach((el) => {
      el.append(row.cells[0].cloneNode(true));
    });
  }

  if (button === minusColumn) {
    rows.forEach((el) => {
      el.lastElementChild.remove();
    });
  }

  plusColumn.disabled = row.children.length === 10;
  minusColumn.disabled = row.children.length === 2;
});
