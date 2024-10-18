'use strict';

const table = document.querySelector('.field');
const rowRemove = document.querySelector('.remove-row');
const rowAdd = document.querySelector('.append-row');
const columnAdd = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');

const MIN_VALUE = 2;
const MAX_VALUE = 10;

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  if (!target) {
    return;
  }

  changeTable(target);
});

function changeTable(elem) {
  const addRow = elem.closest('.append-row');
  const addColumn = elem.closest('.append-column');
  const removeRow = elem.closest('.remove-row');
  const removeColumn = elem.closest('.remove-column');

  if (addRow) {
    const cloneElem = table.rows[0].cloneNode(true);

    table.append(cloneElem);

    if (table.rows.length === MAX_VALUE) {
      addAttribute(addRow);
    }

    check();
  }

  if (removeRow) {
    table.rows[table.rows.length - 1].remove();

    if (table.rows.length === MIN_VALUE) {
      addAttribute(removeRow);
    }

    check();
  }

  if (addColumn) {
    [...table.rows].forEach((el) => {
      const td = document.createElement('td');

      el.append(td);
    });

    if (table.rows[0].cells.length === MAX_VALUE) {
      addAttribute(addColumn);
    }
    check();
  }

  if (removeColumn) {
    [...table.rows].forEach((el) => {
      el.cells[el.cells.length - 1].remove();
    });

    if (table.rows[0].cells.length === MIN_VALUE) {
      addAttribute(removeColumn);
    }
    check();
  }
}

function addAttribute(el) {
  el.setAttribute('disabled', 'true');
}

function removeAttribute(el) {
  el.removeAttribute('disabled');
}

function check() {
  if (table.rows.length > MIN_VALUE && rowRemove.hasAttribute('disabled')) {
    removeAttribute(rowRemove);
  } else if (table.rows.length < MAX_VALUE && rowAdd.hasAttribute('disabled')) {
    removeAttribute(rowAdd);
  } else if (
    table.rows[0].cells.length > MIN_VALUE &&
    columnRemove.hasAttribute('disabled')
  ) {
    removeAttribute(columnRemove);
  } else if (
    table.rows[0].cells.length < MAX_VALUE &&
    columnAdd.hasAttribute('disabled')
  ) {
    removeAttribute(columnAdd);
  } else {
  }
}
