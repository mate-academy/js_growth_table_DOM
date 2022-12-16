'use strict';

const field = document.querySelector('.container');
const tBody = document.querySelector('tbody');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function addRow(table) {
  table.firstElementChild.before(table.firstElementChild.cloneNode(true));
}

function removeRow(table) {
  table.lastElementChild.remove();
}

function addColumn(table) {
  Array.from(table.rows).forEach(row => row
    .lastElementChild
    .after(row.lastElementChild.cloneNode(true)));
}

function removeColumn(table) {
  Array.from(table.rows).forEach(row => row
    .lastElementChild.remove());
}

function setAttrDisabled(el) {
  el.setAttribute('disabled', '');
}

function removeAttrDisabled(el) {
  el.removeAttribute('disabled');
}

field.addEventListener('click', (ev) => {
  const buttons = ev.target.closest('.button');

  if (!buttons) {
    return;
  }

  if (buttons.closest('.append-row')) {
    if (tBody.rows.length < 10) {
      addRow(tBody);
      removeAttrDisabled(removeRowBtn);
    }

    if (tBody.rows.length === 10) {
      setAttrDisabled(addRowBtn);
    }
  }

  if (buttons.closest('.remove-row')) {
    if (tBody.rows.length <= 10) {
      removeAttrDisabled(addRowBtn);
      removeRow(tBody);
    }

    if (tBody.rows.length === 2) {
      setAttrDisabled(removeRowBtn);
    }
  }

  if (buttons.closest('.append-column')) {
    if (tBody.rows[0].cells.length < 10) {
      addColumn(tBody);
      removeAttrDisabled(removeColBtn);
    }

    if (tBody.rows[0].cells.length === 10) {
      setAttrDisabled(addColBtn);
    }
  }

  if (buttons.closest('.remove-column')) {
    if (tBody.rows[0].cells.length <= 10) {
      removeAttrDisabled(addColBtn);
      removeColumn(tBody);
    }

    if (tBody.rows[0].cells.length === 2) {
      setAttrDisabled(removeColBtn);
    }
  }
});
