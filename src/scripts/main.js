/* eslint-disable no-useless-return */
'use strict';

const tbody = document.querySelector('tbody');

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');

const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

buttonAppendRow.addEventListener('click', () => {
  if (tbody.children.length < 10) {
    buttonRemoveRow.disabled = false;

    const element = tbody.lastElementChild.cloneNode(true);

    tbody.append(element);
  }

  if (tbody.children.length === 10) {
    buttonAppendRow.disabled = true;

    return;
  };
});

buttonRemoveRow.addEventListener('click', () => {
  if (tbody.children.length > 2) {
    buttonAppendRow.disabled = false;
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === 2) {
    buttonRemoveRow.disabled = true;

    return;
  }
});

buttonAppendColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    buttonRemoveColumn.disabled = false;

    [...rows].forEach(row => {
      row.append(row.lastElementChild.cloneNode(true));
    });
  }

  if (rows[0].children.length === 10) {
    buttonAppendColumn.disabled = true;

    return;
  };
});

buttonRemoveColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    buttonAppendColumn.disabled = false;

    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });
  }

  if (rows[0].children.length === 2) {
    buttonRemoveColumn.disabled = true;

    return;
  };
});
