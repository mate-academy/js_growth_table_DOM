'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tbody = document.querySelector('.field > tbody');
const tr = tbody.querySelector('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (tbody.childElementCount < MAX_COUNT) {
    removeRow.disabled = false;

    const tRow = tbody.querySelector('tr');

    tbody.innerHTML += tRow.innerHTML;
  }

  if (tbody.childElementCount === MAX_COUNT) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (tbody.childElementCount > MIN_COUNT) {
    appendRow.disabled = false;

    const delRow = tbody.querySelector('tr');

    delRow.remove();
  }

  if (tbody.childElementCount === MIN_COUNT) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  if (tr.childElementCount < MAX_COUNT) {
    removeColumn.disabled = false;

    const tRowAllForAdd = tbody.querySelectorAll('tr');
    const td = document.createElement('td');

    tRowAllForAdd.forEach((el) => {
      el.innerHTML += td.outerHTML;
    });
  }

  if (tr.childElementCount === MAX_COUNT) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (tr.childElementCount > MIN_COUNT) {
    appendColumn.disabled = false;

    const tRowAllForDel = tbody.querySelectorAll('tr');

    tRowAllForDel.forEach((el) => {
      el.firstElementChild.remove();
    });
  }

  if (tr.childElementCount === MIN_COUNT) {
    removeColumn.disabled = true;
  }
});
