'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('.field > tbody');
  const row = table.lastElementChild.cloneNode(true);

  table.append(row);

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

appendColumn.addEventListener('click', () => {
  const table = document.querySelector('.field > tbody');

  [...table.querySelectorAll('tr')].forEach(tr => {
    const columnCeil = tr.lastElementChild.cloneNode(true);

    tr.append(columnCeil);

    if (tr.childElementCount === 10) {
      appendColumn.disabled = true;
    };

    if (tr.childElementCount > 2) {
      removeColumn.disabled = false;
    };
  });
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('.field > tbody');

  [...table.querySelectorAll('tr')].forEach(tr => {
    tr.lastElementChild.remove();

    if (tr.childElementCount < 10) {
      appendColumn.disabled = false;
    };

    if (tr.childElementCount === 2) {
      removeColumn.disabled = true;
    };
  });
});
